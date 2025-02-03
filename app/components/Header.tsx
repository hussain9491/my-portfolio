// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 h-20 text-white fixed w-full shadow-md z-50">
      <div className="container mx-auto px-100 py-4 flex justify-between items-center">
        <h1 className="text-xl md:pl- font-bold">My Portfolio</h1>
        <nav className="hidden md:flex gap-16 pt-4  text-sm">
          <Link href="/">Home</Link>
          <Link href="#Aboutme">About Me</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#project">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-slate-800 flex flex-col items-center py-6 text-sm">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#Aboutme" onClick={() => setMenuOpen(false)}>About Me</Link>
          <Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="#project" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}