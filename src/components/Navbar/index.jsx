import { Logo } from "../../assets"
import { Navlink, Button } from ".."


export default function index(props) {
  return (
    <nav className="w-[95%] mx-auto
      flex flex-row mt-5 items-center 
    ">
      <img
        src={Logo}
        alt="logo"
        className="w-[66px] h-[66px] mr-auto"
      />

      <Navlink 
        onGallery={props.onGalleryRef}
        onAbout={props.onAboutRef}
      />
      <Button
        className="bg-[#219D80] font-montserrat 
        font-medium text-base leading-6 text-white
        py-2 px-3 hover:opacity-90
        md:py-3 md:px-6 md:hidden lg:block"
      >
        Contact us
      </Button>
    </nav>
  )
}

