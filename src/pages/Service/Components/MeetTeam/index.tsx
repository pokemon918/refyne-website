import TeamMemberCard from '@components/TeamMemberCard'
import { ITeamMember } from '@/constants/basic'

const MeetTeam = ({ data }: ITeamMember) => {
    return (
        <div className="flex flex-col items-center gap-6 mx-auto my-6">
            <div className="text-[#004fcf] text-[40px] font-bold">
                Meet The Team
            </div>
            <div className="text-[14px]">
                Image by <u>FreePic</u>
            </div>
            <div className="flex flex-wrap max-w-[1000px] gap-4 items-center justify-center">
                {data.map((member, id) => (
                    <TeamMemberCard key={`team-member-${id}`} {...member} />
                ))}
            </div>
        </div>
    )
}

export default MeetTeam
