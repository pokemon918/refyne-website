const Gradient = () => {
    return (
        <div
            className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] absolute top-[50%] left-[50%] z-[-1] animate-[spin_10s_linear_infinite] blur-[80px]"
            style={{
                backgroundImage:
                    'linear-gradient(hsl(221, 100%, 49%), hsl(0, 100%, 67%),hsl(34, 24%, 75%))',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            }}
        />
    )
}

export default Gradient
