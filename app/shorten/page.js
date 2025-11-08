"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")
  const [error, setError] = useState("")

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
        if(result.success){
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          seturl("");
          setshorturl("");
          alert(result.message);
        } else {
          setError(result.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to generate URL. Please try again.");
      });
  }
  return (
    <div className=' rounded-2xl flex flex-col gap-5 mt-5 items-center bg-purple-100 p-5 w-[60vw] m-auto max-md:w-[80vw] max-sm:w-[90vw]'>
      <h1 className='font-bold text-2xl '>Generate your short URLs</h1>
      <div className='flex flex-col w-[40vw] gap-3 max-md:w-[60vw] max-sm:w-[80vw]'>
        <input type="text" value={url} placeholder='Enter your URL' onChange={handleChangeUrl} className='border-1 p-1 px-2 focus:outline-purple-700 rounded-md bg-white' />
        <input type="text" value={shorturl} placeholder='Enter your preferred short URL text' onChange={handleChangeShortUrl} className='border-1 p-1 px-2 focus:outline-purple-700 rounded-md bg-white' />
        
        {error && <div className='text-red-600 text-sm font-semibold text-center'>{error}</div>}
        
        <button onClick={generate} className='w-[25vw] m-auto border-1 p-1 px-2 my-3 focus:outline-purple-700 rounded-md bg-purple-500 text-white font-bold cursor-pointer'>Generate</button>
      </div>

        {generated && <div>
            <div className='font-bold'>Your Link : </div>
            <Link target='_blank' href={generated}>{generated}</Link>
          </div>}
    </div>
  )
}

export default Page
