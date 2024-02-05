import ServiceItem from './ServiceItem'
import type { IServiceItem } from './ServiceItem'

const Services = () => {
    const services: IServiceItem[] = [
        {
            iconName: 'fa-cloud',
            title: 'Artificial Intelligence',
            description:
                'Artificial Intelligence (AI), Computer Vision, Deep learning, Machine Learning, Chatbots (NLP)',
        },
        {
            iconName: 'fa-cloud',
            title: 'Artificial Intelligence',
            description:
                'Artificial Intelligence (AI), Computer Vision, Deep learning, Machine Learning, Chatbots (NLP)',
        },
        {
            iconName: 'fa-cloud',
            title: 'Artificial Intelligence',
            description:
                'Artificial Intelligence (AI), Computer Vision, Deep learning, Machine Learning, Chatbots (NLP)',
        },
        {
            iconName: 'fa-cloud',
            title: 'Artificial Intelligence',
            description:
                'Artificial Intelligence (AI), Computer Vision, Deep learning, Machine Learning, Chatbots (NLP)',
        },
        {
            iconName: 'fa-cloud',
            title: 'Artificial Intelligence',
            description:
                'Artificial Intelligence (AI), Computer Vision, Deep learning, Machine Learning, Chatbots (NLP)',
        },
        {
            iconName: 'fa-cloud',
            title: 'Artificial Intelligence',
            description:
                'Artificial Intelligence (AI), Computer Vision, Deep learning, Machine Learning, Chatbots (NLP)',
        },
        {
            iconName: 'fa-cloud',
            title: 'Artificial Intelligence',
            description:
                'Artificial Intelligence (AI), Computer Vision, Deep learning, Machine Learning, Chatbots (NLP)',
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 p-6 mt-8">
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="font-extrabold leading-tight uppercase !ml-0 text-2xl">
                    Learn more about our{' '}
                    <span className="text-[#004cfc]">services</span>
                </h1>
            </div>
            <div className="flex flex-col max-w-4xl gap-4 md:flex-row">
                <div className="flex flex-col flex-1">
                    <ServiceItem
                        {...services[0]}
                        className="h-[250px] md:h-full"
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {services.slice(1).map((service, key) => (
                        <ServiceItem
                            key={`service-${key}`}
                            {...service}
                            className="h-[250px] md:w-[200px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
