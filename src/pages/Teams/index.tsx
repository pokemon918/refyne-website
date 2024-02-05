import Hero from '@components/Hero'
import { ITeamMember } from '@constants/basic'
import MeetTeam from './Components/MeetTeam'
import ApplyForm from './Components/Apply'

const Teams = () => {
    const data_team: ITeamMember[] = [
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mc5aon5lfaage5xsr2pf',
            role: 'Creative leader',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1476077457/slgutdcnkw1uj45udgfl.jpg',
            role: 'Advisor',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/rtw76cvitfypjpyp586j',
            role: 'CEO, Co-Founder',
            name: 'Mark Swarts',
            desc: 'Mark is a Las Vegas native who began his insurance career in 1993 at a local insurance Agency.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1471255957/dpvjgwjmsh5fucbxrghh.png',
            role: 'Managing Partner',
            name: 'Jay Markley',
            desc: 'John D. Markley, Jr. has been a director of the company since November 2016. Since 2009, Mr. Markley has served as Managing Partner of Bear Creek Capital Management.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    ]
    const social_team: ITeamMember[] = [
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mc5aon5lfaage5xsr2pf',
            role: 'Creative leader',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1476077457/slgutdcnkw1uj45udgfl.jpg',
            role: 'Advisor',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/rtw76cvitfypjpyp586j',
            role: 'CEO, Co-Founder',
            name: 'Mark Swarts',
            desc: 'Mark is a Las Vegas native who began his insurance career in 1993 at a local insurance Agency.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1471255957/dpvjgwjmsh5fucbxrghh.png',
            role: 'Managing Partner',
            name: 'Jay Markley',
            desc: 'John D. Markley, Jr. has been a director of the company since November 2016. Since 2009, Mr. Markley has served as Managing Partner of Bear Creek Capital Management.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    ]
    const search_team: ITeamMember[] = [
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mc5aon5lfaage5xsr2pf',
            role: 'Creative leader',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1476077457/slgutdcnkw1uj45udgfl.jpg',
            role: 'Advisor',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/rtw76cvitfypjpyp586j',
            role: 'CEO, Co-Founder',
            name: 'Mark Swarts',
            desc: 'Mark is a Las Vegas native who began his insurance career in 1993 at a local insurance Agency.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1471255957/dpvjgwjmsh5fucbxrghh.png',
            role: 'Managing Partner',
            name: 'Jay Markley',
            desc: 'John D. Markley, Jr. has been a director of the company since November 2016. Since 2009, Mr. Markley has served as Managing Partner of Bear Creek Capital Management.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    ]
    const SEO_team: ITeamMember[] = [
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mc5aon5lfaage5xsr2pf',
            role: 'Creative leader',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1476077457/slgutdcnkw1uj45udgfl.jpg',
            role: 'Advisor',
            name: 'Bob Brown',
            desc: 'Glavi amet ntnisl libero molestie ante utfringila purus eros quis glavrid from dolor amet iquam lorem bibendum',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/rtw76cvitfypjpyp586j',
            role: 'CEO, Co-Founder',
            name: 'Mark Swarts',
            desc: 'Mark is a Las Vegas native who began his insurance career in 1993 at a local insurance Agency.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
        {
            avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1471255957/dpvjgwjmsh5fucbxrghh.png',
            role: 'Managing Partner',
            name: 'Jay Markley',
            desc: 'John D. Markley, Jr. has been a director of the company since November 2016. Since 2009, Mr. Markley has served as Managing Partner of Bear Creek Capital Management.',
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    ]

    return (
        <div className="flex flex-col w-full">
            <Hero />
            <MeetTeam team={data_team} title="Data & Analytics Team" />
            <MeetTeam team={social_team} title="Paid Social Team" />
            <MeetTeam team={search_team} title="Paid Search Team" />
            <MeetTeam team={SEO_team} title="SEO Team" />
            <ApplyForm />
        </div>
    )
}

export default Teams
