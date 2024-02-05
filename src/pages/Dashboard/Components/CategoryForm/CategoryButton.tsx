import { ICategoryItem } from '@constants/basic'
import { Button } from '@material-tailwind/react'

const CategoryButton = ({
    label,
    icon,
    id,
    focused,
    onClick,
}: ICategoryItem) => {
    return (
        <Button
            className={`px-[25px] py-[15px] rounded-[10px] transition-all duration-300 bg-white border border-solid hover:border-[#004cfc] focus:border-[#004cfc] focus:ring-0 focus:outline-none active:border-[#004cfc] text-black normal-case flex items-center w-[230px] ${
                focused ? 'border-[#004cfc]' : ''
            }`}
            style={{
                boxShadow: focused
                    ? '1px 1px 35px rgba(198, 211, 255, .6)'
                    : '',
            }}
            onClick={onClick}
        >
            <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(0,76,252,0.2)] text-[#004cfc] mr-2.5 text-[17px]">
                {icon}
            </span>
            <span className="ml-2.5 text-right font-bold whitespace-nowrap text-base">
                {label}
            </span>
        </Button>
    )
}

export default CategoryButton
