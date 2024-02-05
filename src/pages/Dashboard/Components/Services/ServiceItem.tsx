export interface IServiceItem {
    className?: string
    iconName: string
    title: string
    description: string
}

const ServiceItem = ({
    className,
    iconName,
    title,
    description,
}: IServiceItem) => {
    return (
        <div
            className={`custom-button relative min-w-[200px] w-full border border-solid border-[#DEDEDE] overflow-hidden cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#004cfc] ${className}`}
        >
            <div className="absolute top-0 left-0 right-0 h-0 z-[-1] bg-[#004cfc] transition-[height] duration-500 ease-out bg" />
            <div className="icon-container absolute bottom-[40px] left-[10px] transition-all duration-300 ease-in-out">
                <i
                    className={`fas ${iconName} icon text-[#004cfc] text-4xl transition-[font-size, color] duration-300 ease-in-out`}
                />
            </div>
            <div className="absolute bottom-0 flex flex-col p-2 service-content">
                <div className="title text-base left-[10px] font-bold whitespace-nowrap transition-all duration-200 ease-linear">
                    {title}
                </div>
                <div>
                    <div className="box-border w-full p-1 overflow-hidden text-sm leading-tight text-left text-white transition-all duration-500 ease-in-out -mb-[100%] description">
                        {description}
                    </div>
                </div>
            </div>

            <style>{`
                .custom-button:hover .bg {
                    height: 100%;
                }

                .custom-button:hover .icon-container {
                    left: calc(
                        50% - 25px
                    );
                    bottom: 50%;
                }

                .custom-button:hover .icon {
                    font-size: 50px;
                    color: #fff;
                }

                .custom-button:hover .title {
                    color: #fff
                }

                .custom-button:hover .description {
                    margin-bottom: 0;
                }
            `}</style>
        </div>
    )
}

export default ServiceItem
