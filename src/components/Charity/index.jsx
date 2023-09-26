import { Mission, Vision, Charity, Line } from "../../assets"
import { Charitycard } from ".."


export default function index() {
  return (
    <div className="mt-5 flex flex-col lg:flex-row lg:mt-20 gap-12">

      <div>

        <div className="flex flex-row items-center gap-3">
          <p className="font-montserrat font-semibold text-lg leading-7 text-[#252A34]">
            Welcome To Charity
          </p>
          <img src={Line} alt="line" />
        </div>

        <div>
          Let Us Come Together<br />
          To Make a Difference
        </div>

        <p className="capitalize">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam<br />
          nonumy tempor invidunt ut labore et dolore magna aliquyam<br />
          erat, sed diam voluptua. At vero eos et accusam et justo.
        </p>

        <div className="flex flex-row gap-5">
          <Charitycard
            title="Our Mission"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            image={Mission}
          />

          <Charitycard
            title="Our Vision"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            image={Vision}
          />
        </div>

      </div>

      <img src={Charity} alt="charity" className="w-[636px] h-[652px]" />
    </div>
  )
}