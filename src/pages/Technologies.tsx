import { motion } from "framer-motion";

const Technologies = () => {
    const technologies = [
        {
            id: 1,
            url: './js.png',
            name: 'JavaScript'
        },
        {
            id: 2,
            url: './typescript_icon.png',
            name: 'TypeScript'
        },
        {
            id: 3,
            url: './react_icon.png',
            name: 'React'
        },
        {
            id: 4,
            url: './git.png',
            name: 'Git'
        },
        {
            id: 5,
            url: './tailwind.png',
            name: 'TailwindCSS'
        },
        {
            id: 5,
            url: './next.png',
            name: 'NextJS'
        },

    ]

    return (
        <motion.div

            initial={{ opacity: 0, y: 100 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1
                }
            }}
            className="flex flex-col gap-6">

            <div className='grid grid-cols-4  gap-3 lg:w-full'>
                {technologies.map(tech => (
                    <div className='flex flex-col items-center w-full gap-2 justify-between animate-tada duration-200 delay-200'>
                        <img src={tech.url} className=' fill-white lg:w-12 w-16 rounded-lg  ' />
                        <div className='text-sm'>{tech.name}</div>
                    </div>


                ))}</div>

        </motion.div>




    );
};

export default Technologies;