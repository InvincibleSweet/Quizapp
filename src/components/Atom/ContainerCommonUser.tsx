import React from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import undrawPlay from '@/assets/img/undraw-play.png';
import Link from 'next/link';

export const ContainerCommonUser = () => {
  return (
    <>
      <div className={`p-6 w-full h-fit sm:h-auto sm:w-fit sm:mx-auto my-20 bg-white-50 border-slate-300 border rounded-2xl `}>
        <div className="grid place-items-center gap-3">
          <Image src={undrawPlay} alt="image choose" width={320} height={120} objectFit="cover" quality={100} />

          <div>
            <form className="grid place-content-center gap-3">
              <div className="flex flex-col gap-2  sm:w-[320px]">
                <label htmlFor="joinningCode" className={`text-slate-800 font-sans font-medium`}>
                  Masukkan Kode Quiz
                </label>
                <input type="text" placeholder="Kode Quiz" required className="border rounded-md border-slate-300 py-2 px-3 focus:border-purple-400 focus:border-1" />
              </div>
              <Link href={'/quiz'}>
                <Button size="medium" variant="fill" className="w-full">
                  Masuk Quiz
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
