'use client';

import { useState } from "react";

import { resources, friends, books } from "../lib/resources-data"

import Section from "../components/general/Section"
import Title from "../components/text/Title"
import ResourceList from "./ResourceList"
import ResourceItem from "./ResourceItem"
import Book from "./Book"

import './resources.css'

export default function Page() {

  const [expandedResources, setExpandedResources] = useState(false);
  const [expandedFriends, setExpandedFriends] = useState(false);
  const [expandedBooks, setExpandedBooks] = useState(false);

  return (
    <div>
      <Section id="resources" classNames="bg-gradient-to-br from-white via-pandoras-lavender-50 to-white">
        <div onClick={() => setExpandedResources(!expandedResources)}>
          <Title classNames="btn-cta-text hover:text-pandoras-fuchsia hover:cursor-pointer align-middle">
            Resources  
            <span className="btn-cta-text hover:text-pandoras-orange font-bold text-5xl align-middle">
              &nbsp;({expandedResources ? '-' : '+'})
            </span>
          </Title>
        </div>
        <ResourceList expanded={expandedResources}>
          {resources.map((resource, idx) => (
            <ResourceItem
              key={idx}
              resource={resource}
            />
          ))}
        </ResourceList>
      </Section>

      <Section id="friends" classNames="bg-gradient-to-tr from-pandoras-purple to-pandoras-pink">
        <div onClick={() => setExpandedFriends(!expandedFriends)}>
          <Title classNames="btn-cta-text hover:text-pandoras-orange hover:cursor-pointer align-middle">
          Friends of Pandora&apos;s Awakening  
            <span className="btn-cta-text hover:text-pandoras-orange font-bold text-5xl align-middle">
              &nbsp;({expandedFriends ? '-' : '+'})
            </span>
          </Title>
        </div>
        <ResourceList expanded={expandedFriends}>
          {friends.map((resource, idx) => (
            <ResourceItem
              key={idx}
              resource={resource}
              textColor='slate-200'
            />
          ))}
        </ResourceList>
      </Section>

      <Section id="books" classNames="bg-gradient-to-br from-white via-pandoras-jasper-50 to-white">
        <div onClick={() => setExpandedBooks(!expandedBooks)}>
          <Title classNames="btn-cta-text hover:text-pandoras-fuchsia hover:cursor-pointer align-middle">Books   
            <span className="btn-cta-text hover:text-pandoras-orange font-bold text-5xl align-middle">
              &nbsp;({expandedBooks ? '-' : '+'})
            </span>
          </Title>
        </div>
        <ResourceList expanded={expandedBooks}>
          {books.map((book, idx) => (
            <Book
              key={idx}
              book={book}
              textColor='pandoras-purple'
            />
          ))}
        </ResourceList>
      </Section>
    </div>
  )
}