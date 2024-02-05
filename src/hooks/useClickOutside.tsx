import { RefObject, useEffect } from 'react'

type ClickOutsideListener = (event: MouseEvent) => void

const useClickOutside = (
    ref: RefObject<HTMLElement>,
    callback: ClickOutsideListener
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(event)
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, callback])
}

export default useClickOutside
