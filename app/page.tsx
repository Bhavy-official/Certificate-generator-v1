"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file!);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    alert("Uploaded!");
  };

  const generate = async () => {
    const res = await fetch("/api/generate");
    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificates.zip";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 transform transition-all hover:scale-[1.02]">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            CertifyIt
          </h1>
          <p className="text-gray-500 font-medium">Bulk Certificate Generator</p>
        </header>

        <div className="space-y-8">
          <div className="relative group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
              Upload CSV List
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer border-2 border-dashed border-gray-200 rounded-2xl p-4 group-hover:border-blue-400"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={upload}
              disabled={!file}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              🚀 Upload Batch
            </button>

            <button
              onClick={generate}
              className="w-full py-4 bg-white border-2 border-indigo-600 text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 hover:-translate-y-1 active:translate-y-0 transition-all shadow-md"
            >
              ⚡ Generate Certificates
            </button>
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-gray-400 font-medium tracking-widest uppercase">
          Developed By Bhavy Manchanda
        </footer>

      </div>
    </div>
  );

}