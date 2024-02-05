import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="w-full">
            <div className="flex justify-center">
                <div className="py-8 px-[120px] max-w-7xl gap-4 grid lg:grid-cols-4 md:grid-cols-2">
                    <div>
                        <div className="mb-[30px] text-[18px] text-[#263b5e] font-semibold">
                            Get in Touch
                        </div>
                        <div className="leading-7 mb-[20px] text-[#6a7695] text-[16px] font-light">
                            Don't miss any updates of our new templates and
                            extensions!
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Email"
                            className="w-full rounded-lg"
                        />
                        <br />
                        <Button className="bg-[#5e2ced] px-4 normal-case mt-[20px] text-[16px]">
                            Subscribe
                        </Button>
                    </div>
                    <div>
                        <div className="mb-[30px] text-[18px] text-[#263b5e] font-semibold">
                            Download
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Company
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Android App
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Ios App
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Desktop
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                My tasks
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[30px] text-[18px] text-[#263b5e] font-semibold">
                            Help
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                FAQ
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Term & conditions
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Reporting
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Documentation
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Support Policy
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#5e2ced] font-[16px] text-[#212529]"
                            >
                                Privacy
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[30px] text-[18px] text-[#263b5e] font-semibold">
                            Team Solutions
                        </div>
                        <div className="flex gap-2 text-[24px]">
                            <Link
                                to="/"
                                className="border rounded-full border-[#e2e2eb] text-[#858da8] w-[44px] h-[44px] flex items-center justify-center hover:border-[#5e2ced] hover:bg-[#5e2ced] hover:text-white"
                            >
                                <i className="fab fa-facebook" />
                            </Link>
                            <Link
                                to="/"
                                className="border rounded-full border-[#e2e2eb] text-[#858da8] w-[44px] h-[44px] flex items-center justify-center hover:border-[#5e2ced] hover:bg-[#5e2ced] hover:text-white"
                            >
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link
                                to="/"
                                className="border rounded-full border-[#e2e2eb] text-[#858da8] w-[44px] h-[44px] flex items-center justify-center hover:border-[#5e2ced] hover:bg-[#5e2ced] hover:text-white"
                            >
                                <i className="fab fa-linkedin" />
                            </Link>
                            <Link
                                to="/"
                                className="border rounded-full border-[#e2e2eb] text-[#858da8] w-[44px] h-[44px] flex items-center justify-center hover:border-[#5e2ced] hover:bg-[#5e2ced] hover:text-white"
                            >
                                <i className="fab fa-pinterest" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-full h-[266px] absolute overflow-hidden"
                style={{
                    background:
                        'url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png) no-repeat scroll center 0',
                }}
            >
                <div
                    className="absolute w-[330px] h-[105px] bottom-0 left-[30%] transition-all animate-[footerImgAnimation_22s_ease-in-out_infinite]"
                    style={{
                        background:
                            'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif") no-repeat center center',
                        backgroundSize: '100%',
                    }}
                />
                <div
                    className="absolute w-[88px] h-[100px] bottom-0 left-[38%] animate-[footerImgAnimation_30s_ease-in-out_infinite]"
                    style={{
                        background:
                            'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center',
                        backgroundSize: '100%',
                    }}
                />
            </div>
        </div>
    )
}

export default Footer
