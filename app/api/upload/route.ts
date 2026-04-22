import { NextRequest, NextResponse } from "next/server";
import Papa from "papaparse";
import { connectDB } from "@/lib/mongodb";
import Certificate from "@/models/Certificate";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  await connectDB();

  const formData = await req.formData();
  const file = formData.get("file") as File;

  const text = await file.text();

  const parsed = Papa.parse(text, { header: true });

  const results = [];

  for (const row of parsed.data as any[]) {
    const cert = await Certificate.create({
      ...row,
      certificate_id: "CERT-" + uuidv4(),
    });
    results.push(cert);
  }

  return NextResponse.json({ success: true, data: results });
}