const Dot = () => {
    const duration = Math.floor(Math.random() * 50) / 20
    return (
        <div
            className="w-[7px] h-[7px] lg:w-[10px] lg:h-[10px] bg-[#004cfc] rounded-full transition-all animate-[dotDivideFader_2.3s_ease-in-out_infinite]"
            style={{
                animationDelay: `${duration}s`,
            }}
        />
    )
}

export default Dot
