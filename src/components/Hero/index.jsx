import { Hero } from "../../assets"
import { Button } from ".."


export default function index() {
  return (
    <div className="w-full mt-5 relative">
      <img
        src={Hero}
        alt="hero"
        className="w-full h-[300px] object-cover md:h-[723px]"
      />

      <div className="absolute top-[17%] left-[10%] 
        md:top-[27%] md:left-[15%]
        lg:top-[21%] lg:left-[25%] lg:w-[50%] mx-auto text-center"
      >
        <div className="font-montserrat font-semibold text-white text-base md:text-xl leading-7 md:mb-2">
          Give Hope For Homeless
        </div>
        
        <div className="font-playfair mt-2 font-semibold text-[18px] 
          md:text-[40px] md:font-bold lg:text-7xl 
          lg:leading-[90px] text-white mb-1"
        >
          Helping Each Other<br />
          Can Make World Better
        </div>

        <div className="font-montserrat text-[15px] leading-[19px]
          mt-5 mb-3 font-normal md:text-lg md:leading-[30px] text-[#EEEEEE] md:mb-8"
        >
          We Seek Out World Changers And Difference Dakers Around The<br />
          Globe,And Equip Them To Fulfill Their Unique Purpose.
        </div>

        <div className="flex flex-row gap-5 ml-[10%] md:gap-8 md:ml-[20%] lg:ml-[31.5%]">
          <Button
            className="bg-[#219D80] py-[5px] px-[10px] md:py-[16px] md:px-[32px] font-montserrat
            font-medium text-[15px] md:text-base leading-6 text-white"
          >
            Donate Now
          </Button>

          <Button
            className="bg-transparent py-[5px] px-[10px] md:py-[16px] md:px-[32px] 
            font-medium text-[15px] md:text-base leading-6 font-montserrat
            text-white border border-[#219D80]"
          >
            Know About Us
          </Button>
        </div>
      </div>

    </div>
  )
}