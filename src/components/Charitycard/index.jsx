export default function index({ title, text, image }) {
  return (
   <div className="w-[232px] h-[144px]">
    <div className="flex flex-row gap-3">
        <img src={image} alt="card image" />
        
        <div className="font-bold text-xl leading-7 text-[#219D80]">
            {title}
        </div>
    </div>

    <div className="font-montserrat font-normal text-[14px] leading-6 text-[#555555]">
        {text}
    </div>

   </div>
  )
}
