import { motion } from 'framer-motion'
import TextGenerateEffect from '@/components/TextGeneratingEffect'

const Overview = () => {
    return (
        <>
            <motion.main
                className="flex flex-col items-center justify-center mt-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="https://zetland.imgix.net/fc601500-bcc3-11e8-94a2-31833f0e6bb5/Sidsel.png?fit=crop&crop=entropy&auto=format&cs=srgb&w=700"
                    alt="logo"
                    className="h-20 w-fit"
                />
                <TextGenerateEffect
                    words="Velfærdsstatens helt store problem? Ingen er helt raske, og alle er altid lidt syge"
                    className="max-w-2xl font-SharpGrotesk20"
                />
            </motion.main>
            <figure className="mt-16">
                <img
                    src="https://zetland.imgix.net/7665f840-15cb-11ea-8bab-d74199772f56/20191202-102401-L_42Mb.jpg?fit=crop&crop=focalpoint&auto=format&cs=srgb&fp-x=0.48283200908059026&fp-y=0.48520710059171596&h=460&w=800"
                    alt="blog img"
                    className="w-full"
                />
                <figcaption className="px-4 py-2 mx-auto w-fit">
                    <span className="font-medium">DIAGNOSER</span> For mange
                    eller lige tilpas? Foto: Ida Guldbæk Arentsen, Ritzau
                    Scanpix
                </figcaption>
            </figure>
        </>
    )
}

export default Overview
