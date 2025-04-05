/**
 * URL to Drive Downloader
 *
 * This Google Workspace app downloads content from URLs directly to Google Drive
 * Supports images, PDFs, videos, and other file types
 */

/**
 * Creates a menu entry in the Google Drive UI when the document is opened.
 */
function onOpen() {
  DriveApp.getUi()
    .createMenu("URL to Drive")
    .addItem("Download from URL", "showSidebar")
    .addToUi();
}

/**
 * Handles GET requests to the web app.
 * This is required when the script is deployed as a web app.
 * @param {Object} e - The event object from the request.
 * @return {HtmlOutput} The HTML to display.
 */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("Sidebar")
    .setTitle("URL to Drive Downloader")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Shows a sidebar with a form to enter URLs for downloading.
 */
function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile("Sidebar")
    .setTitle("URL to Drive Downloader")
    .setWidth(300);
  DriveApp.getUi().showSidebar(html);
}

/**
 * Downloads content from a URL directly to Google Drive.
 * @param {string} url - The URL of the content to download.
 * @param {string} fileName - The file name to use when saving (optional).
 * @param {string} folderId - The folder ID to save the file in (optional).
 * @return {Object} Object containing success status and file details or error message.
 */
function downloadFromUrl(url, fileName, folderId) {
  try {
    // Validate URL
    if (!url || url.trim() === "") {
      return { success: false, error: "Please provide a valid URL" };
    }

    // Setup fetch options with browser-like headers to avoid getting HTML instead of file content
    var fetchOptions = {
      muteHttpExceptions: true,
      followRedirects: true,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Dest": "document",
      },
    };

    // Fetch content from URL
    var response = UrlFetchApp.fetch(url, fetchOptions);

    // Check if fetch was successful
    if (response.getResponseCode() >= 400) {
      return {
        success: false,
        error:
          "Failed to fetch content. HTTP status: " + response.getResponseCode(),
      };
    }

    // Get content blob
    var contentBlob = response.getBlob();
    var contentType = contentBlob.getContentType();

    // Check if we received HTML when we probably shouldn't have
    // This is a heuristic - if URL looks like a file but we got HTML, try a different approach
    var isLikelyHTML = contentType.includes("html");
    var hasFileExtension =
      /\.(jpg|jpeg|png|gif|pdf|mp4|mp3|zip|doc|docx|xls|xlsx|ppt|pptx|txt)$/i.test(
        url
      );

    if (isLikelyHTML && hasFileExtension) {
      // Try with different fetch options that might work better for direct file downloads
      fetchOptions.headers = {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Range: "bytes=0-",
      };

      response = UrlFetchApp.fetch(url, fetchOptions);
      contentBlob = response.getBlob();
      contentType = contentBlob.getContentType();

      // If we still got HTML, this is likely not a direct file link
      if (contentType.includes("html")) {
        return {
          success: false,
          error:
            "The URL appears to be a webpage, not a direct file link. Please find the direct download link for the file.",
        };
      }
    }

    // Set file name if not provided
    if (!fileName || fileName.trim() === "") {
      // Try to get filename from Content-Disposition header first
      var headers = response.getHeaders();
      if (headers["Content-Disposition"]) {
        var contentDisposition = headers["Content-Disposition"];
        var filenameMatch = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
          contentDisposition
        );
        if (filenameMatch && filenameMatch[1]) {
          fileName = filenameMatch[1].replace(/['"]/g, "");
        }
      }

      // If no filename from header, try URL
      if (!fileName || fileName.trim() === "") {
        fileName = getFileNameFromUrl(url) || "downloaded_file";
      }
    }

    // Get content type and add extension if needed
    if (!fileName.includes(".")) {
      var extension = getExtensionFromContentType(contentType);
      if (extension) {
        fileName += "." + extension;
      }
    }

    // Create file in Drive
    var file;
    if (folderId && folderId.trim() !== "") {
      var folder = DriveApp.getFolderById(folderId);
      file = folder.createFile(contentBlob.setName(fileName));
    } else {
      file = DriveApp.createFile(contentBlob.setName(fileName));
    }

    return {
      success: true,
      fileId: file.getId(),
      fileName: file.getName(),
      fileUrl: file.getUrl(),
      fileSize: file.getSize(),
      mimeType: file.getMimeType(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Error downloading file: " + error.toString(),
    };
  }
}

/**
 * Gets a filename from a URL.
 * @param {string} url - The URL to extract filename from.
 * @return {string} The extracted filename or null if not found.
 */
function getFileNameFromUrl(url) {
  try {
    var urlObj = new URL(url);
    var pathname = urlObj.pathname;
    var segments = pathname.split("/");
    var lastSegment = segments[segments.length - 1];

    // Remove query parameters if any
    if (lastSegment.includes("?")) {
      lastSegment = lastSegment.split("?")[0];
    }

    // Decode URI components
    lastSegment = decodeURIComponent(lastSegment);

    // Return last segment if it's not empty
    return lastSegment && lastSegment.trim() !== "" ? lastSegment : null;
  } catch (e) {
    // If URL parsing fails, try to extract filename using regex
    var matches = url.match(/\/([^\/?#]+)[^\/]*$/);
    if (matches && matches.length > 1) {
      return decodeURIComponent(matches[1]);
    }
    return null;
  }
}

/**
 * Gets a file extension from a content type.
 * @param {string} contentType - The content type to get extension for.
 * @return {string} The file extension.
 */
function getExtensionFromContentType(contentType) {
  var extensionMap = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
    "application/pdf": "pdf",
    "video/mp4": "mp4",
    "video/webm": "webm",
    "audio/mpeg": "mp3",
    "text/plain": "txt",
    "text/html": "html",
    "application/json": "json",
    "application/zip": "zip",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "docx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      "pptx",
  };

  return extensionMap[contentType] || "";
}

/**
 * Gets a list of folders in the user's Drive for selection.
 * @return {Array} Array of folder objects with id and name.
 */
function getFolders() {
  var folders = [];
  var folderIterator = DriveApp.getFolders();

  while (folderIterator.hasNext()) {
    var folder = folderIterator.next();
    folders.push({
      id: folder.getId(),
      name: folder.getName(),
    });
  }

  return folders;
}
