import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Options 1', unavailable: false },
  { id: 2, name: 'Options 2', unavailable: false },
  { id: 3, name: 'Options 3', unavailable: false },
  { id: 4, name: 'Options 4', unavailable: false },
  { id: 5, name: 'Options 5', unavailable: false },
]

export function YoutubeListBox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="text-violet-500 font-bold bg-slate-100 py-2 px-2 flex items-center justify-start w-full rounded">
        {selectedPerson.name}
      </Listbox.Button>
      <Listbox.Options className="bg-slate-100 mt-2 rounded px-2">
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
            className="hover:bg-slate-200 py-1 font-medium text-violet-500"
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}