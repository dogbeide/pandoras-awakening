import Section from "../components/general/Section"
import Title from "../components/text/Title"
import ResourceItem from "./ResourceItem"
import { resources } from "../lib/resources-data"

export default function Page() {

  return (
    <div>
      <Section classNames="bg-gradient-to-br from-white via-pandoras-teal to-white">
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
    </div>
  )
}