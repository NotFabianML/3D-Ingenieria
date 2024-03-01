import { Navbar } from '@/components'
import { About, Hero, WhyUs } from '../sections'
// import { About, Hero, WhyUs } from '@/sections'

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

            <section className='flexCenter paddingX bg-gray-100'>
                <div className='boxWidth'>
                    <WhyUs />
                </div>
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