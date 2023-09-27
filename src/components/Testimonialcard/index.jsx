import { quote } from "../../assets"

export default function index({ user }) {
  return (
    <div className="w-[97%] h-[450px] md:w-[390px] md:h-[400px] 
        lg:w-[395.42px] lg:h-[369.38px] rounded-sm
        border border-[#00725E] pt-10 pl-5 pb-5 pr-5
    ">
        <img src={quote} alt="quote" className="mb-6" />
        <div className="font-sora font-normal text-2xl
        leading-[35px] text-[#1D1D1D] mb-5">
            {user.category}
        </div>

        <div className="font-workSans font-normal mb-8
        text-base leading-6 text-[#454545]">
            {user.text}
        </div>

        <div className="flex flex-row gap-10 items-center">
            <img src={user.image} alt="user" />
            <div className="flex flex-col gap-1">
                <div className="font-sora font-normal text-2xl leading-9 text-[#454545]">
                    {user.name}
                </div>
                <div className="font-workSans font-normal text-base leading-6 text-[#454545]">
                    {user.profession}
                </div>
            </div>
        </div>
    </div>
  )
}
