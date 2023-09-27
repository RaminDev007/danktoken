'use client';

import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const NAV_ITEMS = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Tokenomics',
    page: 'tokenomics',
  },
  {
    label: 'How to Buy',
    page: 'buy',
  },
  {
    label: 'Roadmap',
    page: 'roadmap',
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 drop-shadow-2xl bg-[url('/newBG.png')] bg-cover dark:bg-stone-900 dark:border-b-dark:border-stone-600 overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2 hover:scale-125 duration-200:hover duration-500 cursor-pointer">
                <img
                  src="03.png"
                  loading="lazy"
                  className="w-[60px] h-[60px] object-cover rounded-full"
                />
                <h2 className="text-2xl color font-bold text-white">Dankify</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer ">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block lg:inline-block text-white hover:scale-125 duration-200:hover duration-500 dark:text-neutral-100"
                  activeClass="active"
                  spy
                  smooth
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
