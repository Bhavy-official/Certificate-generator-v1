# 🎓 CertifyIt - Bulk Certificate Generator

A high-performance, automated certificate generation system built with **Next.js**, **MongoDB**, and **PDF-Lib**. This tool allows organizers to bulk-generate professional certificates from CSV data and download them in a single ZIP package.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Key Features

- **🚀 Bulk Generation**: Upload a CSV file and generate hundreds of certificates in seconds.
- **📄 PDF Output**: High-quality PDF generation using `pdf-lib`.
- **📦 ZIP Packaging**: Automatically packages all generated certificates into a single download.
- **🗄️ Persistence**: Stores certificate records in MongoDB for tracking and verification.
- **🛡️ Unique IDs**: Each certificate is assigned a unique alphanumeric ID (e.g., `CERT-A1B2C3D4`).
- **🎨 Responsive UI**: Modern, clean interface built with Tailwind CSS.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **PDF Generation**: [pdf-lib](https://pdf-lib.js.org/)
- **CSV Parsing**: [PapaParse](https://www.papaparse.com/)
- **Compression**: [JSZip](https://stuk.github.io/jszip/)

## 📋 CSV Format Requirements

To ensure successful generation, your CSV file must contain the following headers:

| Header | Description | Example |
| :--- | :--- | :--- |
| `name` | Full name of the participant | John Doe |
| `email` | Participant's email address | john@example.com |
| `course` | Name of the event or course | Cloud Study Jam |
| `date` | Date of completion | 2024-05-15 |

> [!TIP]
> Ensure there are no empty rows at the end of your CSV file for the best results.

## 🚀 Quick Start

1. **Setup Environment Variables**:
   Create a `.env.local` file and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/cert-generator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the App**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```text
├── app/                # Next.js App Router (Routes & UI)
│   ├── api/            # API Endpoints (Upload & Generate)
│   └── layout.tsx      # Global Layout
├── lib/                # Shared Utilities (DB & PDF Logic)
│   ├── mongodb.ts      # MongoDB Connection
│   └── pdfGenerator.ts # PDF Drawing Logic
├── models/             # Mongoose Schemas
└── public/             # Static Assets
```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Developed By 
- Bhavy Manchanda
