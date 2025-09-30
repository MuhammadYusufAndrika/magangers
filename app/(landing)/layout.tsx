export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-[#f7f1d9] to-[#bbaa87] bg-cover">
        {children}
    </div>
  );
}
