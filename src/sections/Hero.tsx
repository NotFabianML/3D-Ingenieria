import { Button } from "@/components/ui/button"

const Hero = () => {

    return (
        <section id="home" className={`flex md:flex-row flex-col paddingY`}>
            <div className={`flex-1 flexStart flex-col xl:px-0 sm:px-32 px-8`}>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-palanquin font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Hacemos tus proyectos <br className="sm:block hidden" />
                        <span>realidad</span>{" "}
                    </h1>
                </div>

                <p className={`paragraph2 font-montserrat max-w-[700px] mt-5`}>
                    Transformamos tus ideas en realidades con precisión y tecnología de vanguardia. Comprometidos con la excelencia y la sostenibilidad, llevamos tu negocio al próximo nivel.
                </p>
                <div className="flex gap-4 mt-8">
                    <Button variant={"outline"} className="text-white rounded-full ss:text-[20px] text-[15px] ss:leading-[30px] leading-[20px] p-8">
                        Ver más
                    </Button>
                    <Button variant={"secondary"} className="rounded-full ss:text-[20px] text-[15px] ss:leading-[30px] leading-[20px]  p-8">
                        Cotizar
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero

