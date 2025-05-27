"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")
  const handleChangeUrl = (e) => {
    seturl(e.target.value)
  }
  const handleChangeShortUrl = (e) => {
    setshorturl(e.target.value)
  }
  const generate = () => {
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
        }
        seturl("");
        setshorturl("");
        alert(result.message);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className=' rounded-2xl flex flex-col gap-5 mt-5 items-center bg-purple-100 p-5 w-[60vw] m-auto max-md:w-[80vw] max-sm:w-[90vw]'>
      <h1 className='font-bold text-2xl '>Generate your short URLs</h1>
      <div className='flex flex-col w-[40vw] gap-3 max-md:w-[60vw] max-sm:w-[80vw]'>
        <input type="text" value={url} placeholder='Enter your URL' onChange={handleChangeUrl} className='border-1 p-1 px-2 focus:outline-purple-700 rounded-md bg-white' />
        <input type="text" value={shorturl} placeholder='Enter your preferred short URL text' onChange={handleChangeShortUrl} className='border-1 p-1 px-2 focus:outline-purple-700 rounded-md bg-white' />
        <button onClick={generate} className='w-[25vw] m-auto border-1 p-1 px-2 my-3 focus:outline-purple-700 rounded-md bg-purple-500 text-white font-bold cursor-pointer'>Generate</button>
      </div>

        {generated && <div>
            <div className='font-bold'>Your Link : </div>
            <Link target='_blank' href={generated}>{generated}</Link>
          </div>}
    </div>
  )
}

export default page
