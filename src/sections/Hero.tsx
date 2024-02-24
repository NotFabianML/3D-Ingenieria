import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section className='h-auto w-full flex justify-start gap-10 max-container px-32'>
            <div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x">
                <h1 className=" font-palanquin text-5xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-white">Hacemos tus proyectos realidad</h1>
                <p className="font-montserrat text-gray-100 text-lg leading-8 mt-6 mb-10"> Transformamos tus ideas en realidades con precisión y tecnología de vanguardia. Comprometidos con la excelencia y la sostenibilidad, llevamos tu negocio al próximo nivel.</p>
                <div className="flex gap-4">
                    <Button variant={"secondary"}>Ver más</Button>
                    <Button variant={"secondary"}>Cotizar</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero

