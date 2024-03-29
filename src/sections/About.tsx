const About = () => {
  return (
    <section id="aboutus" className='sectionReverse'>
      <div className='sectionImgReverse'>
        <img src="https://placehold.co/600x500" alt="About us" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

      <div className='sectionInfo'>
        <h2 className='heading2'>
          Sobre nosotros
        </h2>
        <p className='paragraph max-w-[470px] mt-5'>
          En 3D Ingeniería ofrecemos soluciones integrales en diseño, modelación 3D y automatización industrial. Comprometidos con la calidad y la innovación, nuestro equipo experto garantiza resultados que impulsan el éxito de nuestros clientes, sin importar el tamaño de su empresa.
        </p>
      </div>
    </section>
  )
}

export default About