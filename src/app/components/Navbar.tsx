'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgba(4,56,115,1)] w-full h-16 z-50 relative">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo 1.png" alt="Logo" width={191} height={34} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6">
          <li className="text-white text-[18px] font-medium">
            <Link href="/">Products</Link>
          </li>
          <li className="text-white text-[18px] font-medium">
            <Link href="/Solutions">Solutions</Link>
          </li>
          <li className="text-white text-[18px] font-medium">
            <Link href="/Resources">Resources</Link>
          </li>
          <li className="text-white text-[18px] font-medium">
            <Link href="/Pricing">Pricing</Link>
          </li>
        </ul>

        {/* Login Button - Desktop */}
        <div className="hidden lg:flex w-[126px] h-[60px] rounded-md bg-[rgba(255,228,146,1)] items-center justify-center">
          <p className="text-[18px] font-medium tracking-[-0.02em] text-[rgba(4,56,115,1)]">
            Login
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="bg-[rgba(4,56,115,1)] lg:hidden bg-[rgba(4, 56, 115, 1)] px-4 pb-6">
          <ul className="flex flex-col gap-4">
            <li className="text-white text-[18px] font-medium">
              <Link href="/">Products</Link>
            </li>
            <li className="text-white text-[18px] font-medium">
              <Link href="/Solutions">Solutions</Link>
            </li>
            <li className="text-white text-[18px] font-medium">
              <Link href="/Resources">Resources</Link>
            </li>
            <li className="text-white text-[18px] font-medium">
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li>
              <div className="w-full h-[50px] mt-2 rounded-md bg-[rgba(255,228,146,1)] flex items-center justify-center">
                <p className="text-[18px] font-medium tracking-[-0.02em] text-[rgba(4,56,115,1)]">
                  Login
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}



