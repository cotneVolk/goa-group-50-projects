const Colors = () => {
  return (
    <div className="flex items-center flex-col pt-[100px] flex-wrap">
      <p className="text-center text-[28px] font-medium mb-[52px]">
        Some of the features that <br /> make Thalby guides unique
      </p>
      <div className="flex flex-col gap-[48px] flex-wrap">
        <div className="flex gap-[160px] flex-wrap justify-center">
          <div className="flex flex-col items-center gap-[12px] w-[120px]">
            <div className="w-[70px] h-[70px] rounded-full bg-[#21F7EC]" />
            <p className="text-center font-[700]">Written by locals</p>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-[120px]">
            <div className="w-[70px] h-[70px] rounded-full bg-[#33D3BC]" />
            <p className="text-center font-[700]">Packed with insight</p>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-[120px]">
            <div className="w-[70px] h-[70px] rounded-full bg-[#18A5C6]" />
            <p className="text-center font-[700]">Interviews with diverse voices</p>
          </div>
        </div>
        <div className="flex gap-[160px] flex-wrap justify-center">
          <div className="flex flex-col items-center gap-[12px] w-[120px]">
            <div className="w-[70px] h-[70px] rounded-full bg-[#D38F62]" />
            <p className="text-center font-[700]">Key facts and etiquette tips</p>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-[120px]">
            <div className="w-[70px] h-[70px] rounded-full bg-[#F94C43]" />
            <p className="text-center font-[700]">A concise 1-hour read</p>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-[120px]">
            <div className="w-[70px] h-[70px] rounded-full bg-[#D399FF]" />
            <p className="text-center font-[700]">Instant digital access</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;