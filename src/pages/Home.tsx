import Navbar from '@/components/navbar'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import WhyUs from '@/sections/WhyUs'

const Home = () => {
  return (
    <main className='relative'>
        <Navbar />

        <section className='bg-gradient-to-b from-blue3d to-green3d flex justify-center items-center py-10'>
            <Hero />
        </section>
        <section className='flex justify-center items-center py-10'>
            <About />
        </section>
        <section className='flex justify-center items-center py-10 bg-gray-100'>
            <WhyUs />
        </section>
        <section>
            projects carrusel
        </section>
        <section>
            footer
        </section>
    </main>
  )
}

export default Home