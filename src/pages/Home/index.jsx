import 
{ 
  Navbar, Hero, About,
  Charity, Gallery, Testimonial,
  Support, Footer
} from "../../components"

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mt-20 lg:mt-32 
          w-[95%] mx-auto lg:w-[60%] lg:ml-[20%]"
      >
        <About />
        <Charity />
        <Gallery />
      </div>
      <Testimonial />
      <Support />
      <Footer />
    </>
  )
}
