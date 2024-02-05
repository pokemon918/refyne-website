import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from '@material-tailwind/react'
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline'

const ContactUs = () => {
    return (
        <div className="p-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-[1fr] md:grid-cols-[2fr_3fr] text-white shadow-lg">
                <Card className="flex flex-col gap-6 bg-[#004CFC] text-white justify-center p-6 lg:p-12 rounded-none">
                    <Typography variant="h2">
                        It's time to build something exciting!
                    </Typography>
                    <Typography variant="paragraph">
                        Got a question or feedback? Contact us! Our team is here
                        to assist you and ensure your experience with us is the
                        best it can be.
                    </Typography>
                    <Typography variant="small" className="flex flex-col gap-2">
                        <span className="flex items-center gap-2">
                            <EnvelopeIcon
                                color="#004CFC"
                                className="w-6 h-6 p-1 bg-white rounded-full"
                            />{' '}
                            hello@whitespaceui.design
                        </span>
                        <span className="flex items-center gap-2">
                            <PhoneIcon
                                color="#004CFC"
                                className="w-6 h-6 p-1 bg-white rounded-full"
                            />{' '}
                            (671) 555-0110
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPinIcon
                                color="#004CFC"
                                className="w-6 h-6 p-1 bg-white rounded-full"
                            />{' '}
                            2118 Thornridge Cir. Syracuse, Connecticut 35624
                        </span>
                    </Typography>
                </Card>
                <Card
                    color="transparent"
                    className="flex flex-col justify-center gap-4 p-8 text-white bg-black rounded-none lg:px-24 lg:py-16"
                    shadow={false}
                >
                    <Typography variant="h4">Get a free quote</Typography>
                    <Typography className="-mt-3 font-normal">
                        Fill in the requirement information in the below.
                    </Typography>
                    <form className="w-full">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-[1fr] lg:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <Typography variant="h6" color="white">
                                        First Name
                                    </Typography>
                                    <Input
                                        placeholder="Enter name"
                                        color="white"
                                        className="!border-t-white focus:!border-t-white focus:!border-[1px]"
                                        labelProps={{
                                            className:
                                                'before:content-none after:content-none',
                                        }}
                                        containerProps={{
                                            className: 'min-w-0',
                                        }}
                                        crossOrigin={undefined}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography variant="h6" color="white">
                                        Last Name
                                    </Typography>
                                    <Input
                                        placeholder="Enter name"
                                        color="white"
                                        className="!border-t-white focus:!border-t-white focus:!border-[1px]"
                                        labelProps={{
                                            className:
                                                'before:content-none after:content-none',
                                        }}
                                        containerProps={{
                                            className: 'min-w-0',
                                        }}
                                        crossOrigin={undefined}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Typography variant="h6" color="white">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Enter email"
                                    color="white"
                                    className="!border-t-white focus:!border-t-white focus:!border-[1px]"
                                    labelProps={{
                                        className:
                                            'before:content-none after:content-none',
                                    }}
                                    crossOrigin={undefined}
                                />
                            </div>
                            <div className="flex flex-col">
                                <Typography variant="h6" color="white">
                                    Message
                                </Typography>
                                <Textarea
                                    placeholder="Enter message"
                                    cols={5}
                                    labelProps={{
                                        className:
                                            'before:content-none after:content-none',
                                    }}
                                    className="border-white focus:!border-white focus:!border-[1px] focus:outline-0 focus:ring-0 placeholder:text-transparent focus:placeholder:text-gray-500"
                                />
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{' '}
                                            or drag and drop
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                        <Button
                            className="mt-4 bg-[#004CFC] hover:brightness-125"
                            fullWidth
                        >
                            submit
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default ContactUs
