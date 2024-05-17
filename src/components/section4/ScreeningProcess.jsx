import { useState } from "react";
import RenderBulletSVG from "./BulletSVG";

function ScreeningProcess({ step, description }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <details
      onClick={() => setIsSelected(!isSelected)}
      className={`rounded-[7px] border border-[1px solid #F0F0F0] my-1 ${isSelected ? "shadow-lg" : ""}`}
    >
      <summary className="flex items-center">
        <span className="p-2">
          <RenderBulletSVG />
        </span>
        <p className="leading-[17.83px]">
          <span className="font-[600] px-2">Step {step}:</span>
          {description}
        </p>
      </summary>
      <p className="text-[0.825rem] lg:text-[1rem] p-[1.25em] opacity-80 leading-[26px]">
        Candidates are assessed through skill based questions in a virtual
        setting. Allowing you to gauge personality and cultural fit.
      </p>
    </details>
  );
}
export default ScreeningProcess;
