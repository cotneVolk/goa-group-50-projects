
// const Sellers = () => {
//   return (
//     <div className="flex flex-col flex-wrap items-center pb-[200px] bg-white">
//         <h1 className="pt-[80px] text-[36px] font-[700]">Our best sellers</h1>
//         <div className="flex gap-[145px] pt-[75px] flex-wrap justify-center">
//             <img src="image 2.png" alt="" className="w-[339px] h-[452px]" />
//             <img src="image 3.png" alt="" className="w-[339px] h-[452px]" />
//             <img src="image 4.png" alt=""  className="w-[339px] h-[452px]" />
//         </div>
//         <div className="flex gap-[330px] pt-[30px] text-[17px] font-[700] flex-wrap justify-center">
//             <p className="text-center">Thalby Guide to <br /> French Culture and <br /> Heritage <br /><br /> <span className="text-[17px] font-[500]">USD 6.99</span> <br /><br /><span className="font-[700] underline decoration-solid">Add to cart </span></p>
//             <p className="text-center">Thalby Guide to <br /> French People and <br /> Society <br /><br /> <span className="text-[17px] font-[500]">USD 6.99</span> <br /><br /><span className="font-[700] underline decoration-solid">Add to cart </span></p>
//             <p className="text-center">Thalby Guide to <br /> German Culture and <br /> Heritage <br /><br /><span className="text-[17px] font-[500]">USD 6.99</span> <br /><br /> <span className="font-[700] underline decoration-solid">Add to cart </span></p>

//         </div>
//     </div>
//   )
// }

// export default Sellers

const Sellers = () => {
  return (
    <div className="flex flex-col flex-wrap items-center pb-[200px] bg-white">
      <h1 className="pt-[80px] text-[36px] font-[700]">Our best sellers</h1>
      <div className="flex gap-[145px] pt-[75px] flex-wrap justify-center">

        <div className="flex flex-col items-center">
          <img src="image 2.png" alt="" className="w-[339px] h-[452px]" />
          <p className="text-center pt-[30px] text-[17px] font-[700]">
            Thalby Guide to <br /> French Culture and <br /> Heritage <br /><br />
            <span className="text-[17px] font-[500]">USD 6.99</span> <br /><br />
            <span className="font-[700] underline decoration-solid">Add to cart</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="image 3.png" alt="" className="w-[339px] h-[452px]" />
          <p className="text-center pt-[30px] text-[17px] font-[700]">
            Thalby Guide to <br /> French People and <br /> Society <br /><br />
            <span className="text-[17px] font-[500]">USD 6.99</span> <br /><br />
            <span className="font-[700] underline decoration-solid">Add to cart</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="image 4.png" alt="" className="w-[339px] h-[452px]" />
          <p className="text-center pt-[30px] text-[17px] font-[700]">
            Thalby Guide to <br /> German Culture and <br /> Heritage <br /><br />
            <span className="text-[17px] font-[500]">USD 6.99</span> <br /><br />
            <span className="font-[700] underline decoration-solid">Add to cart</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Sellers;