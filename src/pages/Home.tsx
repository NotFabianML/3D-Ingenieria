import Navbar from '@/components/navbar'
import Hero from '@/sections/Hero'

const Home = () => {
  return (
    <main className='relative'>
        <Navbar />

        <section className='bg-gradient-to-b from-blue3d to-green3d flex justify-center items-center py-10 bg-purple-500'>
            <Hero />
        </section>
        <section>
            about
        </section>
        <section>
            why us
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