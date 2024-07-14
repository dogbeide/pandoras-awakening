'use client'

import { useState } from "react"
import faqs from "../lib/faqs-data"
import { justAnotherHand } from '../lib/fonts'
import Title from "../components/text/Title";
import BtnCTA from "../components/buttons/btn-cta";

export default function Page() {
    const [expanded, setExpanded] = useState([faqs.map((faq, idx) => ({ [idx]: false }))]);
  return (
    <div className="flex flex-col items-center bg-gradient-to-tr from-pandoras-purple to-pink-500">
      <Title classNames="mt-5">FAQ</Title>

      {faqs.map((faq, idx) => {
        return (
          <div key={idx} className={`flex flex-col items-center mb-5 max-md:mb-3 mx-3 w-[50%] max-sm:w-auto border-2 rounded-sm 
                                    bg-black bg-opacity-10  
                                    ${idx % 2 == 0 ? 'border-pandoras-lime' : 'border-pandoras-teal'}`}>
            
            <button className={`${justAnotherHand.className} btn-cta-text ${idx % 2 == 0 ? 'hover:text-pandoras-lime' : 'hover:text-pandoras-teal'}
                                font-bold px-2 py-2 max-md:py-1 text-3xl max-md:text-2xl max-sm:text-xl tracking-wider text-slate-200`}>
                {faq.q}
            </button>
            {/* <BtnCTA classNames="mt-2" fontSize="22px">{faq.q}</BtnCTA> */}

            <div className="px-6 py-2 text-sm text-slate-100">{faq.a.map((a, idx) => {

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

            </div>

          </div>
        )
      })}

    </div>
  )
}