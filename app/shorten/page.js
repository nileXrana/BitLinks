"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChangeUrl = (e) => {
    seturl(e.target.value)
    setError("")
  }
  const handleChangeShortUrl = (e) => {
    setshorturl(e.target.value)
    setError("")
  }

  const isValidUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const generate = () => {
    // Client-side validation
    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL (must start with http:// or https://)");
      return;
    }
    if (!shorturl.trim()) {
      setError("Please enter a short URL");
      return;
    }
    if (shorturl.length < 3) {
      setError("Short URL must be at least 3 characters");
      return;
    }
    if (!/^[a-zA-Z0-9-_]+$/.test(shorturl)) {
      setError("Short URL can only contain letters, numbers, hyphens, and underscores");
      return;
    }

    setError("");
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        setLoading(false);
        if(result.success){
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          seturl("");
          setshorturl("");
        } else {
          setError(result.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("Failed to generate URL. Please try again.");
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ URL Shortener
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent mb-4">
            Create Short Links
          </h1>
          <p className="text-gray-600 text-lg">
            Transform long URLs into short, shareable links in seconds
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-purple-500/10 p-8 md:p-12 border border-purple-100">
          <div className="space-y-6">
            {/* Long URL Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-lg">🔗</span>
                Enter your long URL
              </label>
              <input 
                type="text" 
                value={url} 
                placeholder="https://example.com/very-long-url-that-needs-shortening" 
                onChange={handleChangeUrl} 
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all bg-gray-50 hover:bg-white text-gray-800 placeholder:text-gray-400"
              />
            </div>

            {/* Short URL Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-lg">✂️</span>
                Choose your custom short URL
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 bg-gray-100 px-4 py-4 rounded-xl border-2 border-gray-200 font-mono text-sm">
                  bitlinks.nileshrana.me/
                </span>
                <input 
                  type="text" 
                  value={shorturl} 
                  placeholder="my-link" 
                  onChange={handleChangeShortUrl} 
                  className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all bg-gray-50 hover:bg-white text-gray-800 placeholder:text-gray-400 font-mono"
                />
              </div>
              <p className="text-xs text-gray-500 ml-1">Letters, numbers, hyphens, and underscores only (min 3 characters)</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3 animate-shake">
                <span className="text-xl">⚠️</span>
                <p className="text-red-700 font-semibold flex-1">{error}</p>
              </div>
            )}

            {/* Generate Button */}
            <button 
              onClick={generate} 
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 text-white p-5 rounded-xl font-bold shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-[1.02] disabled:cursor-not-allowed disabled:scale-100 text-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Generating...
                </>
              ) : (
                <>
                  <span></span>
                  Generate Short Link
                </>
              )}
            </button>
          </div>

          {/* Success Result */}
          {generated && (
            <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl animate-fadeIn">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <div className="flex-1">
                  <h3 className="font-bold text-green-800 text-lg mb-1">Success! Your link is ready</h3>
                  <p className="text-green-700 text-sm">Share it anywhere you like</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 border-2 border-green-200">
                <div className="flex items-center gap-3">
                  <Link 
                    target='_blank' 
                    href={generated}
                    className="flex-1 text-purple-600 hover:text-purple-800 font-mono font-semibold truncate text-lg"
                  >
                    {generated}
                  </Link>
                  <button
                    onClick={copyToClipboard}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <span>✓</span>
                        Copied!
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100 text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-800 mb-2">Secure</h3>
            <p className="text-gray-600 text-sm">Your links are safe and private</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-600 text-sm">Instant link generation</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100 text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-gray-800 mb-2">Custom</h3>
            <p className="text-gray-600 text-sm">Choose your own short URLs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
