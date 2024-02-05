import { Button } from '@material-tailwind/react'
import Gradient from '@components/AnimatedGradient'
import CircleAndLine from '@components/CircleAndLine'
import { useLocation } from 'react-router-dom'
import { IHero } from '@/constants/basic'

const Hero = ({ subtitle, title, description }: IHero) => {
    const location = useLocation()
    const isServicePath = location.pathname.includes('services')

    return (
        <div className="bg-[rgba(0,76,252,0.1)] min-h-screen flex justify-center items-center overflow-hidden shadow-md z-0 relative w-full">
            {!isServicePath && <Gradient />}
            <div className="w-full">
                <div className="flex flex-col gap-4 px-6 py-16 mx-auto text-left max-w-7xl md:flex-row">
                    <div className="w-full md:flex-1">
                        <h2 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
                            {subtitle}
                        </h2>
                        <h1 className="flex-1 mt-2 text-[28px] font-bold leading-tight text-gray-800 lg:text-5xl">
                            {title}
                        </h1>
                        <p className="mt-4 text-lg text-gray-700">
                            {description}
                        </p>
                        <div className="flex justify-start gap-2 mt-8 w-fit md:gap-4">
                            <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#004cfc] text-white normal-case">
                                Se vores cases
                            </Button>
                            <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-[#004cfc] border border-[#004cfc] normal-case">
                                Book et møde
                            </Button>
                        </div>
                    </div>
                    {isServicePath && (
                        <div className="flex items-center justify-center w-full md:w-[45vmin] h-[45vmin]">
                            <CircleAndLine />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero
