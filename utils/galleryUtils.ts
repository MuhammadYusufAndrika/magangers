// Utility untuk menangani format file gallery
export const getSupportedFiles = (files: string[]) => {
  const supportedImageFormats = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
  const videoFormats = [".mp4", ".webm", ".ogg"];
  const unsupportedFormats = [".heic", ".HEIC"]; // Format HEIC tidak didukung browser

  const images = files.filter((file) => {
    const ext = file.substring(file.lastIndexOf(".")).toLowerCase();
    return supportedImageFormats.includes(ext);
  });

  const videos = files.filter((file) => {
    const ext = file.substring(file.lastIndexOf(".")).toLowerCase();
    return videoFormats.includes(ext);
  });

  const unsupported = files.filter((file) => {
    const ext = file.substring(file.lastIndexOf(".")).toLowerCase();
    return unsupportedFormats.includes(ext);
  });

  return { images, videos, unsupported };
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const getFileExtension = (filename: string): string => {
  return filename.substring(filename.lastIndexOf(".")).toLowerCase();
};

// Mapping untuk konversi manual file HEIC ke JPG
// Jika Anda memiliki versi JPG dari file HEIC, tambahkan mapping di sini
export const heicToJpgMapping: { [key: string]: string } = {
  "FullSizeRender.heic": "FullSizeRender.jpg", // jika ada versi JPG
  "IMG_2775 (1).HEIC": "IMG_2775.jpg", // sudah ada versi JPG
  "IMG_2775 (2).HEIC": "IMG_2775.jpg",
  "IMG_2775.HEIC": "IMG_2775.jpg",
  "IMG_2783.HEIC": "IMG_2783.jpg", // jika ada versi JPG
  "IMG_6009.HEIC": "IMG_6009.jpg", // jika ada versi JPG
};
