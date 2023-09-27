import { Button } from ".."
import { pinTerest, Twitter, youTube, Instagram } from "../../assets"



export default function index() {

  const text = "font-montserrat font-normal text-base leading-6 text-[#AFAFAF]"

  return (
    <div className="flex flex-col lg:flex-row lg:justify-around pt-20 pl-10 lg:pl-32
      lg:gap-32 lg:h-[512px] bg-[#22262F]">

      <div>
        <div className="font-montserrat font-bold text-base leading-6 text-white mb-5">
          Address
        </div>
        <div className={`${text} mb-8`}>
          A-272, Surajmal Vihar, Delhi,<br />11009281-8181-0860 c
        </div>
        <div className={`${text}`}>
          ontact@vivekguptafoundation.in
        </div>
      </div>

      <div>
        <div className="font-playfair font-bold text-base leading-6 text-white mb-5">
          Get In Touch
        </div>
        <div className={`${text} mb-2`}>Contact Us</div>
        <div className={`${text}`}>Our Services</div>
      </div>

      <div >
        <div className="font-playfair font-bold text-base leaing-6 text-white mb-[60px]">
          Newsletter
        </div>

        <div className="flex flex-col lg:flex-row items-start mb-4">
          <input
            value=""
            className="outline-none border-none text-gray-300 pt-5 pb-10 pl-5 pr-32
            placeholder:font-montserrat placeholder:font-normal 
            placeholder:text-sm placeholder:leading-[18px] placeholder:text-[#555555]"
            placeholder="Enter Your Email"
          />
          <Button
            className="border-none outline-none bg-[#219D80] py-[12px] px-[24px]
            font-montserrat font-medium text-base leading-6 text-white"
          >
            Subscribe
          </Button>
        </div>
        <div className="font-montserrat font-normal text-sm 
          leading-[20px] text-[#CCCCCC] mb-20">
          Your email is safe with us.we don't spam.
        </div>

        <div className="font-playfair font-bold text-base leading-6 text-white mb-8">
          Follow Me
        </div>

        <div className="flex flex-row gap-8">
          <img src={Twitter} alt="Twitter" className="w-[55.16px] h-[55.16px]" />
          <img src={Instagram} alt="Instagram" className="w-[55.16px] h-[55.16px]" />
          <img src={pinTerest} alt="pinTerest" className="w-[55.16px] h-[55.16px]" />
          <img src={youTube} alt="youTube" className="w-[55.16px] h-[55.16px]" />
        </div>
      </div>

    </div> 
  )
}