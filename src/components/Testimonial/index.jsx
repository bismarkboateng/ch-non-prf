import { testArrow } from "../../assets"
import { userData } from "./Data"
import { Testimonialcard } from ".."


export default function index() {
  return (
    <div className="mt-20 lg:mt-32 w-[80%] mx-auto lg:w-[67%]
      ml-[20px] md:ml-20 lg:ml-[20%]"
    >
      <div>
        <p className="font-sora font-normal text-2xl  lg:ml-0
          leading-9 text-[#00725E]">
          Testimonial
        </p>

        <div className="flex flex-row justify-between mb-5">
          <h1 className="font-sora font-semibold text-[30px] leading-8 lg:text-5xl lg:ml-0 
           lg:leading-[60.48px] text-[#000504]">
            What People Say About<br />
            Us
          </h1>
          <img src={testArrow} alt="arrow" className="hidden lg:block lg:w-[66.55px] lg:h-[61.18px]" />
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:ml-0 lg:flex-row lg:gap-12">
        { userData.map((user) => (<Testimonialcard key={user.id} user={user}/>))}
      </div>

    </div>
  )
}