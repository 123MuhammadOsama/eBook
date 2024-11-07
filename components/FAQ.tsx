'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

type FAQItem = {
    question: string;
    answer: string;
};

const faqItems: FAQItem[] = [
  { question: 'Question 1', answer: 'Answer to question 1 goes here...' },
  { question: 'Question 2', answer: 'Answer to question 2 goes here.' },
  { question: 'Question 3', answer: 'Answer to question 3 goes here.' },
  { question: 'Question 4', answer: 'Answer to question 4 goes here.' },
  { question: 'Question 5', answer: 'Answer to question 5 goes here.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatQuestion = (question: string) => {
    return question.split(/(\d+)/).map((part, i) =>
      /\d+/.test(part) ? <span key={i} className="text-red-500">{part}</span> : part
    );
  };

  return (
    <div className='mx-4 lg:mx-20 space-y-6 lg:space-y-10 mt-20 2xl:mx-36'>
      <h2 className='font-bold text-3xl lg:text-4xl'>
        Frequently <span className='text-red-500'>Questions</span> and Answers
      </h2>
      <p className='text-lg lg:text-2xl w-[300px] sm:w-[500px] lg:w-[900px]'>
        Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service.
      </p>

      <div className='flex flex-col lg:flex-row gap-6 lg:gap-10'>
        {/* Image Section - Hidden on small screens */}
        <div className='hidden lg:block'>
          <Image
            src="/faq.png"
            alt='FAQs'
            height={500}
            width={500}
          />
        </div>

        {/* FAQ List Section */}
        <div className="space-y-6 lg:space-y-10 p-4 w-full lg:w-2/3 pt-16">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b-2 border-black pb-4">
              <div
                className="flex items-center justify-between cursor-pointer text-xl lg:text-2xl"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium ${openIndex === index ? 'text-2xl' : ''}`}>
                  {formatQuestion(item.question)}
                </span>
                {openIndex === index ? (
                  <FaArrowDown className="text-black" />
                ) : (
                  <FaArrowUp className="text-black" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-black">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ;
