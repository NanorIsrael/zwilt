import StepContent from "./StepContent";

function Step1() {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
      <section className="lg:w-[50%]">
        <figure
          className="rounded-b-[20px] bg-white absolute top-[5%] lg:top-[2%] right-[50%] lg:right-[25%] w-[25%] h-[28%] md:h-[32%] lg:w-[14%] lg:*:h-[48%]"
          style={{
            clipPath: "polygon(0% 9%, 100% 2%, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={"/assets/candidates/person1.png"}
            alt={"jason"}
            className="rounded-l-[21.15px] bg-[#FFDACE] w-full"
          />
          <figcaption className="px-4 pt-2">
            <p className="text-[0.825rem] lg:text-[1rem]">Ruby Developer</p>
            <p className="pt-2 text-[0.625rem] lg:text-[0.825rem]">
              Redwood City, California 7 years experience
            </p>
          </figcaption>
        </figure>

        <figure
          className="bg-white rounded-b-[20px] absolute w-[25%] h-[23%] top-[0%] lg:top-[-1%] right-[4%] lg:right-[4%] lg:w-[15%] lg:h-[35%] md:h-[25%]"
          style={{
            clipPath: "polygon(0% 9%, 100% 3%, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={"/assets/candidates/person2.png"}
            alt={"jason"}
            className="rounded-l-[21.15px] bg-[#C8EFC4] w-full "
            // width={57}
            // height={57}
          />
          <figcaption className="px-4 pt-2">
            <p className="text-[0.825rem] lg:text-[1rem]">
              System ops engineer
            </p>
            <p className="pt-2 text-[0.625rem] lg:text-[.825rem]">
              Abu Dhabi, UAE 5 years experience
            </p>
          </figcaption>
        </figure>
        <figure
          className="bg-white rounded-t-[20px] absolute w-[25%] h-[23%] bottom-[-12%] xl:bottom-[0%] right-[50%] lg:right-[24%] lg:w-[15%] lg:h-[25%] md:bottom-[-6%] lg:bottom-[-3%]"
          style={{
            clipPath: "polygon(0% 9%, 100% 3%, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={"/assets/candidates/person4.png"}
            alt={"jason"}
            className="rounded-t-[21.15px] bg-[#D8D2FF] w-full "
          />
        </figure>
        <figure
          className="rounded-t-[20px] absolute w-[25%] h-[23%] bottom-[-5%] xl:bottom-[4%] right-[4%] xl:right-[4%] xl:w-[15%] lg:h-[25%] md:bottom-[2%] lg:w-[15%] lg:bottom-[0%]"
          style={{
            clipPath: "polygon(0% 9%, 100% 3%, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={"/assets/candidates/person5.png"}
            alt={"jason"}
            className="rounded-t-[21.15px] bg-[#FDDD8B] w-full "
          />
        </figure>
      </section>
      <StepContent
      	  	paddingTop={"pt-[11em]"}
        title={"Find your next star performer."}
        description={"Explore the vast Zwilt marketplace to find the candidate that meets your needs."}
        Number={() => (
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
        )}
      />
    </div>
  );
}
export default Step1;
