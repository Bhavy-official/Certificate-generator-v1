# ⚙️ Setup & Deployment Guide

Follow this guide to get the Certificate Generator up and running on your local machine or in a production environment.

## 📌 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.x or higher recommended)
- **npm** or **yarn**
- **MongoDB** (Local instance or MongoDB Atlas account)

---

## 🚀 Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Bhavy-official/Certificate-generator-v1
cd cert-generator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a file named `.env.local` in the root directory:
```bash
touch .env.local
```
Add the following configuration:
```env
# MongoDB Connection String
# Replace with your local URI or Atlas connection string
MONGODB_URI=mongodb://localhost:27017/cert-gen
```

### 4. Database Initialization
You don't need to manually create collections. Mongoose will automatically create the `certificates` collection in your specified database when the first upload occurs.

---

## 🖥️ Running the Application

### Development Mode
Runs the app with hot-reloading for development:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Production Build
To create an optimized production build:
```bash
npm run build
npm start
```

---

## 🛠️ Customizing the Certificate

The PDF design is controlled by the `lib/pdfGenerator.ts` file. You can adjust the following:

- **Dimensions**: The default is A4 landscape (`[842, 595]`).
- **Text Positioning**: Change the `x` and `y` coordinates in `page.drawText()`.
- **Fonts**: You can embed custom fonts by adding them to the `public/fonts` folder and using `pdf-lib`'s font embedding feature.

---

## 🚢 Deployment (Vercel)

The easiest way to deploy this Next.js app is via [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Add the `MONGODB_URI` environment variable in the Vercel Dashboard.
4. Deploy!

> [!WARNING]
> If using **MongoDB Atlas**, ensure you have whitelisted the IP addresses (or set to `0.0.0.0/0` for Vercel) in the Atlas Network Access settings.

---

## 🧪 Testing the Flow

1. Prepare a sample CSV file with headers: `name`, `email`, `course`, `date`.
2. Open the app and upload the CSV.
3. Wait for the "Uploaded!" alert.
4. Click "Generate Certificates".
5. A `certificates.zip` file containing individual PDFs should start downloading.

---

Need help? Open an issue in the repository!
