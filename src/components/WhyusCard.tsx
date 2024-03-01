const WhyusCard = ({ content, title, img }: { content: string, title: string, img: string }) => (
    <div className="flex justify-start items-center flex-col px-10 py-12 max-h-[450px] max-w-[370px] md:mr-0 sm:mr-5 mr-0 my-5 bg-white rounded-[20px] shadow-2xl whyus-card">

        <img src={img} alt={title} className="w-[72px] h-[72px]" />
        <div className="flex flex-col mt-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black text-center">
                {title}
            </h4>
        </div>


        <p className="font-poppins font-normal text-[18px] leading-[32.4px] paragraph my-5 text-center">
            {content}
        </p>
    </div>
);


export default WhyusCard;
