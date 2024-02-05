import { ISingleCaseStudy } from '@constants/basic'
import { Link } from 'react-router-dom'

const SingleItem = ({
    title,
    overview,
    link: live_link,
    img: img_url,
    detail,
    placeRight,
}: ISingleCaseStudy) => {
    return (
        <div
            className={`pt-[35px] pb-[45px] px-[6%] grid grid-cols-[1fr] ${
                placeRight
                    ? 'lg:grid-cols-[1fr_0.5fr]'
                    : 'lg:grid-cols-[0.5fr_1fr]'
            } w-full gap-[3%] items-center`}
        >
            <div
                className={`flex flex-col gap-[10px] order-last ${
                    !placeRight && 'lg:order-first'
                }`}
            >
                <h3 className="leading-[140%] text-sm font-bold text-[#0c2233] bg-[#CEFD94] w-fit rounded-[100px] pt-[13px] pb-[10px] px-[20px] tracking-[1.4px]">
                    {title}
                </h3>
                <h4 className="text-[28px] leading-[130%] -tracking-[0.056px] font-extrabold">
                    {overview}
                </h4>
                <div className="flex-row">
                    {detail.map((content, key) => (
                        <div
                            key={`detail-${key}`}
                            className="-mt-[1px] py-[18px] flex flex-row leading-[1.65rem] gap-2.5 m-0 p-0 items-center justify-between border-t border-b border-[#0c2233]"
                        >
                            <p className="flex items-center justify-between gap-1">
                                <img
                                    src={
                                        content.status
                                            ? 'https://tuffgrowth.com/wp-content/uploads/2023/12/tuff-2p0-2023-up-stat-icon-orange.svg'
                                            : 'https://tuffgrowth.com/wp-content/uploads/2023/12/tuff-2p0-2023-down-stat-icon-orange.svg'
                                    }
                                    alt="status"
                                    width={15}
                                />
                                <strong className="font-black text-[20px] leading-[130%]">
                                    {content.value}
                                </strong>
                            </p>
                            <p className="text-[20px] leading-[130%] text-[#0c2233] text-right">
                                {content.description}
                            </p>
                        </div>
                    ))}
                </div>
                <Link
                    to={live_link}
                    className="text-[20px] font-bold flex gap-3 items-center cursor-pointer hover:animate-[caseStudy_0.5s_ease-in-out_forwards] w-fit origin-center"
                >
                    <div>Read the case study</div>
                    <i className="fas fa-angle-right" />
                </Link>
            </div>
            <div>
                <img src={img_url} alt="case" />
            </div>
        </div>
    )
}

export default SingleItem
