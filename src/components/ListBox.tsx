import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Option } from '../types/Option';


interface ListBoxProps {
  option: Option[];
  selectedOption:Option;
  setSelectedOption:any;
}
  
export function ListBox({ option, selectedOption, setSelectedOption }:ListBoxProps) {
 
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <Listbox.Button className="text-emerald-500 font-bold bg-slate-100 py-2 px-2 flex items-center justify-start w-full rounded">
        { selectedOption.name }
      </Listbox.Button>
      <Listbox.Options className="bg-slate-100 mt-2 rounded px-2">
        {option.map((value) => (
          <Listbox.Option
            value={value}
            className="hover:bg-slate-200 py-1 font-medium text-emerald-500"
          >
            { value.name }
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}