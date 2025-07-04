"use client"
import { useState } from "react";
const FAQListItem = ({qa}) => {

    const [isOpen, setIsOpen] = useState(false);
    return ( 
         <li key={qa.question}>

                {/* question (cklicable) */}
                <button className="py-5 font-semibold border-b-2 w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-10 " onClick={() => {setIsOpen(!isOpen)} }>
                    <p>{qa.question}</p>

                     <span className={`transition-transform duration-100 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                     {isOpen ? '▲' : '▼'}
                     </span>
                    </button>
                {/* pop down answer */}
              <div className={`overflow-hidden transition-all duration-100 ease-in-out ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
                {qa.answer}
                </div>
              </li>
    )
}
export default FAQListItem;