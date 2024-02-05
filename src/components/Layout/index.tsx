import { ReactNode } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
