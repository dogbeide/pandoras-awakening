import Section from "../components/general/Section"
import Title from "../components/text/Title"
import ResourceItem from "./ResourceItem"
import Book from "./Book"
import { resources, friends, books } from "../lib/resources-data"

export default function Page() {

  return (
    <div>
      <Section id="resources" classNames="bg-gradient-to-br from-white via-pandoras-lavender-50 to-white">
        <Title>Resources</Title>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1 max gap-x-2 gap-y-3 [&>div]:col-span-1">
          {resources.map((resource, idx) => (
            <ResourceItem
              key={idx}
              resource={resource}
            />
          ))}
        </div>
      </Section>

      <Section id="friends" classNames="bg-gradient-to-tr from-pandoras-purple to-pandoras-pink">
        <Title classNames="text-slate-200">Friends of Pandora&apos;s Awakening</Title>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1 max gap-x-2 gap-y-3 [&>div]:col-span-1">
          {friends.map((resource, idx) => (
            <ResourceItem
              key={idx}
              resource={resource}
              textColor='slate-200'
            />
          ))}
        </div>
      </Section>

      <Section id="books" classNames="bg-gradient-to-br from-white via-pandoras-jasper-50 to-white">
        <Title classNames="">Books</Title>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1 max gap-x-2 gap-y-3 [&>div]:col-span-1">
          {books.map((book, idx) => (
            <Book
              key={idx}
              book={book}
              textColor='pandoras-purple'
            />
          ))}
        </div>
      </Section>
    </div>
  )
}