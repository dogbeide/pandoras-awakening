'use client'

import { useState } from "react";
import { justAnotherHand } from '../lib/fonts'

import './faq-item.css'
import '@/app/components/buttons/btn-cta.css'

export type FaqType = { 
  q: string,
  a: Array<string | Array<string>>,
  s?: string,
}

export default function FaqItem({ key, faq } : {
  key: number,
  faq: FaqType
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  }

  return (
    <div
      className="w-full px-3 flex flex-col items-center"
    >
      <div className={`flex flex-col items-center mb-5 max-md:mb-3 mx-3 w-[50%] max-sm:w-[100%] border-2 rounded-sm 
                      bg-black bg-opacity-10 border-white hover:border-pandoras-teal transition-all duration-200`}
      >
        <div
          onClick={toggleExpanded}
          className={`grid grid-cols-12 w-full text-3xl max-md:text-2xl max-sm:text-xl tracking-wider text-slate-200 
                      cursor-pointer ${justAnotherHand.className}`}
        >
          <div className="spacer col-span-1"></div>
          <button
            className={`col-span-10 btn-cta-text hover:text-pandoras-teal  
                        px-2 py-2 max-md:py-1`}
          >
            {faq.q}
          </button>
          <div className="col-span-1 btn-cta-text hover:text-pandoras-teal text-4xl max-md:text-3xl">{expanded ? '-' : '+'}</div>
        </div>

        {<div 
          className={`${expanded ? 'expanded' : ''} faq-answer text-sm text-slate-100 transition-all ease-in-out duration-200`}
        >
          {faq.a.map((a, idx) => {

            return <span key={idx}>{
              Array.isArray(a) ?
                <ul className="list-disc ml-8">
                  {a.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))} 
                </ul> :
                a
            }
              <br/><br/>
            </span>
          })}
        </div>}

      </div>
    </div>
  )
}