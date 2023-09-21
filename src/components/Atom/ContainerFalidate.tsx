import React from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import undrawChoose from '@/assets/img/undraw-choose.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const ContianerFalidate = () => {
  return (
    <>
      <div className={`p-6 w-full h-fit sm:h-auto sm:max-w-[460px] sm:mx-auto my-20 bg-white-50 border-slate-300 border rounded-2xl `}>
        <div className="grid place-items-center gap-3">
          <Image src={undrawChoose} alt="image choose" width={420} height={120} objectFit="cover" quality={100} />
          <div className="pb-2">
            <h3 className={`text-slate-800 font-sans font-medium`}>Selamat datang, pilih role Anda!</h3>
          </div>
          <div className={`flex gap-3`}>
            <Link href={'/users/user-admin'}>
              <Button size="medium" variant="outline">
                Moderator
              </Button>
            </Link>
            <Link href={'/users/common-user'}>
              <Button size="medium" variant="fill">
                Pengguna
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
