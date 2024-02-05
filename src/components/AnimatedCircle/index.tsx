import { useState } from 'react'
import Circle from './Circle'

const AnimatedCircle = () => {
    const content = [
        '',
        'JS+: The JavaScript ecosystem (not the language!): Anyone else feels overwhelmed by the rate of rapid changes here?',
        'CSS: This is moving in a nice click lately, with lots of useful new stuff enabled in the browsers',
        `HTML: Started with 20 something "tags", now we have over 100 "elements", but I feel that I've been able to keep up with the pace of change here`,
        `URLs: Sadly they are frequently changing; links die. We should work hard to keep URLs unchanged, but that's not how it is`,
        `HTTP: Gradually changed (http/2), but it kind of feels good that it doesn't constantly change underneath us`,
        `TCP/IP: Deliberately dumb, simple, all it does is move packets around`,
    ]
    const [current, setCurrent] = useState(0)

    return (
        <div className="flex items-center justify-start w-full p-2 mx-auto mt-6 overflow-hidden">
            <div className="relative w-[40vh] h-[40vh] md:w-[50vh] md:h-[50vh] mx-auto flex justify-center items-center">
                <Circle
                    className="w-full h-full animate-[spin_2.5s_linear_infinite] bg-[#edf4ff]"
                    onHover={() => setCurrent(1)}
                    onReset={() => setCurrent(0)}
                >
                    JS+
                </Circle>
                <Circle
                    className="h-[90%] w-[90%] animate-[spin_5s_linear_infinite] bg-[#c3daff]"
                    onHover={() => setCurrent(2)}
                    onReset={() => setCurrent(0)}
                >
                    CSS
                </Circle>
                <Circle
                    className="h-[80%] w-[80%] animate-[spin_10s_linear_infinite] bg-[#87b5ff]"
                    onHover={() => setCurrent(3)}
                    onReset={() => setCurrent(0)}
                >
                    HTML
                </Circle>
                <Circle
                    className="h-[70%] w-[70%] animate-[spin_15s_linear_infinite] bg-[#4a90ff]"
                    onHover={() => setCurrent(4)}
                    onReset={() => setCurrent(0)}
                >
                    URLs
                </Circle>
                <Circle
                    className="h-[60%] w-[60%] animate-[spin_25s_linear_infinite] bg-[#0e6bff]"
                    onHover={() => setCurrent(5)}
                    onReset={() => setCurrent(0)}
                >
                    HTTP
                </Circle>
                <Circle
                    className="h-[50%] w-[50%] animate-[spin_35s_linear_infinite] bg-[#004fcf]"
                    onHover={() => setCurrent(6)}
                    onReset={() => setCurrent(0)}
                >
                    TCP/IP
                </Circle>
                <span
                    className="absolute text-[8px] md:text-[13px] text-white flex justify-center items-center font-bold h-[50%] w-[50%] p-[20px] text-center hover:bg-[#00307d] rounded-full"
                    onMouseEnter={() => setCurrent(6)}
                    onMouseLeave={() => setCurrent(0)}
                >
                    {content[current]}
                </span>
                <div className="absolute bg-white text-[#004fcf] w-full text-xs md:text-base text-center p-1 md:p-3 bottom-0 shadow-[0_-1em_1em_#004fcf] flex flex-col gap-2">
                    <p className="w-3/5 mx-auto leading-tight">
                        Fast gets all the attention, but Slow has all the power
                    </p>
                    <i>Stewart Brand "Pacelayers"</i>
                    <a
                        href="https://vimeo.com/373128517"
                        className="text-gray-600 hover:text-[#004fcf]"
                    >
                        The Layers of the Web - Jeremy Keith
                    </a>
                </div>
            </div>
        </div>
    )
}
export default AnimatedCircle
