import { PDFDocument, StandardFonts } from "pdf-lib";

export async function generatePDF(data: any) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]);

  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  page.drawText("CERTIFICATE OF COMPLETION", {
    x: 200,
    y: 500,
    size: 25,
    font,
  });

  page.drawText(data.name, {
    x: 250,
    y: 350,
    size: 30,
    font,
  });

  page.drawText(`Course: ${data.course}`, {
    x: 250,
    y: 300,
    size: 18,
    font,
  });

  page.drawText(`ID: ${data.certificate_id}`, {
    x: 250,
    y: 250,
    size: 14,
    font,
  });

  return await pdfDoc.save();
}