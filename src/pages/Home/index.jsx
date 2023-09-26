import { Navbar, Hero, About, Charity } from "../../components"

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="border border-red-500 mt-20 lg:mt-32 
          w-[95%] mx-auto lg:w-[60%] lg:ml-[20%]"
      >
        <About />
        <Charity />
      </div>

    </>
  )
}
