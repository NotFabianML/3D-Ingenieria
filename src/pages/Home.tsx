import { Navbar } from '@/components'
import { About, Hero, WhyUs } from '@/sections'

const Home = () => {
    return (
        <main className='bg-white w-full overflow-hidden'>
            <section className='paddingX flexCenter z-50'>
                <div className='boxWidth'>
                    <Navbar />
                </div>
            </section>

            <section className='bg-blue-gradient flexStart'>
                <div className='boxWidth'>
                    <Hero />
                </div>
            </section>

            <section className='flexStart paddingX'>
                <div className='boxWidth'>
                    <About />
                </div>
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