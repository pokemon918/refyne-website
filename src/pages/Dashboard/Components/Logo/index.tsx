import type { ILogo } from '@constants/basic'

const Logo = () => {
    const logos: ILogo[] = [
        {
            label: 'bonnier',
            link: 'https://logowik.com/content/uploads/images/bonnier-group1520.logowik.com.webp',
        },
        {
            label: 'pensam',
            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iI6A5NY4lOy0a8A1FY1ZOsoGIMZcFZdZ6Mk2SHhbqkC0s1lQsiX5mHbQNw&s',
        },
        {
            label: 'bobedre',
            link: 'data:image/jpeg;base64,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',
        },
        {
            label: 'duka',
            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JIMHbJlS-MMcXxxjxi4GUgdejIt3Lqzg31xjLoKt-nB9xSSpEfhyXppPUQ&s',
        },
        {
            label: 'aura',
            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-_Obue6_FTdqfwDv9WAqf4nFZGgknOEAlN6fw-hp6iBMzN8kuFzHwZkIVg&s',
        },
    ]

    return (
        <div className="container flex justify-center max-w-full gap-12 mx-auto md:px-4">
            {logos.map((logo, key) => (
                <div className="max-w-[200px]" key={`logo-${key}`}>
                    <img
                        src={logo.link}
                        alt={logo.label}
                        className="max-h-[160px]"
                    />
                </div>
            ))}
        </div>
    )
}
export default Logo
