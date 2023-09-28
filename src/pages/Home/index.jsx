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
            w-[95%] mx-auto lg:w-[60%]"
        >
          <About />
          <Charity />
        </div>
      <Gallery />
      <Testimonial />
      <Support />
      <Footer />
    </>
  )
}
