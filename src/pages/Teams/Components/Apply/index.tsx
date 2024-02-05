import { Button } from '@material-tailwind/react'
import SplashImg from '@assets/splash.jpg'

const ApplyForm = () => {
    return (
        <div className="relative">
            <img
                alt="apply img"
                src={SplashImg}
                className="w-full max-h-[400px] object-cover"
            />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Button className="bg-[#004cfc] hover:brightness-125 w-full h-full flex items-center justify-center">
                    Apply
                </Button>
            </div>
        </div>
    )
}

export default ApplyForm
