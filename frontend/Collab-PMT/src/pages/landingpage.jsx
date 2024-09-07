import Lottie from 'lottie-react'
import animationData from '../assets/Kanban-default.json';
import { BorderBeam } from "@/components/magicui/border-beam";
import ShinyButton from "@/components/magicui/shiny-button";
import Particles from "@/components/magicui/particles";


export default function LandingPage() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="p-8 w-full sm:max-w-6xl md:max-w-7xl lg:max-w-8xl">

          <Particles
            className="absolute inset-0"
            quantity={200}
            ease={80}
            color="#000000"
            refresh
          />
          <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-black to-gray-400 bg-clip-text text-center xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none text-transparent">
            <h2>TeamUp is the new way</h2>
            <h2 className="md:block">to build the future</h2>
          </div>

          <div className="mt-10 text-center sm:text-xl md:text-2xl lg:text-3xl text-gray-500">
            <p>Beautifully designed all-in-one workplace to connect and manage</p>
            <p className="hidden md:block">your workflow with across the globe</p>
          </div>

          <div className='flex items-center justify-center mx-auto mt-10'>
            <ShinyButton text="Lets Get Started" />
          </div>

          <div className="mx-auto mt-24 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b to-black-500">
            <Lottie
              animationData={animationData}
              loop={true}
            />
            <BorderBeam size={500} duration={20} delay={9} colorFrom={'#000000'} colorTo={'#ffffff'} />
          </div>


          <div className='mt-40 pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-black to-gray-400 bg-clip-text text-center xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-none text-transparent'>
            <h1>Organize the world around you</h1>
          </div>
          <div className='mt-20 flex items-center justify-center mx-auto gap-8'>
            <div>
              <h1 className='font-bold text-3xl text-left mb-10 max-w-xl'>Data Overload</h1>
              <p>Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.</p>
            </div>
            <div>
              <h1 className='font-bold text-3xl text-left mb-10 max-w-xl'>Slow Decision-Making</h1>
              <p>Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.</p>
            </div>
            <div>
              <h1 className='font-bold text-3xl text-left mb-10 max-w-xl'>Data Security Concerns</h1>
              <p>With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
