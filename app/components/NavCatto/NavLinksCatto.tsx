'use client';
import Link from 'next/link';
import React from 'react';

const NavLinksCatto = () => {
  return (
    <>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="/"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/page"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Page
          </Link>
        </li>
      </ul>
    </>
  );
};
export default NavLinksCatto;