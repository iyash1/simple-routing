import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "🥳 Simple Web App",
  description: "Simple web app generated by Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
                        connect-src 'self' https://cdn.jsdelivr.net https://jsonplaceholder.typicode.com;
                        style-src 'self' 'unsafe-inline';
                        img-src 'self' https://images.unsplash.com;
                        font-src 'self';
                        object-src 'none';
                    "
        />
      </head>
      <body className={quickSand.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
