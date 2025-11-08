import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBoldItalic.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8 z-10">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Fast & Privacy-Focused
                  </span>
                </div>
                <h1 className={`text-5xl font-bold leading-tight ${poppins.className}`}>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                    Shorten URLs
                  </span>
                  <br />
                  <span className="text-gray-800">In Seconds</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Create custom short links without tracking or sign-ups. Fast, simple, and completely private URL shortening service.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/shorten">
                  <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105">
                    Get Started Free
                    <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                  </button>
                </Link>
                <a href="https://github.com/nileXrana/BitLinks" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-bold shadow-md border-2 border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <span className="mr-2">⭐</span>
                    View on GitHub
                  </button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-purple-600">100%</p>
                  <p className="text-sm text-gray-600">Free Forever</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600">0</p>
                  <p className="text-sm text-gray-600">Data Tracking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600">∞</p>
                  <p className="text-sm text-gray-600">Custom Links</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[600px] h-[400px] max-lg:order-first">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <Image 
                className="mix-blend-multiply drop-shadow-2xl relative z-10 object-contain" 
                alt="URL Shortener Illustration" 
                src="/vector.jpg" 
                fill 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose BitLinks?</h2>
            <p className="text-gray-600 text-lg">Simple, fast, and privacy-focused URL shortening</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed">
                No tracking, no analytics, no data collection. Your links, your privacy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Create and share short links instantly. No delays, no loading screens.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Links</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose your own custom short URLs. Make them memorable and branded.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
