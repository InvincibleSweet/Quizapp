import Footer from '@/components/Atom/Footer';
import HeaderCounter from '@/components/Atom/HeaderCounter';
import SoalQuiz from '@/components/Fragment/Soal';
import React from 'react';

export default function QuizPage() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <div className="flex-none">
          <HeaderCounter />
        </div>
        <div className="flex-grow">
          <div>
            <SoalQuiz />
          </div>
        </div>
        <div className="flex-none">
          <Footer />
        </div>
      </main>
    </>
  );
}
