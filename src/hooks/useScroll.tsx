import { useState, useEffect } from 'react'

const useScroll = () => {
    // State to store the current scrollY value
    const [scrollY, setScrollY] = useState(window.scrollY)

    // Handler to update the state when scrolling occurs
    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    // Effect to add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollY
}

export default useScroll
