import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import type { ICategoryItem } from '@/constants/basic'
import CategoryButton from './CategoryButton'

const CategoriesForm = () => {
    const categories1: ICategoryItem[] = [
        {
            id: 0,
            label: 'eCommerce',
            icon: <i className="fas fa-shopping-cart" />,
        },
        {
            id: 1,
            label: 'B2B',
            icon: <i className="fas fa-shopping-cart" />,
        },
        {
            id: 2,
            label: 'Fashion',
            icon: <i className="fas fa-tshirt" />,
        },
        {
            id: 3,
            label: 'Bolig',
            icon: <i className="fas fa-couch" />,
        },
        {
            id: 4,
            label: 'Finans',
            icon: <i className="fas fa-chart-line" />,
        },
        {
            id: 5,
            label: 'SaaS',
            icon: <i className="fas fa-cloud" />,
        },
        {
            id: 6,
            label: 'Underholdning',
            icon: <i className="fas fa-gamepad" />,
        },
        {
            id: 7,
            label: 'Uddannelse',
            icon: <i className="fas fa-book" />,
        },
        {
            id: 8,
            label: 'Travel',
            icon: <i className="fas fa-suitcase-rolling" />,
        },
    ]
    const categories2: ICategoryItem[] = [
        {
            id: 0,
            label: 'Salg',
            icon: <i className="fas fa-shopping-cart" />,
        },
        {
            id: 1,
            label: 'Leads',
            icon: <i className="fas fa-shopping-cart" />,
        },
        {
            id: 2,
            label: 'Branding',
            icon: <i className="fas fa-tshirt" />,
        },
    ]

    const [step, setStep] = useState(0)
    const [currentCategory1, setCurrentCategory1] = useState(-1)
    const [currentCategory2, setCurrentCategory2] = useState(-1)

    const scrollToTop = () => {
        const element = document.getElementById('category-start')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div className="flex flex-col max-w-4xl gap-5 p-4 mx-auto">
            <div className="flex flex-col items-center gap-5 m-5">
                <h1 className="text-3xl font-bold">Select the categories</h1>
                <p className="text-xl" id="category-start">
                    this is the description for category selection
                </p>
            </div>
            <div
                className={`flex flex-wrap items-center justify-around gap-5 transition-all duration-500 ${
                    step ? '!h-0 opacity-0 overflow-hidden' : 'opacity-100'
                }`}
            >
                {categories1.map((category, key) => (
                    <CategoryButton
                        id={category.id}
                        label={category.label}
                        icon={category.icon}
                        key={`category-${key}`}
                        onClick={() => setCurrentCategory1(category.id)}
                        focused={currentCategory1 === category.id}
                    />
                ))}
            </div>
            <div
                className={`flex flex-wrap items-center justify-around gap-5 transition-all duration-500 ${
                    step ? 'opacity-100' : '!h-0 opacity-0 overflow-hidden'
                }`}
            >
                {categories2.map((category, key) => (
                    <CategoryButton
                        id={category.id}
                        label={category.label}
                        icon={category.icon}
                        key={`category-${key}`}
                        onClick={() => setCurrentCategory2(category.id)}
                        focused={currentCategory2 === category.id}
                    />
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-around transition-all duration-500">
                <Button
                    className={`px-5 py-2.5 bg-[#004cfc] text-white border-none rounded-md text-base hover:bg-[#0036b3] normal-case font-normal transition-all duration-500 ${
                        step ? 'mr-auto' : 'mx-auto'
                    }`}
                    onClick={() => {
                        setStep(step ? 0 : 1)
                        scrollToTop()
                    }}
                >
                    {step ? 'Tilbage' : 'Videre'}
                </Button>
                <Button
                    className={`px-5 py-2.5 bg-[#004cfc] text-white border-none rounded-md text-base hover:bg-[#0036b3] normal-case font-normal ml-auto ${
                        step ? '' : 'hidden'
                    }`}
                >
                    Indsend
                </Button>
            </div>
        </div>
    )
}
export default CategoriesForm
