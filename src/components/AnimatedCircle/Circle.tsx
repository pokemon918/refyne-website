interface ICircle {
    children: React.ReactNode
    className?: string
    onHover?: () => void
    onReset?: () => void
}

const Circle = ({ children, className, onHover, onReset }: ICircle) => {
    return (
        <div
            className={`absolute rounded-full border border-solid text-[9px] md:text-sm p-[1px] md:p-[2px] border-[#004fcf] flex justify-center hover:bg-[#00307d] hover:text-[#00307d] transition-all duration-300 ${className}`}
            onMouseEnter={onHover}
            onMouseLeave={onReset}
        >
            <p className="w-fit">{children}</p>
        </div>
    )
}

export default Circle
