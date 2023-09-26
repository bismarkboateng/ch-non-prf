import { Mission, Vision, Charity, Line, progress, fill } from "../../assets"
import { Charitycard } from ".."


export default function index() {
  return (
    <div className="mt-5 flex flex-col-reverse lg:flex-row
    items-center
    lg:mt-32 gap-40"
    >

      <div className="ml-20 lg:ml-0">

        <div className="flex flex-row items-center gap-3 mb-5">
          <p className="font-montserrat font-semibold text-lg leading-7 text-[#252A34]">
            Welcome To Charity
          </p>
          <img src={Line} alt="line" />
        </div>

        <div className="font-playfair font-bold text-[39px] 
          leading-[50px] text-[#252A34] mb-4">
          Let Us Come Together<br />
          To Make A Difference
        </div>

        <p className="capitalize font-montserrat text-justify md:text-left
            font-normal text-base leading-[26px] text-[#444444] mb-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo.
        </p>

        <div className="flex flex-row mb-4 gap-5">
          <Charitycard
            title="Our Mission"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            image={Mission}
          />

          <Charitycard
            title="Our Vission"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            image={Vision}
          />
        </div>

        <div className="flex flex-col w-[481px]">
          <div className="flex flex-row justify-between font-montserrat mb-2">
            <div className="font-semibold text-xl leading-7 text-[#252A34]">
              Donations
            </div>
            <div className="font-bold text-base leading-6">75%</div>
          </div>

          <div className="relative w-[100%]">
            <img src={progress} alt="progress" className="object-cover" />
            <img src={fill} alt="progress" className="absolute top-0 left-0 object-cover" />
          </div>
        </div>

      </div>

      <img src={Charity} alt="charity" className="w-[636px] h-[652px]" />
    </div>
  )
}