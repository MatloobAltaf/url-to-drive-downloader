import React from 'react';
import { Download, Shield, FileText, ArrowRight, FolderOpen, FileType, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="URL to Drive Downloader" className="w-8 h-8" />
            <span className="text-xl font-semibold text-gray-900">URL to Drive Downloader</span>
          </div>
          <div className="flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900">Use Cases</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Save Web Content Directly to Google Drive
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Download files from any URL straight to your Google Drive without using your device's storage. Fast, secure, and efficient cloud-based transfers.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="https://script.google.com/macros/s/AKfycbxPGxnB1payQU06TV72dO2w918Zg_Grs9jc7fY5zfYbkkfAwqV5z_xZucmJz-KzTNFeRw/exec"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  <Download className="w-5 h-5 mr-2" />
                  Start Downloading
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Download className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Direct Download</h3>
                <p className="text-gray-600">Save files from any URL straight to Drive without downloading locally first.</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <FileType className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Detection</h3>
                <p className="text-gray-600">Automatic detection of filenames and content types from URLs.</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <FolderOpen className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Folder Organization</h3>
                <p className="text-gray-600">Choose any Drive folder as your download destination.</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <Settings className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Naming</h3>
                <p className="text-gray-600">Rename files during the download process as needed.</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Transfer</h3>
                <p className="text-gray-600">All transfers are encrypted and processed in the cloud.</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <img src="/logo.svg" alt="Multiple Formats" className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
                <p className="text-gray-600">Support for images, PDFs, videos, documents, and more.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div id="how-it-works" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              How it Works
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img src="/logo.svg" alt="Paste URL" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Paste URL</h3>
                <p className="text-gray-600">Enter the direct URL of the file you want to download</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Settings className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Customize</h3>
                <p className="text-gray-600">Optionally rename your file</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <FolderOpen className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Select Folder</h3>
                <p className="text-gray-600">Choose your Drive destination</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Download className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4. Download</h3>
                <p className="text-gray-600">Click to save directly to Drive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div id="use-cases" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Research Materials</h3>
                <p className="text-gray-600">Save academic papers and research documents directly to Drive</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Document Archive</h3>
                <p className="text-gray-600">Preserve important online documents and resources</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Media Collection</h3>
                <p className="text-gray-600">Download media files for projects without local storage</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Content Backup</h3>
                <p className="text-gray-600">Back up valuable online content to your Drive</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://drive.google.com/file/d/1t9zaDA9Bw-WgJ6li_7CUqMkEV3ox8HVh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Privacy Policy
            </a>
            <a
              href="https://drive.google.com/file/d/1q1MqASrhu4Ayf3rjCwiN-j6dXcVrf91I/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Terms of Service
            </a>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} URL to Drive Downloader. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;