import RightArrowSVG from "./RightArrowSVG";

function StepContent({ Number, title, description, paddingTop }) {
  return (
    <div className={`flex px-4 ${paddingTop} pb-[8em] lg:py-24`}>
      <span className="p-4">
        <Number />
      </span>
      <div className="px-2 lg:w-[52%]">
        <h3 className="text-[1.875rem] lg:text-[2.125rem] font-[600]">
          {title}
        </h3>
        <p className="font-[400] pt-[1em] leading-[32px] lg:text-[1rem] text-[0.875rem] opacity-80">
          {description}
        </p>
        <div className="flex items-center py-2">
          <span className="w-[49.79px]">
            <RightArrowSVG />
          </span>
          <span className="px-2">Join Now</span>
        </div>
      </div>
    </div>
  );
}
export default StepContent;
