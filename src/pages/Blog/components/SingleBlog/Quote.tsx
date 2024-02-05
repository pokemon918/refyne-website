import { Button } from '@material-tailwind/react'
import { useState, useRef, useEffect } from 'react'
import useClickOutside from '@hooks/useClickOutside'
import useWidth from '@/hooks/useWidth'

interface IQuote {
    children: React.ReactNode
    content?: JSX.Element
}

const QuotePanel: React.FC<{
    children: React.ReactNode
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ children, open, setOpen }) => {
    const ref = useRef<HTMLDivElement>(null)

    useClickOutside(ref, () => setOpen(false))

    return (
        <div
            className={`fixed top-0 left-0 z-10 w-screen h-screen bg-white text-right px-[40px] md:px-[25vw] pt-[27vh] text-[15px] font-SharpGrotesk18 transition-all duration-500 ${
                open ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex flex-col gap-4" ref={ref}>
                <div>
                    Luk{' '}
                    <Button
                        variant="text"
                        className="p-0"
                        onClick={() => setOpen(false)}
                    >
                        <i className="cursor-pointer far fa-circle-xmark" />
                    </Button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

const Quote: React.FC<IQuote> = ({ children, content }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useClickOutside(ref, () => setOpen(false))

    const windowW = useWidth()

    useEffect(() => {
        if (windowW >= 960) setOpen(false)
    }, [windowW])

    return (
        <>
            <>
                <Button
                    variant="text"
                    className="p-0 text-lg normal-case"
                    onClick={() => windowW < 960 && setOpen(true)}
                >
                    {children}
                    <span className="cursor-pointer lg:hidden">*</span>
                </Button>
                <div className="absolute w-[150px] right-[10px] xl:right-[60px] text-sm hidden lg:block font-SharpGrotesk18">
                    {content}
                </div>
            </>
            <QuotePanel open={open} setOpen={setOpen}>
                {content}
            </QuotePanel>
        </>
    )
}

export default Quote
