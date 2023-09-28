import {
  image01, image02, image03,
  image04, image05, image06,
  image07, image08
} from "../../assets"


export default function index() {
  return (
    <div
       className="flex w-[100%] flex-col lg:flex-row  p-5 mt-5"
    >
      <div data-aos="fade" data-aos-delay="500" 
        className="flex flex-row justify-center 
        gap-5 mb-5 lg:flex-col lg:justify-start 
        lg:items-center lg:mb-0">
        <img src={image01} alt="student" className="w-[40%] h-[40%] lg:w-[264px] lg:h-[258px]" /> 
        <img src={image02} alt="student" className="w-[40%] h-[40%] lg:w-[213px] lg:h-[223px] lg:mt-5" /> 
      </div>

      <div data-aos="fade" data-aos-delay="1000"
        className="ml-5 md:ml-44 lg:ml-5">
        <img src={image03} alt="lead" className="mb-5 md:w-[450px] lg:w-[344px] lg:h-[532px]" />
      </div>
      
      <div data-aos="fade" data-aos-delay="1500"
        className="flex flex-col gap-5 lg:gap-0 ml-5 items-center">
        <img src={image04} alt="teacher" className="lg:w-[437px] lg:h-[258px]" />

        <img src={image05} alt="teacher" 
        className=" w-[437px] h-[258px] lg:w-[306px] 
        lg:h-[258px] lg:mt-[30px]"/>
      </div>
      
      <div data-aos="fade" data-aos-delay="2000"
        className="md:ml-52 lg:ml-0">
        <img src={image06} alt="staff" 
        className="w-[344px] mt-5 lg:mt-0 lg:w-[440px] 
        lg:h-[546px] ml-5" />
      </div>
      
      <div data-aos="fade" data-aos-delay="2500"
        className="flex flex-row lg:flex-col mt-5 
        gap-5 lg:gap-0 lg:mt-0 ml-10 md:ml-32 
        items-center lg:justify-end lg:ml-5">

        <img src={image07} alt="student on bed" 
          className="w-[40%] h-[40%] lg:w-[206px] lg:h-[207px]"/>

        <img src={image08} alt="student learning"
          className="w-[40%] h-[40%] lg:w-[277px] 
          lg:h-[258px] lg:mt-[30px]" />

      </div>
    </div>
  )
}