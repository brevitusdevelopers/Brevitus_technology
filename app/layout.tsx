import "./globals.css";
import NavigationBar from "@/components/home/NavigationBar"; 
import Footer from "@/components/home/Footer"; // Import the newly created Footer
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
          {/* Flex column setup to ensure footer stays at the bottom */}
          <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
            <NavigationBar />
            
            {/* flex-grow ensures this area expands, pushing the footer down if the page is short */}
            <main className="flex-grow pt-24 pb-12">
              {children}
            </main>

            {/* Place the Footer component at the bottom */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}