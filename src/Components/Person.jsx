const Person = (
    {
        imageSrc = "/Rectangle.png",
        quote = "I don't like things to be conventional. If it's too nice, I bring disorder.",
        name = "Camille Muller,",
        title = "Landscape Designer, France"
    }
) => {
 
  return (
    <div className="w-[400px] flex flex-col items-center ">
      <div className="flex justify-center">
        <img src={imageSrc} alt="" />
      </div>
 
      <div className="px-8 pt-8 pb-6 flex flex-col items-center gap-[15px] ">
        <p className="text-[24px] font-bold text-center">"{quote}"</p>
 
        <div className="flex flex-col items-center gap-[5px] text-[13px] text-center">
          <span className="text-[19px]">{name}</span>
          <span className="text-[19px]">{title}</span>
        </div>
 
        <a className="font-bold underline mt-1">Discover</a>
      </div>
    </div>
  );
}

export default Person