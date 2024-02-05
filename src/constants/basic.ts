export interface INavItem {
    label: string
    link: string
}

export interface ILogo {
    label: string
    link: string
}

export interface ICategoryItem {
    id: number
    label: string
    icon: JSX.Element
    onClick?: () => void
    focused?: boolean
}

export interface IFAQQuestion {
    title: string
    content: string
}

export interface IFAQ {
    description: string
    questions: IFAQQuestion[]
}

export interface ISubSEO {
    title: string
    overview: string
    content: string
    subcontent: string[]
}

export interface ISEO {
    data: ISubSEO[]
}

interface IDetail {
    status: boolean
    value: string
    description: string
}
export interface ISingleCaseStudy {
    title: string
    overview: string
    img: any
    link: string
    detail: IDetail[]
    placeRight?: boolean
}

export interface ICaseStudy {
    data: ISingleCaseStudy[]
}

export interface ISubTestimonial {
    fullName: string
    title: string
    icon: any
    feedback: string
    avatar: any
}

export interface ICarousel {
    currentIndex: number
    data: ISubTestimonial[]
}

export interface ITestimonial {
    data: ISubTestimonial[]
}

export interface ISubTeamMember {
    avatar: string
    role: string
    name: string
    desc: string
    facebook: string
    twitter: string
    instagram: string
}

export interface ITeamMember {
    data: ISubTeamMember[]
}

export interface IHero {
    subtitle: string
    title: string
    description: string
}

export interface IOverview {
    title: string
    content: string[]
}
