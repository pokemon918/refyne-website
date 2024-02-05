import { useState, useEffect } from 'react'

const useWidth = () => {
    // Handler to update the state when scrolling occurs
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return windowWidth
}

export default useWidth
