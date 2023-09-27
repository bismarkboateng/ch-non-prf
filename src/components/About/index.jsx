import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { About, Line } from "../../assets"
import { Button } from ".."


export default function index() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })

    return () => {
      AOS.refresh()
    }
  }, [])

  return (
    <div data-aos="fade-left" className="w-full flex flex-col justify-start 
     lg:flex-row items-center gap-12">
        <img
          src={About}
          alt="about"
        />

        <div>
          <div className="flex flex-row items-center gap-3">
            <p className="font-montserrat font-semibold text-lg leading-7 text-[#252A34]">About Us</p>
            <img src={Line} alt="line" />
          </div>

          <div className="font-playfair font-bold text-[25px] 
            leading-7 lg:text-[39px] lg:leading-[50px] mt-5 text-[#252A34]">
            Your Support is Really<br />
            Powerful.
          </div>

          <div className="font-montserrat font-normal text-[15px] leading-6 lg:text-base 
            mt-5 lg:leading-[26px] text-[#444444]">
           The Secret To Happiness Lies In Helping Others. Never<br />
           Underestimate The Difference YOU Can Make In The<br />
           Lives Of The Poor, The Abused And The Helpless.
          </div>

          <Button
            className="bg-[#219D80] py-[12px] px-[24px] font-montserrat font-medium
            text-base leading-6 text-white mt-10"
          >
             Read More
          </Button>
        </div>
    </div>
  )
}