'use client';

import React, { useState } from 'react';
import Button from '../UI/Button';
import Link from 'next/link';
import PlayGame from '../Icons/PlayGame';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log('clicked');
  };
  return (
    <>
      <div className="sm:w-full sm:justify-between px-4 py-4 bg-slate-50">
        <div className={`absolute bottom-6 right-5 flex justify-end `}>
          <button onClick={handleOpen}>
            <div className={`${isOpen ? 'hidden' : 'flex'}`}>
              <PlayGame />
            </div>
          </button>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'}`}>
          <div>
            <div className="sm:flex sm:gap-2">
              <Link href={'#'}>
                <Button variant="outlineDenger">Keluar Quiz</Button>
              </Link>
              <Link href={'#'}>
                <Button variant="fill">Lihat Leaderboard</Button>
              </Link>
            </div>
            <div className="sm:flex gap-2">
              <Link href={'#'}>
                <Button variant="fill">Test Pertanyaan</Button>
              </Link>
              <Link href={'#'}>
                <Button variant="fill">Mulai Quiz</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
