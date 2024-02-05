import { ICaseStudy } from '@constants/basic'
import SingleItem from './SingleItem'

const CaseStudy = ({ data }: ICaseStudy) => {
    return (
        <div className="flex flex-col">
            {data.map((case_study, key) => (
                <SingleItem
                    key={`case-study-${key}`}
                    {...case_study}
                    placeRight={!!(key % 2)}
                />
            ))}
        </div>
    )
}

export default CaseStudy
