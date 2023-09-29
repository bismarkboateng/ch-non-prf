import { useRef} from "react"

import 
{ 
  Navbar, Hero, About,
  Charity, Gallery, Testimonial,
  Support, Footer
} from "../../components"



export default function index() {
  const galleryRef = useRef(null)
  const aboutusRef = useRef(null)

  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  const scrollToAbout = () => {
    aboutusRef.current.scrollIntoView({
      behavior: 'smooth',
    })  
  }

  return (
    <>
      <Navbar 
        onGalleryRef={scrollToGallery}
        onAboutRef={scrollToAbout}
        />
      <Hero />
      
      <div className="mt-20 lg:mt-32 
          w-[95%] mx-auto lg:w-[60%]"
      >
        <div ref={aboutusRef}>
          <About />
        </div>
        <Charity />
      </div>

      <div ref={galleryRef}>
        <Gallery /> 
      </div>

      <Testimonial />
      <Support />
      <Footer />
    </>
  )
}
