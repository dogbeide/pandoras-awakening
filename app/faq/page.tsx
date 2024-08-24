import faqs from "../lib/faqs-data"
import Title from "../components/text/Title";
import FaqItem from "./FaqItem";

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