import { ISubTeamMember } from '@constants/basic'
import { Avatar, Typography } from '@material-tailwind/react'

const TeamMemberCard = ({
    avatar,
    role,
    name,
    desc,
    facebook,
    twitter,
    instagram,
}: ISubTeamMember) => {
    return (
        <div className="flex gap-4 max-w-[480px] min-h-[240px] border p-4">
            <Avatar
                size="xxl"
                className="p-1 border border-gray-300"
                src={avatar}
            />
            <div className="flex flex-col gap-4">
                <div className="text-[12px] text-gray-500">{role}</div>
                <div className="text-[18px] font-bold">{name}</div>
                <div className="text-[13px]">{desc}</div>
                <div className="flex gap-5">
                    <Typography
                        as="a"
                        href={facebook}
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-facebook" />
                    </Typography>
                    <Typography
                        as="a"
                        href={twitter}
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <i className="fab fa-twitter" />
                    </Typography>
                    <Typography
                        as="a"
                        href={instagram}
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <i className="fab fa-instagram" />
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard
