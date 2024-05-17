import RightArrowSVG from "./RightArrowSVG";
import StepContent from "./StepContent";

function Step2() {
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
          className="rounded-b-[20px] absolute w-[25%] h-[23%] bottom-[-5%] xl:bottom-[4%] right-[4%] xl:right-[4%] xl:w-[15%] lg:h-[25%] md:bottom-[2%] lg:w-[15%] lg:bottom-[0%]"
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
      <StepContent />
    </div>
  );
}
export default Step2;
