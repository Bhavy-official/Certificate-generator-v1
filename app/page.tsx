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
    <div className="p-10">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={upload}>Upload CSV</button>
      <button onClick={generate}>Generate Certificates</button>
    </div>
  );
}