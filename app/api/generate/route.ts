import { NextResponse } from "next/server";
import JSZip from "jszip";
import { generatePDF } from "@/lib/pdfGenerator";
import { records } from "../upload/route";

export async function GET() {
  if (!records.length) {
    return NextResponse.json({ error: "No records found" });
  }

  const zip = new JSZip();

  for (const record of records) {
    const pdfBytes = await generatePDF(record);

    const fileName = `${record.course}_${record.name}_${record.certificate_id}`
      .replace(/\s+/g, "-");

    zip.file(`${fileName}.pdf`, pdfBytes);
  }

  const content = await zip.generateAsync({ type: "nodebuffer" });

  return new NextResponse(content, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=certificates.zip",
    },
  });
}