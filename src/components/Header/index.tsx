import { Button, IconButton, Navbar } from '@material-tailwind/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import type { INavItem } from '@constants/basic'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useScroll from '@hooks/useScroll'
import LOGO from '@assets/logo.png'

const NavItems: INavItem[] = [
    {
        label: 'Home',
        link: '/home',
    },
    {
        label: 'About',
        link: '/about',
    },
    {
        label: 'Services',
        link: '/services',
    },
    {
        label: 'Portfolio',
        link: '/portfolio',
    },
    {
        label: 'Blog',
        link: '/blog',
    },
    {
        label: 'Team',
        link: '/teams',
    },
]

const Header = () => {
    const location = useLocation()
    const [openNav, setOpenNav] = useState(false)
    const scrollY = useScroll()

    useEffect(() => setOpenNav(false), [location, setOpenNav])

    return (
        <Navbar
            className={`fixed top-0 z-10 max-w-full px-0 py-4 text-black rounded-none h-max border-none transition-all duration-300 ${
                scrollY > 1
                    ? 'shadow-md backdrop-blur-md bg-gradient-to-r from-white/0 to-white/30'
                    : 'shadow-none backdrop-filter-none bg-transparent'
            }`}
        >
            <div className="flex items-center justify-between gap-4 px-6 mx-auto max-w-7xl">
                <Link to="/">
                    <img src={LOGO} alt="logo" className="h-10" />
                </Link>
                <div className="flex items-center justify-between gap-4 lg:gap-8">
                    <div className="hidden gap-4 md:flex">
                        {NavItems.map((item, key) => (
                            <Link
                                to={item.link}
                                key={`nav-${key}`}
                                className="hover:text-gray-800"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <Button
                        className="font-bold p-1 whitespace-nowrap lg:py-2 lg:px-4 rounded text-[#004cfc] border-2 border-solid border-[#004cfc] text-base capitalize"
                        color="white"
                    >
                        Contact Us
                    </Button>
                    <IconButton
                        variant="text"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        className="z-20 flex md:hidden hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    >
                        {openNav ? (
                            <XMarkIcon
                                className="z-20 text-white"
                                width="36px"
                                height="36px"
                            />
                        ) : (
                            <Bars3Icon width="24px" height="24px" />
                        )}
                    </IconButton>
                </div>
            </div>
            <div
                className={`${
                    !openNav ? 'opacity-0 h-0' : 'opacity-100 h-screen'
                } inset-0 absolute w-screen flex flex-col gap-6 bg-black items-center justify-center transition-all duration-300 backdrop-blur-md`}
            >
                {NavItems.map((item, key) => (
                    <Link
                        to={item.link}
                        key={`nav-mobile-${key}`}
                        className="text-2xl font-black text-white hover:text-gray-500"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </Navbar>
    )
}

export default Header
