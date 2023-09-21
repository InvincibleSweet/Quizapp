'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import undraw from '@/assets/img/undraw-choose.png';

const data = [
  {
    id: 1,
    soal: 'Mana dari ini yang benar?',
    options: ['Timur', 'Barat', 'Selatan', 'Utara kajgedhaksjd kajdhaskjdhasd kjhadkajshdakj kjadhkajdhad kjhasdkajshd akjsdhakjdhasj kajhdaskjhdakj kajhdkajdh '],
    correctAnswerIndex: null as number | null, // Inisialisasi dengan null
  },
];

type Data = {
  id: number;
  soal: string;
  options: string[];
  correctAnswerIndex: number | null;
};

export default function SoalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState<Data | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    // Ketika komponen dimuat, atur pertanyaan yang sedang aktif
    setCurrentQuestion(data[0]);

    // Acak posisi jawaban (tidak termasuk jawaban yang benar)
    const optionsCopy = [...data[0].options];
    const correctAnswerIndex = Math.floor(Math.random() * optionsCopy.length);
    optionsCopy.splice(correctAnswerIndex, 1); // Hapus jawaban yang benar dari array sementara
    optionsCopy.sort(() => Math.random() - 0.5); // Acak urutan jawaban yang tersisa
    optionsCopy.splice(Math.floor(Math.random() * optionsCopy.length), 0, data[0].options[correctAnswerIndex]); // Sisipkan kembali jawaban yang benar
    data[0].correctAnswerIndex = correctAnswerIndex; // Set indeks jawaban yang benar
  }, []);

  const handleAnswerClick = (index: number) => {
    if (currentQuestion && currentQuestion.correctAnswerIndex !== null) {
      // Jika pengguna belum memilih jawaban
      if (selectedAnswer === null) {
        setSelectedAnswer(index);

        // Tunda perubahan warna untuk 10 detik
        setTimeout(() => {
          setSelectedAnswer(currentQuestion.correctAnswerIndex);
        }, 10000); // 10000 milidetik (10 detik)
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={undraw} width={300} height={300} objectFit="cover" alt="gambar" />

      <div className="w-[100%]">
        {currentQuestion && (
          <div key={currentQuestion.id}>
            <h4 className="text-center mb-4">{currentQuestion.soal}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mx-8">
              {currentQuestion.options.map((option, index) => (
                <p
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`${
                    selectedAnswer === index ? 'bg-yellow-500 tex-slate-50 border-yellow-700' : selectedAnswer === currentQuestion.correctAnswerIndex ? 'bg-green-500 text-slate-800  border-green-800' : 'bg-slate-50   border-slate-400'
                  } min-h-[48px] sm:min-h-[120px] px-4 py-4 sm:px-8 whitespace-normal flex items-center justify-start cursor-pointer text-sm sm:text-base border rounded-md`}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
