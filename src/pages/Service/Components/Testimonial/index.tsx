import { useEffect, useState } from 'react'
import { Button } from '@material-tailwind/react'
import ImageCarousel from './ImageCarousel'
import TextCarousel from './TextCarousel'
import { ITestimonial } from '@/constants/basic'

const Testimonial = ({ data }: ITestimonial) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % data.length)
        }, 2500)

        return () => clearInterval(intervalId)
    }, [data.length])

    return (
        <div className="relative mx-auto max-w-5xl w-full lg:w-5xl h-[400px] mt-8">
            <div className="absolute top-0 w-3/4 left-6 h-[calc(100%-48px)]">
                <ImageCarousel currentIndex={currentSlide} data={data} />
            </div>
            <div className="absolute bottom-0 flex items-end w-[calc(50%+96px)] h-[70%] lg:h-3/5 right-6">
                <Button
                    className="w-24 h-12 rounded-none bg-[#004cfc] hover:brightness-125"
                    onClick={() =>
                        setCurrentSlide((prev) => (prev + 1) % data.length)
                    }
                >
                    Next
                </Button>
                <TextCarousel currentIndex={currentSlide} data={data} />
            </div>
        </div>
    )
}

export default Testimonial
