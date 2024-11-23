import HomeLayout from "@/layout/homeLayout";
import evaluasiService from "@/services/evaluasi";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Evaluasi() {
  const [evaluasi, setEvaluasi] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({}); // State untuk menyimpan jawaban

  useEffect(() => {
    const getAllEvaluasi = async () => {
      try {
        const data = await evaluasiService.getAllEvaluasi();
        setEvaluasi(data.data);
      } catch (error) {
        console.error("Failed to fetch evaluation data:", error);
      }
    };
    getAllEvaluasi();
  }, []);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer, // Simpan jawaban berdasarkan ID soal
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < evaluasi.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (evaluasi.length === 0) {
    return (
      <HomeLayout>
        <div className="p-10 h-screen">
          <h1>Loading...</h1>
        </div>
      </HomeLayout>
    );
  }

  const currentQuestion = evaluasi[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion.id] || ""; // Ambil jawaban yang telah disimpan
  const handleNavigation = (index: number) => {
    setCurrentQuestionIndex(index); // Berpindah ke soal berdasarkan indeks
  };
  return (
    <HomeLayout>
      <div className="p-10 h-screen">
        <h1>Evaluasi</h1>
        <div className="m-3">
          <h2>
            Soal {currentQuestionIndex + 1} / {evaluasi.length}
          </h2>
        </div>
        <div className="pb-10 mb-5">
          <h2>{currentQuestion.question}</h2>
          <div>
            <input
              type="radio"
              id={`${currentQuestion.id}-correct`}
              name={`question-${currentQuestion.id}`}
              checked={selectedAnswer === currentQuestion.correct_answer}
              onChange={() =>
                handleAnswerChange(
                  currentQuestion.id,
                  currentQuestion.correct_answer
                )
              }
            />
            <label htmlFor={`${currentQuestion.id}-correct`}>
              {currentQuestion.correct_answer}
            </label>
          </div>
          {currentQuestion.incorrect_answers.map(
            (answer: string, index: number) => (
              <div key={`${currentQuestion.id}-incorrect-${index}`}>
                <input
                  type="radio"
                  id={`${currentQuestion.id}-incorrect-${index}`}
                  name={`question-${currentQuestion.id}`}
                  checked={selectedAnswer === answer}
                  onChange={() =>
                    handleAnswerChange(currentQuestion.id, answer)
                  }
                />
                <label htmlFor={`${currentQuestion.id}-incorrect-${index}`}>
                  {answer}
                </label>
              </div>
            )
          )}
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-200 px-4 py-2"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Sebelumnya
          </button>
          <button
            className="bg-gray-200 px-4 py-2"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === evaluasi.length - 1}
          >
            Berikutnya
          </button>
        </div>
        <div>
          <h2>Hasil</h2>
          <ul className="grid grid-cols-3 gap-2  ">
            {evaluasi.map((question: any, index: number) => (
              <div key={question.id} className="">
                <li className="m-2 border text-center">
                  <button
                    onClick={() => handleNavigation(index)}
                    className={`w-full py-2 ${
                      index === currentQuestionIndex
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
}
