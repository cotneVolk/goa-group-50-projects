
const Contact = () => {
  return (
    <div className="pt-[100px] flex flex-col items-center gap-[10px] font-[700] py-[63px]">
        <h1 className="text-[36px]">Keep in touch</h1>
        <p className="text-center text-[17px]">Get our travel advice, global views and travel freebies in your <br /> inbox</p>
        <div className="flex gap-[75px]">
            <input type="text" placeholder="First name" className="border w-[200px] h-[39px] font-[400] text-[14px] pl-[15px]"/>
            <input type="text" placeholder="Last name " className="border w-[200px] h-[39px] font-[400] text-[14px] pl-[15px]"/>
        </div>
        <input type="em" placeholder="Email" className="w-[475px] h-[39px] border pl-[15px] font-[400] text-[14px]"/>
        <button className="h-[40px] w-[150px] text-white bg-black rounded-[25px] mt-[20px]">subscribe</button>
    </div>
  )
}

export default Contact