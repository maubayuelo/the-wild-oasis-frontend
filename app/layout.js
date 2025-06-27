import Header from "./_components/Header";
//import Footer from './_components/Footer';
import {Josefin_Sans} from 'next/font/google';
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-josefin-sans',
});
import '@/app/_styles/globals.css';
import { ReservationProvider } from "./_components/ReservationContext";



export const metadata = {
  //title: 'The Wild Oasis',
  title: {
    template: '%s | The Wild Oasis',
    default: 'Welcome to The Wild Oasis',
  },
  description: "Luxury Glamping in the Heart of the Tayrona Park",
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={`${josefinSans.className} bg-primary-950 text-primary-100 flex flex-col antialiased min-h-screen flex flex-col relative`}>
        <Header/>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
        {/* <Footer/> */}
      </body>
    </html>
  )
}




