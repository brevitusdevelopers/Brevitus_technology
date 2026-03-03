import "./globals.css";
import NavigationBar from "@/components/home/NavigationBar"; 
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-[#050505] font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Central Navigation Bar */}
          <NavigationBar />
          
          {/* Main Content wrapper */}
          <div className="pt-24 min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}