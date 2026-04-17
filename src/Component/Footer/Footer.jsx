import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white pt-16 pb-8 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-wide">KeenKeeper</h2>

        <p className="text-[#a8c3b5] text-sm md:text-base mb-10 max-w-2xl">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="flex space-x-4 mb-16">
          <a href="#" className="bg-white text-[#244D3F] p-2.5 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center w-10 h-10">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a href="#" className="bg-white text-[#244D3F] p-2.5 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center w-10 h-10">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>

          <a href="#" className="bg-white text-[#244D3F] p-2.5 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center w-10 h-10">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M21.141 2.911h-4.004l-5.748 7.64-4.871-7.64h-5.23l7.636 11.96-8.083 10.74h4.004l6.195-8.233 5.309 8.233h5.23l-8.04-12.597 7.602-10.103zm-4.708 19.34h-2.18l-10.428-16.36h2.29l9.362 14.69h2.18l-10.424-16.36h-2.29l11.49 18.03z"/>
            </svg>
          </a>
        </div>

        <div className="w-full border-t border-[#466a59] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#8eb09f]">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-300">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;