
const Footer = () => {
  return (
    <div className="bg-black py-30 flex justify-around">
        <div className="flex flex-col gap-[25px]">
            <img src="/public/Frame (3).png" alt="" className="text-white"/>
            <div className="flex gap-[10px]">
                <img src="/public/Frame-1.png" alt="" className="w-[35px] h-[35px]"/>
                <img src="/public/Instagram.png" alt="" className="w-[35px] h-[35px]"/>
                <img src="/public/Frame-2.png" alt="" className="w-[35px] h-[35px]"/>
            </div>
        </div>

        <div className="flex text-white gap-[50px]">
            <div>
                <h3>ABOUT</h3><br />
                <div className="flex flex-col gap-[15px] text-[14px]">
                    <p>About us</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Write for Us</p>
                </div>
            </div>

            <div>
                <h3>ABOUT</h3><br />
                <div className="flex flex-col gap-[15px] text-[14px]">
                    <p>About us</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Write for Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer