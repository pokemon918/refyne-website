import TeamMemberCard from '@components/TeamMemberCard'
import { ITeamMember } from '@/constants/basic'

export interface IMeetTeam {
    team: ITeamMember[]
    title: string
}

const MeetTeam = ({ team, title }: IMeetTeam) => {
    return (
        <div className="flex flex-col items-center gap-6 mx-auto my-6">
            <div className="text-[#004fcf] text-[40px] font-bold text-center">
                {title}
            </div>
            <div className="text-[14px]">
                Image by <u>FreePic</u>
            </div>
            <div className="flex flex-wrap max-w-[1000px] gap-4 items-center justify-center">
                {team.map((member, id) => (
                    <TeamMemberCard key={`team-member-${id}`} {...member} />
                ))}
            </div>
        </div>
    )
}

export default MeetTeam
