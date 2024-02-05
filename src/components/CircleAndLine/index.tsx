import AI_SVG from '@assets/icons/AI.svg'
import Mobile_SVG from '@assets/icons/Mobile.svg'

const CircleAndLine = () => {
    const item_class =
        'absolute top-0 left-1/2 h-1/2 w-1/2 -translate-x-1/2 origin-[50%_100%]'
    const item_class_type2 =
        'absolute top-[10%] left-0 h-2/5 w-2/5 translate-x-[25%] origin-[100%_100%]'
    const dot_class =
        "absolute w-full h-full left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-[5%] after:w-[5%] after:bg-white after:border-2 after:border-solid after:border-[#004cfc] after:rounded-full"
    const dot_class_type2 =
        "absolute w-full h-full left-[30%] top-[30%] -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-[6.25%] after:w-[6.25%] after:bg-white after:border-2 after:border-solid after:border-[#004cfc] after:rounded-full"
    const line_class =
        'absolute h-[90%] top-[10%] w-[calc(50%+1px)] border-r-2 border-dashed border-[#004cfc]'
    const line_class_type2 =
        'absolute h-[70%] top-[30%] w-[calc(50%+1px)] border-r-2 border-t-2 border-dashed border-[#004cfc] left-[calc(30%-1px)]'
    const circle_class =
        'absolute top-0 -translate-x-1/2 left-1/2 w-[6vmin] h-[6vmin] flex justify-center items-center bg-[#004cfc] rounded-full'
    const circle_class_type2 =
        'absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[6vmin] h-[6vmin] flex justify-center items-center bg-[#004cfc] rounded-full'
    const center_class =
        'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'

    return (
        <div className="absolute w-[45vmin] h-[45vmin]">
            {/* item 1 */}
            <div className={item_class}>
                {/* line */}
                <div className={line_class} />
                {/* dot */}
                <div
                    className={`${dot_class} animate-[moveDot1_5.5s_linear_infinite]`}
                />
                {/* circle */}
                <div className={`${circle_class}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* item 2 */}
            <div className={`${item_class} rotate-90`}>
                {/* line */}
                <div className={line_class} />
                {/* dot */}
                <div
                    className={`${dot_class} animate-[moveDot1_5.5s_linear_infinite] animation-delay-1000`}
                />
                {/* circle */}
                <div className={`${circle_class}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* item 3 */}
            <div className={`${item_class} rotate-180`}>
                {/* line */}
                <div className={line_class} />
                {/* dot */}
                <div
                    className={`${dot_class} animate-[moveDot1_5.5s_linear_infinite] animation-delay-2000`}
                />
                {/* circle */}
                <div className={`${circle_class}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* item 3 */}
            <div className={`${item_class} -rotate-90`}>
                {/* line */}
                <div className={line_class} />
                {/* dot */}
                <div
                    className={`${dot_class} animate-[moveDot11_5.5s_linear_infinite] animation-delay-3000`}
                />
                {/* circle */}
                <div className={`${circle_class}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* item type 2 - 1 */}
            <div className={`${item_class_type2} -scale-x-[100%]`}>
                {/* line */}
                <div className={`${line_class_type2}`} />
                {/* dot */}
                <div
                    className={`${dot_class_type2} animate-[moveDot2_4s_linear_infinite] animation-delay-2500`}
                />
                {/* circle */}
                <div className={`${circle_class_type2}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* item type 2 - 2 */}
            <div
                className={`${item_class_type2} -scale-x-[100%] -scale-y-[100%]`}
            >
                {/* line */}
                <div className={`${line_class_type2}`} />
                {/* dot */}
                <div
                    className={`${dot_class_type2} animate-[moveDot2_4s_linear_infinite] animation-delay-1500`}
                />
                {/* circle */}
                <div className={`${circle_class_type2}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* item type 2 - 3 */}
            <div className={`${item_class_type2} -scale-y-[100%]`}>
                {/* line */}
                <div className={`${line_class_type2}`} />
                {/* dot */}
                <div
                    className={`${dot_class_type2} animate-[moveDot21_4s_linear_infinite] animation-delay-500`}
                />
                {/* circle */}
                <div className={`${circle_class_type2}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* item type 2 - 4 */}
            <div className={`${item_class_type2}`}>
                {/* line */}
                <div className={`${line_class_type2}`} />
                {/* dot */}
                <div
                    className={`${dot_class_type2} animate-[moveDot21_4s_linear_infinite] animation-delay-3500`}
                />
                {/* circle */}
                <div className={`${circle_class_type2}`}>
                    <img
                        src={Mobile_SVG}
                        alt="mobile"
                        className="w-3/5 h-3/5"
                    />
                </div>
            </div>
            {/* center item */}
            <div className="absolute w-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 top-1/2 left-1/2">
                <div
                    className={`${center_class} w-2/3 h-2/3 bg-white shadow-md rounded-full`}
                />
                <div
                    className={`${center_class} w-1/2 h-1/2 rounded-full border-2 border-solid border-[#004cfc]`}
                />
                <img
                    src={AI_SVG}
                    alt="ai"
                    className={`${center_class} h-1/3 w-1/3`}
                />
            </div>
        </div>
    )
}

export default CircleAndLine
