import { NextRequest, NextResponse } from "next/server";
import Papa from "papaparse";
import { connectDB } from "@/lib/mongodb";
import Certificate from "@/models/Certificate";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const text = await file.text();
    const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });

    if (parsed.errors.length > 0) {
      return NextResponse.json({ error: "Invalid CSV format", details: parsed.errors }, { status: 400 });
    }

    const results = [];

    for (const row of parsed.data as any[]) {
      // Basic validation for name and course
      if (!row.name || !row.course) continue;

      const cert = await Certificate.create({
        ...row,
        certificate_id: "CERT-" + uuidv4().slice(0, 8).toUpperCase(),
      });
      results.push(cert);
    }

    return NextResponse.json({ success: true, count: results.length, data: results });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 });
  }
}