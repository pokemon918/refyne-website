import { IOverview } from '@/constants/basic'

const Overview = ({ title, content }: IOverview) => {
    return (
        <div className="bg-[#004CFC] w-full text-white lg:py-[100px] py-[50px] px-8 flex justify-center">
            <div className="flex flex-col justify-center max-w-6xl gap-0 lg:flex-row lg:gap-32">
                <div className="lg:text-[45px] lg:leading-[60px] leading-9 font-bold text-[30px]">
                    {title}
                </div>
                <div className="text-[20px] font-normal leading-7 flex flex-col gap-4">
                    {content.map((item, index) => (
                        <div key={`overview-content-${index}`}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Overview
