
const Hero = () => {
  return (
    <div className="bg-[#F0EFEB] flex flex-row gap-[50px] flex-wrap max-[500px]:gap-[0] justify-around py-[10px]">
        <div className="pt-[80px] pl-[230px] flex flex-col gap-[15px]">
            <h1 className="text-[60px] font-[600]">Fall deeper in love <br />with <br />humanity.</h1>
            <p className="text-[24px] pt-[10px]">Get to know the world through our concise, <br />informative and inspiring guides.</p>
            <button className="bg-black text-white w-[129px] h-[36px] rounded-[25px]">Shop Now</button>
        </div>
        <img src="public/image 1.png" alt="" className="w-[599px]"/>
    </div>
  )
}

export default Hero