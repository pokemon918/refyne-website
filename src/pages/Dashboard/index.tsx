import Hero from '@components/Hero'
import Logo from './Components/Logo'
import CategoryForm from './Components/CategoryForm'
import Services from './Components/Services'

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Logo />
            <CategoryForm />
            <Services />
        </div>
    )
}

export default Home
