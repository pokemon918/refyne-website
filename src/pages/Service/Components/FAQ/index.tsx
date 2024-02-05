import { IFAQ } from '@constants/basic'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from '@material-tailwind/react'
import { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

const FAQ = ({ description, questions }: IFAQ) => {
    const [open, setOpen] = useState(-1)
    return (
        <div className="flex flex-col gap-4 p-6 mx-auto mt-8 max-w-7xl md:flex-row md:gap-12">
            <div className="w-full md:w-2/5">
                <h3 className="text-[#004cfc]">Support</h3>
                <h1 className="text-4xl font-bold leading-loose">FAQs</h1>
                <div className="text-lg">
                    {description} Please{' '}
                    <a href="/" className="underline">
                        chat to our friendly team.
                    </a>
                </div>
            </div>
            <div className="w-full md:w-3/5">
                {questions.map((question, id) => (
                    <Accordion
                        open={open === id}
                        icon={
                            open === id ? (
                                <MinusCircleIcon
                                    width={24}
                                    height={24}
                                    color="black"
                                />
                            ) : (
                                <PlusCircleIcon
                                    width={24}
                                    height={24}
                                    color="black"
                                />
                            )
                        }
                        key={`faq-${id}`}
                    >
                        <AccordionHeader
                            onClick={() => setOpen(open === id ? -1 : id)}
                        >
                            {question.title}
                        </AccordionHeader>
                        <AccordionBody>
                            <span className="text-base">
                                {question.content}
                            </span>
                        </AccordionBody>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default FAQ
