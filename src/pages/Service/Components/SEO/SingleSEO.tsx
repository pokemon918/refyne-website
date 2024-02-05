import { ISubSEO } from '@constants/basic'

const SingleSEO: React.FC<ISubSEO> = ({
    title,
    overview,
    content,
    subcontent,
}) => {
    return (
        <div className="border border-x-0 border-solid border-black w-full text-black lg:pt-[80px] lg:pb-[50px] pt-[40px] pb-[25px] px-8 flex justify-center -mt-[1px]">
            <div className="flex flex-col justify-center max-w-6xl gap-0 lg:flex-row lg:gap-32">
                <div className="flex flex-col gap-4">
                    <h3 className="lg:text-[30px] lg:leading-9 leading-8 font-bold text-[24px]">
                        {title}
                    </h3>
                    <h4 className="text-[20px] leading-7 font-normal mb-4">
                        {overview}
                    </h4>
                </div>
                <div className="flex flex-col text-base">
                    <strong className="mb-4">{content}</strong>
                    <ul className="ml-4 text-base list-disc list-outside">
                        {subcontent.map((sub, key) => (
                            <li className="mb-4" key={`subcontent-${key}`}>
                                {sub}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleSEO
