const WhyusCard = ({ content, title, img }: { content: string, title: string, img: string }) => (
    <div className="flex justify-around items-center flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-0 sm:mr-5 mr-0 my-5 bg-white border-2 border-gray-200 shadow-lg">

        <img src={img} alt={title} className="w-[72px] h-[72px] rounded-full" />
        <div className="flex flex-col mt-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black text-center">
                {title}
            </h4>
        </div>


        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10 text-center">
            {content}
        </p>
    </div>
);


export default WhyusCard;
