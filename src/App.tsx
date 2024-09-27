import { motion } from 'framer-motion'
import './App.css'
import Expertise from './pages/Expertise'
import Intro from './pages/Intro'
import Technologies from './pages/Technologies'


function App() {


  return (
    <div className='mt-10 container mx-auto flex justify-center px-8 max-w-lg py-8'>
      <div className='gap-4 flex flex-col justify-center items-center '>
        <Intro />
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
        >
          <Expertise />
        </motion.div>
        <Technologies />

      </div>
      <div className='fixed flex flex-col items-center lg:right-1/4 lg:top-24 top-10 -right-11 '>

        <a href='mailto:kaidev.contact@gmail.com' className='text-sm lg:animate-blink lg:transition-all lg:duration-200 lg:rotate-12 rotate-90 cursor-pointer lg:btn   p-3 rounded-xl '>
          Contact me
        </a>

      </div>
    </div>
  )
}

export default App
