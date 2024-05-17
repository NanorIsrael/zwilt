import Header from "./components/Header/Header";
import RenderGroove from "./components/section3/GrooveSVG";
import ScreeningProcess from "./components/section4/ScreeningProcess";
import RightArrowSVG from "./components/section5/RightArrowSVG";
import Logo from "./components/Logo";

import "./App.css";
import SearchButton from "./components/section1/SearchButton";
import MarketParent from "./components/section2/MarketParent";
import LinesSVG from "./components/section2/LineSVG";
import Qoute from "./components/section3/QuoteSVG";
import SliderButtons from "./components/section3/SliderButtons";
import Step1 from "./components/section5/Step1";
import Step2 from "./components/section5/Step2";
import Step3 from "./components/section5/Step3";

function App() {
  return (
    <>
      <Header />

      <main className=" text-black h-full w-full flex flex-col my-0 mx-auto justify-center">
        <article id="find-work" className="text-center pt-[9em] pb-[9em]">
          <h1 className="text-3xl md:text-[3.375rem] font-[700] leading-[64px] w-full md:w-[47%] bg-white my-0 mx-auto">
            Finding the right fit &nbsp;
            <img
              src={"/assets/hero/fit.gif"}
              alt="designers illustration"
              width={68}
              height={43}
              className="inline"
            />
            &nbsp;has never been easier.
          </h1>
          <p className="font-[400] text-[0.875rem] md:text-[1.375rem] leading-[32px] pt-[0.188em] md:w-[40.42%] mx-auto text-[#202229]">
            With our rigorous <span className="truncate">pre-vetting</span>{" "}
            process, you'll never have to worry about finding the ideal
            candidate ever again.
          </p>
          <label
            htmlFor="search-hero"
            className="rounded-[15px] flex justify-center md:w-[40%] h-[4.625em] border-[1.5px] border-gray-200 my-[1.875em] mx-auto"
          >
            <input
              id="search-hero"
              type="search"
              placeholder={"Looking for design |"}
              className="w-full h-full py-[1.813em] px-[1.688em] rounded-[15px]"
            />
            <button
              type={"submit"}
              className="bg-[#FFBE2E] rounded-[15px] w-[4.625em] h-full"
            >
              <SearchButton />
            </button>
          </label>
          <section className="bg-[#F8F8F8] flex flex-col justify-center items-center md:w-[63.88%] my-0 mx-auto rounded-[15px]">
            <div className="flex flex-row w-[24.438em] h-[2.75em] my-[0.938em]">
              <button className="w-full h-full bg-[#C7F4C2] rounded-[15px] font-[600] text-[1rem] leading-[23.78px]">
                IT & Development
              </button>
              <button className="w-full h-full bg-[#D2D2D2] rounded-[15px] bg-opacity-[15%] font-[500] text-[1rem] leading-[23.78px]">
                Design and Creative
              </button>
            </div>
            <div className="flex flex-col py-[1.438em] md:flex-row md:px-4 md:justify-between md:w-full">
              <ul className="text-[1rem] capitalize font-normal leading-[16px] text-[#959595] text-start">
                <li className="">python developer</li>
                <li className="pt-[1.125em]">shopify developer</li>
                <li className="text-[#202229] pt-[1.125em]">
                  <strong>
                    <span className="uppercase">mern</span> stack developer
                  </strong>
                </li>
                <li className="pt-[1.125em]">full stack developer</li>
              </ul>
              <ul className="text-[1rem] capitalize font-normal leading-[16px] text-[#959595] text-start py-8  md:py-0">
                <li className="">data scientist</li>
                <li className="pt-[1.125em]">frontend developer</li>
                <li className="pt-[1.125em]">shopify developer</li>
                <li className="pt-[1.125em]">python developer</li>
              </ul>
              <ul className="text-[1rem] capitalize font-normal leading-[16px] text-[#959595] text-start">
                <li className="">shopify developer</li>
                <li className="pt-[1.125em]">python developer</li>
                <li className="pt-[1.125em]">full stack developer</li>
                <li className="text-[#202229] pt-[1.125em]">
                  <strong>explore more</strong>
                </li>
              </ul>
            </div>
          </section>
        </article>
        <article id="find-talent" className="relative w-[100%] bg-[#EDEFFF]">
          <div className="clipper-a"></div>
          <LinesSVG />
          <section className="w-full z-0  ">
            <h2 className="md:w-[67.847%] text-center font-[700] text-3xl md:text-[3.375rem] leading-[4rem] mt-[2.313em] mx-auto">
              Your one-stop marketplace for finding the talent your business
              needs.
            </h2>
            <div className="flex items-center flex-col mx-[70px]">
              <MarketParent
                description={
                  "Find Dev and IT professionals to scale your business."
                }
                image={"/assets/services/design&creative.png"}
                imageAlt={"design and creative"}
              />
              <MarketParent
                description={
                  "Explore Creative individuals with a keen eye for detail."
                }
                image={"/assets/services/it&development.png"}
                imageAlt={"design and creative"}
              />
            </div>
            <div className="flex mt-[0.865em] mx-[70px]">
              <div className=" flex flex-row items-center justify-start w-full ">
                <RightArrowSVG />
                <span className="pl-2">Explore More</span>
              </div>
              <div className="flex items-center flex-row w-full">
                <p>
                  <strong>30 more </strong>to explore
                </p>
              </div>
            </div>
          </section>
        </article>
        <article className="relative text-black h-full colorme">
          <div className="mygrad"></div>
          <Qoute />
          <div
            id="articles"
            className="flex flex-col mx-[70px] py-[15.438em] lg:flex-row  lg:justify-between"
          >
            <section className="colorme h-full lg:w-[34%]">
              <h2 className="lg:text-[3.375rem] text-3xl text-white font-[700] leading-[64px]">
                How it worked for jason &nbsp;
                <img
                  src={"/assets/json/jason.png"}
                  alt={"jason"}
                  className="rounded-full inline"
                  width={57}
                  height={57}
                />
                &nbsp;at&nbsp;
                <span className="pt-4 px-2 inline-block">
                  <RenderGroove width={"192"} height={"51"} fill={"#AF7CFF"} />
                </span>
              </h2>
              <p className="text-white py-[2.25em] lg:text-[1.375rem] text-[0.875rem] leading-[32px] opacity-80">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since.
              </p>

              <div className="flex">
                <SliderButtons />
              </div>
            </section>
            <section className="pt-[4em] lg:pt-0 lg:w-[50%] self-end pr-32">
              <figure className="flex items-center ">
                <div className="flex justify-center items-center bg-[#AF7CFF] w-[99px] h-[99px] rounded-full">
                  <RenderGroove width={"76"} height={"20.87"} fill={"#FFF"} />
                </div>
                <figcaption className="flex flex-col justify-center items-start px-[1em] ">
                  <h3 className="text-white lg:text-[1.375rem]">Jason Makki</h3>
                  <p className=" text-[0.875rem] text-gray-600">
                    Engineer at GROOVE
                  </p>
                  <p className="text-[0.875rem] text-gray-600">San Francisco</p>
                </figcaption>
              </figure>

              <p className="text-white font-[400] pt-[2em] leading-[32px] lg:text-[1.375rem] text-[0.875rem] item-end opacity-80">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </p>
            </section>
          </div>
        </article>

        <article className="relative">
          <div className="mygrad bg-[#202229]"></div>

          <div className="flex flex-col mx-[70px] pt-[15.438em] lg:w-[50%]">
            <section className="">
              <h2 className="lg:text-[3.375rem] text-3xl text-black font-[700] leading-[64px]">
                How we ensure you’re in good hands.
              </h2>
              <p className="font-[400] lg:pt-[2em] leading-[32px] lg:text-[1.375rem] text-[0.875rem]">
                With our comprehensive screening process, we hand-pick highly
                skilled candidates so you can onboard them in a matter of days.
              </p>
            </section>

            <section className="py-8">
              <ScreeningProcess step={1} description={"Resume Screening"} />
              <ScreeningProcess step={2} description={"Video Interview"} />
              <ScreeningProcess step={3} description={"Technical Evaluation"} />
              <ScreeningProcess step={4} description={"Application Review"} />
              <ScreeningProcess step={5} description={"Lets get to work"} />
            </section>
          </div>
        </article>

        <article
          id="about-us"
          className="flex flex-col md:mx-[70px] py-[15.438em]"
        >
          <h2 className="lg:text-[3.375rem] text-3xl text-black font-[700] leading-[64px] text-center">
            Start your journey today.
          </h2>
          <div className="p-8">
            <section className="relative bg-[#EDEFFF] overflow-hidden">
              <div className="mygrad bg-white relative z-100"></div>

              <Step1 />

              <div className="clip-b bg-white"></div>
            </section>
            <section className="relative bg-[#FFF7E1] overflow-hidden">
              <div className="mygrad bg-white relative z-100"></div>

              <Step2 />

              <div className="clip-b bg-white"></div>
            </section>
            <section className="relative bg-[#F3F3F3] overflow-hidden">
              <div className="mygrad bg-white relative z-100"></div>

              <Step3 />

              <div className="clip-b bg-white"></div>
            </section>
          </div>
        </article>

        <article>
          <div>
            <p>Need a job done, and done well? Get started</p>
            <svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="73.7314"
                width="73.7319"
                height="73.7319"
                rx="29.8913"
                transform="rotate(90 73.7314 0)"
                fill="#202229"
              />
              <path
                d="M37.3637 38.22C33.8405 38.22 30.9844 35.2404 30.9844 31.5649C30.9844 27.8893 33.8405 24.9097 37.3637 24.9097C40.8868 24.9097 43.7429 27.8893 43.7429 31.5649C43.7429 35.2404 40.8868 38.22 37.3637 38.22Z"
                fill="#EDEFFF"
              />
              <path
                d="M29.8908 36.5087L44.8365 36.5087L37.3637 49.8191L29.8908 36.5087Z"
                fill="#EDEFFF"
              />
            </svg>
          </div>
          <section>
            <h3>
              <Logo />
            </h3>
            <p>
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
            <button>links and redirects</button>
            <div>
              <button>hire now</button>
              <button>apply now</button>
            </div>
          </section>

          <section>
            <h3>Connecting the right people to the right businesses.</h3>
            <div>
              <div>
                <button>PLATFORM</button>
                <ul>
                  <li>Find Work</li>
                </ul>
              </div>
              <div>
                <button>PLATFORM</button>
                <ul>
                  <li>Find Work</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
