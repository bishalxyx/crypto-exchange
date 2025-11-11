import React from 'react'

export default function Cta() {
  return (
    <div className=' flex justify-center p-5'>
      <section className="w-[1250] bg-gradient-to-r from-pink-500 to-red-500 py-12 rounded-2xl ">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-white">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Earn up to 00 worth of crypto</h2>
            <p className="mt-2 text-sm">
              Discover how specific cryptocurrencies referree — and get a bit of each crypto to try out for yourself!
            </p>
          </div>
          <button className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Create Account
          </button>
        </div>
      </section>
      </div>
  )
}
