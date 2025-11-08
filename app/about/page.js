import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              👋 About Us
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent mb-4">
            About BitLinks
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A modern URL shortening service built with privacy and simplicity in mind
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="bg-white rounded-3xl shadow-xl shadow-purple-500/10 p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">About the Developer</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                I'm <span className="font-bold text-purple-600">Nilesh Rana</span>, a passionate full stack developer.
              </p>
              <p className="leading-relaxed">
                I built BitLinks to showcase modern web development practices while solving a real problem - creating a URL shortener that respects user privacy.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/in/nileshrana5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nileXrana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-5 py-2.5 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-3xl shadow-xl shadow-purple-500/10 p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Project Mission</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                BitLinks was created with three core principles:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl">•</span>
                  <span><span className="font-semibold">Privacy First:</span> No tracking, no analytics, no data collection on users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl">•</span>
                  <span><span className="font-semibold">Simplicity:</span> Clean interface without unnecessary features or complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl">•</span>
                  <span><span className="font-semibold">Performance:</span> Fast link generation and instant redirection</span>
                </li>
              </ul>
              <p className="leading-relaxed pt-4">
                We're open to suggestions and continuously improving the service!
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl shadow-xl shadow-purple-500/30 p-10 text-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Tech Stack</h2>
            <p className="text-purple-100">Built with modern technologies</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-bold text-lg mb-1">React 19</h3>
              <p className="text-sm text-purple-100">UI Framework</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105">
              <div className="text-4xl mb-3">▲</div>
              <h3 className="font-bold text-lg mb-1">Next.js 15</h3>
              <p className="text-sm text-purple-100">React Framework</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105">
              <div className="text-4xl mb-3">🍃</div>
              <h3 className="font-bold text-lg mb-1">MongoDB</h3>
              <p className="text-sm text-purple-100">Database</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg mb-1">Tailwind CSS</h3>
              <p className="text-sm text-purple-100">Styling</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔒', title: 'Zero Tracking', desc: 'No analytics or user tracking' },
              { icon: '⚡', title: 'Instant Creation', desc: 'Generate links in milliseconds' },
              { icon: '✨', title: 'Custom URLs', desc: 'Choose your own short links' },
              { icon: '📱', title: 'Responsive Design', desc: 'Works on all devices' },
              { icon: '🎯', title: 'Duplicate Check', desc: 'Prevents duplicate short URLs' },
              { icon: '🔄', title: 'Instant Redirect', desc: 'Lightning-fast link redirection' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page
