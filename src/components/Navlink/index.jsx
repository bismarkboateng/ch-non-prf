import { DownArrow} from "../../assets"

export default function index(props) {
  return (
    <ul className="hidden mr-auto md:flex md:flex-row 
        font-medium text-base
        items-center lg:gap-32 md:gap-20 font-montserrat"
    >
        <li className="underline leading-[27px] text-gray-900 cursor-pointer">
            Home
        </li>

        <li className="leading-[27px] text-gray-900 cursor-pointer"
            onClick={props.onGallery}
        >
            Gallery
        </li>

        <li className="flex flex-row items-center gap-3 
            leading-[27px] text-gray-900 cursor-pointer"
            onClick={props.onAbout}
        >
            About us
            <span>
                <img src={DownArrow} alt="arrow" className="w-[19.15px] h-[10.44px]"/>
            </span>
        </li>

        <li className="flex flex-row items-center gap-3 
            leading-[27px] text-gray-900 cursor-pointer"
        >
            How we help
            <span>
                <img src={DownArrow} alt="arrow" className="w-[19.15px] h-[10.44px]"/>
            </span>
        </li>
    </ul>
  )
}