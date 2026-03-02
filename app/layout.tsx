import "./globals.css";
// 1. Import the NavigationBar component here
import NavigationBar from "@/components/home/NavigationBar"; // Adjust this path if you saved it elsewhere

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-[#050505] font-sans">
        
        {/* 2. Place the NavigationBar here so it shows on every page */}
        <NavigationBar />
        
        {/* 3. Wrap children in a div with top padding so the fixed navbar doesn't cover your content */}
        <div className="pt-24 min-h-screen">
          {children}
        </div>
        
      </body>
    </html>
  );
}