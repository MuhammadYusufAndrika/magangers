import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), "public", "images", "gallery");

    // Check if directory exists
    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json({ error: "Gallery directory not found" }, { status: 404 });
    }

    // Read all files in the directory
    const allFiles = fs.readdirSync(galleryPath);

    // Filter and categorize files
    const supportedImageFormats = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const videoFormats = [".mp4", ".webm", ".ogg"];
    const unsupportedFormats = [".heic", ".HEIC"];

    const images = allFiles
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return supportedImageFormats.includes(ext);
      })
      .map((file) => ({
        original: `/images/gallery/${file}`,
        thumbnail: `/images/gallery/${file}`,
        filename: file,
      }));

    const videos = allFiles
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return videoFormats.includes(ext);
      })
      .map((file) => ({
        src: `/images/gallery/${file}`,
        filename: file,
      }));

    const unsupportedFiles = allFiles.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return unsupportedFormats.includes(ext);
    });

    return NextResponse.json({
      images,
      videos,
      unsupportedFiles,
      total: allFiles.length,
      supported: images.length + videos.length,
      message: unsupportedFiles.length > 0 ? `${unsupportedFiles.length} HEIC files found but not displayed (browser incompatible)` : "All files are supported",
    });
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return NextResponse.json({ error: "Failed to read gallery" }, { status: 500 });
  }
}
