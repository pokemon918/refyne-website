import useWidth from '@hooks/useWidth'
import Dot from './Dot'

const getCount = (width: number) => {
    if (width >= 960) return (width * 0.9 - 48) / 18
    return (width * 0.9 - 48) / 13
}

const DotsDivider = () => {
    const width = useWidth()
    return (
        <div className="flex flex-col px-6 py-4 gap-[6px]">
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    className="flex w-[90%] mx-auto lg:gap-[8px] gap-[6px]"
                    key={`dotLine-${index}`}
                >
                    {Array.from({ length: getCount(width) }).map((_, index) => (
                        <Dot key={`dot-${index}`} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default DotsDivider
