import RightArrowSVG from "./RightArrowSVG";

function StepContent() {
  return (
    <div className="flex px-4 pt-[11em] pb-[8em] lg:py-24">
      <span className="p-4">
        <svg
          width="52"
          height="83"
          viewBox="0 0 52 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M34.1958 67.9208V70.2523H36.5273H49.5123V80.6685H2.94865V70.2523H15.805H18.1364V67.9208V22.4255V20.094H15.805H2.94865V10.451H6.53785C11.5489 10.451 15.2988 9.88891 17.831 8.35912C19.1674 7.55179 20.1598 6.47969 20.7902 5.14779C21.215 4.25028 21.4451 3.29917 21.5466 2.33146H34.1958V67.9208Z"
            fill="url(#paint0_linear_1_384)"
            stroke="#EDEFFF"
            stroke-width="4.66292"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_384"
              x1="24"
              y1="5.5"
              x2="24"
              y2="78.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A387D1" />
              <stop offset="1" stop-color="#D1C4E2" stop-opacity="0.46" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <div className="px-2 lg:w-[52%]">
        <h3 className="text-[1.875rem] lg:text-[2.125rem] font-[600]">
          Find your next star performer.
        </h3>
        <p className="font-[400] pt-[1em] leading-[32px] lg:text-[1rem] text-[0.875rem] opacity-80">
          Explore the vast Zwilt marketplace to find the candidate that meets
          your needs.
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
