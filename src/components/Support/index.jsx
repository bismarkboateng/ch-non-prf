import { Button } from ".."

export default function index() {
  return (
    <div className="w-full h-[400px] lg:h-[685px] bg-[#00725E] mt-10 
      text-left pl-10 lg:text-center pt-20 lg:pt-40">
      <div className="font-montserrat font-medium mb-5 lg:mb-10 
      text-[32px] leading-[50px] text-white">
        Give Us A Hand
      </div>
      <h1 className="font-montserrat font-bold text-left text-[20px] mb-10 leading-[30px] 
      lg:font-extrabold lg:mb-20 lg:text-[64px] lg:leading-[80px] 
      lg:text-center uppercase text-white">
        Support us and change the course of a<br /> child's life today!
      </h1>
      <Button
        className="bg-[#CDC5C5] font-montserrat text-[#00725E] text-[20px] py-[10px] px-[20px]
        font-medium lg:text-[40px] leading-[34.5px] rounded-[79px] lg:w-[259px] lg:h-[64px]"
      >
        DONATE
      </Button>
    </div>
  )
}