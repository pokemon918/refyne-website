import { ISEO } from '@constants/basic'
import SingleSEO from './SingleSEO'

const SEO = ({ data }: ISEO) => {
    return (
        <div className="flex flex-col mt-8">
            {data.map((seo, key) => (
                <SingleSEO {...seo} key={`single-seo-${key}`} />
            ))}
        </div>
    )
}

export default SEO
