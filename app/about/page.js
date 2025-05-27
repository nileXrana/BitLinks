import React from 'react'

const Page = () => {
  return (
    <div className="rounded-2xl bg-purple-100 mt-10 w-[80vw] m-auto flex flex-col items-center justify-center p-6 max-md:w-[90vw]">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-2 text-center max-md:text-md max-sm:text-sm">
        I am <b>Nilesh Rana</b>, currently pursuing my B.Tech in Computer Science Engineering from Lovely Professional University (Punjab).
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-2">About BitLinks</h2>
      <p className="text-lg text-center max-w-2xl max-md:text-md max-sm:text-sm">
        <b>BitLinks</b> is a modern, efficient URL shortener that helps you convert long, complex links into short, easy-to-share ones. 
        It provides a clean, simple interface to create, manage, and share shortened links instantly. Whether you’re sharing links on social media, messaging apps, or emails — BitLinks keeps your URLs neat and professional.
      </p>

      <p className="text-lg mt-6">We are open for suggestions !</p>
    </div>
  );
}

export default Page
