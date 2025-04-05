# URL to Drive Downloader

A Google Workspace app that downloads content from URLs directly to Google Drive.

## Features

- Download content from any public URL directly to your Google Drive
- Support for various file types (images, PDFs, videos, documents, etc.)
- Custom file naming
- Choose destination folder in your Drive
- Simple user interface through a sidebar in Google Drive

## How It Works

1. The app adds a menu item to your Google Drive UI
2. When you select "Download from URL" from the menu, a sidebar opens
3. Enter the URL of the content you want to download
4. Optionally, specify a custom filename and destination folder
5. Click the "Download to Drive" button
6. The content is fetched and saved to your Drive

## Supported File Types

The app supports downloading any file type that can be accessed via a public URL, including but not limited to:

- Images (JPG, PNG, GIF, WEBP, etc.)
- Documents (PDF, DOCX, XLSX, PPTX, etc.)
- Videos (MP4, WEBM, etc.)
- Audio files (MP3, etc.)
- Text files
- Archives (ZIP, etc.)

## Setup Instructions

### Deployment via Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/) and create a new project
2. Delete any existing code in the editor
3. Create the following files in your project:
   - `Code.js` - Copy the content from the file in this repository
   - `appsscript.json` - Copy the content from the file in this repository
   - `Sidebar.html` - Copy the content from the file in this repository
4. Save the project (give it a name like "URL to Drive Downloader")
5. Click Deploy > New deployment
6. Select "Web app" as the deployment type
7. Set the following options:
   - Execute as: "User accessing the web app"
   - Who has access: "Anyone within [your domain]" or "Anyone"
8. Click Deploy
9. Authorize the app when prompted

### Using the App

1. Go to your Google Drive
2. You should see a new menu item "URL to Drive" in the menu bar
3. Click on "URL to Drive" > "Download from URL"
4. A sidebar will open where you can enter URLs to download

## Permissions

This app requires the following permissions:

- `https://www.googleapis.com/auth/drive` - To create and manage files in your Google Drive
- `https://www.googleapis.com/auth/drive.file` - To access files created by the app
- `https://www.googleapis.com/auth/script.container.ui` - To display the sidebar UI
- `https://www.googleapis.com/auth/userinfo.email` - To access your email address for authentication

## Limitations

- Can only download files from public URLs (no authentication support)
- Subject to Google Apps Script quotas and limitations
- Maximum file size is limited by Google Drive and Google Apps Script quotas

## Contributing

Feel free to modify and extend this app for your specific needs.
