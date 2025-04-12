import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import { poppins } from "../app/fonts";
import { TChildren } from "@/lib/types/types";

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
