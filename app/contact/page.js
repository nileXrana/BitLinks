import React from 'react'

const Page = () => {
  return (
    <div className="rounded-2xl bg-purple-100 w-[50vw] m-auto mt-10 flex flex-col items-center justify-center p-6 max-md:w-[92vw]">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-2xl mb-2">Nilesh Rana</p>
      <p className="text-lg mb-2 text-center">B.Tech CSE, Lovely Professional University (Punjab)</p>
      <p className="text-lg mb-2">
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/nileshrana5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          nileXrana
        </a>
      </p>
      <p className="text-lg mb-2">
        GitHub:{' '}
        <a
          href="https://github.com/nileXrana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          nileXrana
        </a>
      </p>
    </div>
  );
}

export default Page
