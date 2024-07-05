import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Header } from 'app/components/shared';
import ContextProvider from 'app/context/MyContext';
import PaginatorComponent from 'app/components/home/Paginator/Paginator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MoBee - Movie Web Page',
  description: 'This is a movie web page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ContextProvider >
          <Header />
          { children }          
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
