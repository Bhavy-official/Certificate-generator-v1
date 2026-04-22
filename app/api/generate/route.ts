import { NextResponse } from "next/server";
import JSZip from "jszip";
import { generatePDF } from "@/lib/pdfGenerator";
import { connectDB } from "@/lib/mongodb";
import Certificate from "@/models/Certificate";

export async function GET() {
  await connectDB();

  const records = await Certificate.find().sort({ created_at: -1 });

  if (!records || records.length === 0) {
    return NextResponse.json({ error: "No records found" }, { status: 404 });
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