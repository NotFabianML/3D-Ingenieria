import WhyusCard from "@/components/WhyusCard";
import { reasons } from "@/constants"

const WhyUs = () => {
  return (
    <section className='paddingY flexCenter flex-col relative '>
      <div className=" w-full flex justify-center items-center flex-col sm:mb-10 mb-6">
        <h2 className='heading2 text-center'>
          ¿Por que elegir <span className="font-montserrat font-semibold">3D</span> Ingeniería?
        </h2>
        <div className="w-full md:mt-0 mt-6 flex justify-center">
          <p className='paragraph text-center max-w-[600px]'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-between justify-center w-full">
        {reasons.map((card: { id: string, content: string; title: string; img: string }) => <WhyusCard key={card.id} {...card} />)}
      </div>
    </section>
  )
}

export default WhyUs