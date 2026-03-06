import "./globals.css";
import NavigationBar from "@/components/home/NavigationBar"; 
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google"; // 1. Import your desired font

// 2. Configure the font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Define a CSS variable name
});

export const metadata = {
  title: "Brevitus Technology",
  description: "Empowering Students to Learn, Build, and Fly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Pass the font variable to the root html tag
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="bg-zinc-50 dark:bg-[#050505] font-sans transition-colors duration-300 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NavigationBar />
          
          <div className="pt-24 min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}