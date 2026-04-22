import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  date: String,
  certificate_id: { type: String, unique: true },
  file_name: String,
  created_at: { type: Date, default: Date.now },
});

export default mongoose.models.Certificate ||
  mongoose.model("Certificate", CertificateSchema);