// app/quiz/page.js
'use client';

import Link from "next/link";
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: '1 + 2 = ?',
    options: ['2', '3', '4'],
    answer: '3',
  },
  {
    id: 2,
    question: '5 - 3 = ?',
    options: ['1', '2', '3'],
    answer: '2',
  },
  {
    id: 3,
    question: '4 x 2 = ?',
    options: ['6', '8', '10'],
    answer: '8',
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const currentQuestion = questions[current];

  const cekJawaban = async (selected) => {
    const res = await fetch(`/api/cekjawaban?angka=${selected}&benar=${currentQuestion.answer}`);
    const result = await res.text();

    alert(result);
    if (result === 'Benar!') {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Kuis Matematika Dasar</h1>

      {!done ? (
        <div>
          <p>
            <strong>Soal {current + 1}:</strong> {currentQuestion.question}
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {currentQuestion.options.map((opt) => (
              <button
                key={opt}
                onClick={() => cekJawaban(opt)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Kuis selesai!</h2>
          <p>Skor kamu: {score} dari {questions.length}</p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              backgroundColor: '#0070f3',
              padding: '0.5rem 1rem',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Kembali ke Beranda
          </Link>
        </div>
      )}
    </main>
  );
}
