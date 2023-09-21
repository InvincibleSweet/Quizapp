'use client';

import React, { useState } from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import undrawPlay from '@/assets/img/undraw-play.png';
import Link from 'next/link';

export const ContainerModeratorUser = () => {
  const [namaQuiz, setNamaQuiz] = useState('');
  const [codeQuiz, setCodeQuiz] = useState('');

  const isInputsFilled = namaQuiz !== '' && codeQuiz !== '';

  return (
    <>
      <div className={`p-6 w-full h-fit sm:h-auto sm:w-fit sm:mx-auto my-20 bg-white-50 border-slate-300 border rounded-2xl `}>
        <div className="grid place-items-center gap-3">
          <Image src={undrawPlay} alt="image choose" width={320} height={120} objectFit="cover" quality={100} />

          <div className={`gap-3`}>
            <form className="grid place-content-center ">
              <div className="flex flex-col sm:w-[320px]">
                <label htmlFor="namaQuiz" className={`text-slate-800 font-sans font-medium pb-1`}>
                  Nama Quiz
                </label>
                <input
                  type="text"
                  value={namaQuiz}
                  onChange={e => setNamaQuiz(e.target.value)}
                  placeholder="Kode Quiz"
                  required
                  className="border rounded-md border-slate-300 py-2 px-3 focus:border-purple-400 focus:border-1 mb-3 placeholder-opacity-75"
                />
              </div>
              <div className="flex flex-col  sm:w-[320px]">
                <label htmlFor="createQuiz" className={`text-slate-800 font-sans font-medium pb-1`}>
                  Buat Kode
                </label>
                <input
                  type="text"
                  value={codeQuiz}
                  onChange={e => setCodeQuiz(e.target.value)}
                  placeholder="Berupa angka atau kalimat"
                  required
                  className="border rounded-md border-slate-300 py-2 px-3 focus:border-purple-400 focus:border-1 mb-3 placeholder-opacity-75"
                />
              </div>

              <Link href={isInputsFilled ? '/users/common-user' : '#'}>
                <Button size="medium" variant="fill" className="w-full">
                  Buat Quiz
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
