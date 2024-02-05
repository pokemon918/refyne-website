import { Typography } from '@material-tailwind/react'

const SingleBlog = ({
    title,
    content,
}: {
    title: string
    content: JSX.Element
}) => {
    return (
        <div>
            <Typography
                variant="paragraph"
                className="text-lg font-SharpGrotesk18"
                style={{
                    fontFamily:
                        'ff-meta-serif-web-pro,ui-serif,Georgia,Cambria,Times New Roman,Times,serif',
                }}
            >
                <span className="font-semibold font-SharpGrotesk20">
                    <span className="block float-left pr-1 font-bold text-7xl">
                        {title.charAt(0)}
                    </span>
                    {title.slice(1)}
                </span>{' '}
                {content}
            </Typography>
        </div>
    )
}

export default SingleBlog
