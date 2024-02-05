import Hero from '@components/Hero'
import { useParams } from 'react-router-dom'
import serviceList from '@constants/contents/services.json'
import FAQ from './Components/FAQ'
import Overview from './Components/Overview'
import SEO from './Components/SEO'
import Testimonial from './Components/Testimonial'
import CaseStudy from './Components/CaseStudy'
import ContactUs from '@/components/ContactUs'
import AnimatedCircle from '@/components/AnimatedCircle'
import DotsDivider from '@/components/DotsDivider'
import MeetTeam from './Components/MeetTeam'
import NotFound from '../404'

const Service = () => {
    const service = useParams()?.service || ''
    const serviceKeys = Object.keys(serviceList)
    const serviceCase = serviceKeys.find(
        (item) =>
            item.replace(/\s+/g, '').toLowerCase() === service.toLowerCase()
    )
    if (!serviceCase) return <NotFound />

    return (
        <div className="flex flex-col w-full">
            <Hero {...serviceList[serviceCase]['hero']} />
            <Overview {...serviceList[serviceCase]['overview']} />
            <Testimonial data={serviceList[serviceCase]['testimonial']} />
            <SEO data={serviceList[serviceCase]['seo']} />
            <MeetTeam data={serviceList[serviceCase]['meetteam']} />
            <AnimatedCircle />
            <CaseStudy data={serviceList[serviceCase]['casestudy']} />
            <FAQ {...serviceList[serviceCase]['faq']} />
            <ContactUs />
            <DotsDivider />
        </div>
    )
}

export default Service
