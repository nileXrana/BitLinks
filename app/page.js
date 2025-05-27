import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBoldItalic.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const poppins2 = localFont({
  src: "./fonts/Poppins-LightItalic.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
    <div>
      <main className="bg-purple-200">
        <section className="grid grid-cols-2 h-[90vh] max-lg:grid-cols-1">
          <div className="flex flex-col gap-5 items-center justify-center p-10 py-0">
            <p className={`text-2xl text-center font-bold ${poppins.className}`}>
              The best URL shortener in the Market
            </p>
            <p className={`text-md ${poppins2.className} text-center mx-5`}>
              We are the most
              straightfoward URL Shortener in the world. Most of the url
              shorteners will track you or ask you to give your details for login. We understand your privacy and hence we have created this URL Shortner
            </p>
            <div className="flex gap-5">
              <Link href="/shorten"><button className=' bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold text-white cursor-pointer transition-all hover:text-2xl'>Try Now</button></Link>
              <button className=' bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold text-white cursor-pointer transition-all hover:text-2xl'><a target='_blank' href="https://github.com/nileXrana">GitHub</a></button>
            </div>
          </div>
          <div className="relative mb-20">
            <Image className="mix-blend-darken" alt="image of a vector" src={"/vector.jpg"} fill />
          </div>
        </section>
      </main>
    </div>
  );
}
