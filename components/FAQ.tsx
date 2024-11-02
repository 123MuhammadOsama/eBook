'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

type FAQItem = {
    question: string;
    answer: string;
  };
  
const faqItems: FAQItem[] = [
  { question: 'Question 1', answer: 'Answer to question 1 goes here. Answer to question 1 goes here. Answer to question 1 goes here.Answer to question 1 goes here.Answer to question 1 goes here.Answer to question 1 goes here.Answer to question 1 goes here.Answer to question 1 goes here.Answer to question 1 goes here.Answer to question 1 goes here.' },
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
    return question.replace(/(\d+)/g, '<span class="text-red-500">$1</span>');
  };

  return (
    <div className='mx-20 space-y-10'>
      <h1 className='font-bold text-4xl'>Frequently <span className='text-red-500'>Questions</span> and Answers</h1>
      <p className='text-xl'>Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service</p>

      <div className='flex gap-10'>
        <div>
          <Image
            src="/faq.png"
            alt='FAQs'
            height={500}
            width={500}
          />
        </div>

        <div className="space-y-10 p-4 ml-40 w-2/3">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b-2 border-black  pb-4">
              <div
                className="flex items-center justify-between cursor-pointer gap-[800px] text-2xl"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`font-medium ${openIndex === index ? 'text-2xl' : ''}`}
                  dangerouslySetInnerHTML={{ __html: formatQuestion(item.question) }}
                />
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
