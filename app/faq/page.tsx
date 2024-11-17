import { Metadata } from "next";

import faqs from "../lib/faqs-data"
import Title from "../components/text/Title";
import FaqItem from "./FaqItem";

export const metadata: Metadata = {
  title: "FAQs - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {

  return (
    <div className="flex flex-col items-center bg-gradient-to-tr from-pandoras-purple to-pink-500">
      <Title classNames="mt-5 text-white">FAQ</Title>

      {faqs.map((faq, idx) => (
        <FaqItem key={idx} faq={faq} />
      ))}

    </div>
  )
}