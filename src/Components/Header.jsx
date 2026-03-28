
const Header = () => {
  return (
    <header className="flex flex-row items-center bg-[#FFFFFF] h-[56px] justify-around font-[700]">
        <ul className="flex flex-row gap-[30px] text-[#1C1B1B]">
            <li>Shop</li>
            <li>Collections</li>
            <li>Try a Free Guide</li>
            <li>Stories</li>
        </ul>
        <img src="public/thalby gif.gif" alt="" className="w-[80px] h-[25px]"/>

        <div className="flex flex-row gap-[15px]">
            <img src="public/Frame.png" alt="" className="h-[20px] mt-[13px] scale-[1.2]"/>
            <img src="public/Frame (1).png" alt="" />
            <img src="public/Frame (2).png" alat="" />
        </div>
    </header>
  )
}

export default Header