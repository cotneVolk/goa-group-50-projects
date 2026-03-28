const Review1 = ({
  imageSrc = "",
  title = "",
  description = <></>,
  linkText = "",
}) => {
  return (
    <div className="py-[63px] bg-[#CCCCCC4D] flex items-center justify-center gap-[90px] flex-wrap max-[1400px]:text-center">
      <img src={imageSrc} alt="" className="w-[385px] h-[525px]" />
      <div className="h-[525px] flex gap-[30px] flex-col">
        <h2 className="font-[700] text-[36px] pt-[60px]">{title}</h2>
        <p className="text-[32px]">{description}</p>
        <p className="font-[700] underline decoration-solid text-[17px]">{linkText}</p>
      </div>
    </div>
  );
};

export default Review1;