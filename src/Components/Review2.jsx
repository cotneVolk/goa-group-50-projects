const Review1 = () => {
  return (
    <div className="py-[63px] bg-[#CCCCCC99] flex items-center justify-center gap-[90px] flex-wrap max-[1400px]:flex-col-reverse">
        <div className="h-[525px] flex gap-[30px] flex-col">
            <h2 className=" font-[700] text-[36px] pt-[60px] max-[1400px]:text-center">Culture and Heritage</h2>
            <p className="text-[32px] text-right max-[1400px]:text-center">As well as covering heritage <br /> and tradition, our guides to <br /> culture introduce you to the <br /> designers, artists and chefs <br /> creating at the forefront of <br /> today's culture.</p>
            <p className="font-[700] underline decoration-solid text-[17px] pl-[220px] max-[1400px]:text-center max-[1400px]:pl-[0px]">Shop Culture Guides</p>
        </div>
        <img src="/public/weekend.png" alt="" className="w-[385px] h-[525px]"/>
    </div>
  )
}

export default Review1 