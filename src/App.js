import Header from "./components/Header/Header";
import Marketplace from "./components/section2/Marketplace";
import RenderGroove from "./components/page3/GrooveSVG";
import ScreeningProcess from "./components/page4/ScreeningProcess";
import RightArrowSVG from "./components/page5/RightArrowSVG";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  // pl-[18.25em]
  return (
    <>
      {/* <Header /> */}
      <header className="container-bg text-white bg-[#525AA0] rounded-[15px]">
      <section className="flex flex-col items-center justify-around md:justify-between md:bg-black lg:flex-row lg:bg-red-500">
        <div className="cursor-pointer lg:pl-[4.865em]">
          <Logo />
        </div>
        <nav className="flex w-[33%] items-center font-[500] cursor-pointer">
          <ul className=" capitalize flex flex-row justify-between text-[0.875rem] w-full">
            <li className="py-[1.375em]">find work</li>
            <li className="py-[1.375em]">find talent</li>
            <li className="py-[1.375em]">articles</li>
            <li className="py-[1.375em]">about us</li>
            <li className="py-[1.375em]">contact us</li>
          </ul>
        </nav>
        {/* pl-[15.875em] */}
        <div className="flex h-[100%] w-[13%] justify-around font-[500] text-[0.875rem]">
          <button className="capitalize">login</button>
          <button className="bg-white rounded-[16px] text-black h-full capitalize py-2 px-4">join now</button>
        </div>
      </section>
    </header>
      <main className=" text-black h-full flex flex-col w-[100%] my-0 mx-auto justify-center">
        <article className="text-center pt-[9em]">
          <h1 className="text-[3.375rem] font-[700] leadingd-[64px] w-[47%] bg-white my-0 mx-auto">
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
          <p className="font-[400] text-[1.375rem] leading-[32px] pt-[0.188em] w-[40.42%] mx-auto text-[#202229]">
            With our rigorous pre-vetting process, you'll never have to worry
            about finding the ideal candidate ever again.
          </p>
          <label
            htmlFor="search-hero"
            className="rounded-[15px] flex justify-center w-[40%] h-[4.625em] border-[1.5px] border-gray-200 my-[1.875em] mx-auto"
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
              <svg
                className={"my-0 m-auto"}
                width="25"
                height="15"
                viewBox="0 0 25 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
                  fill="#202229"
                />
                <path
                  d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
                  fill="#202229"
                />
              </svg>
            </button>
          </label>
          <section className="bg-[#F8F8F8] flex flex-col justify-center items-center w-[63.88%] my-0 mx-auto rounded-[15px]">
            <div className="flex flex-row w-[24.438em] h-[2.75em] my-[0.938em]">
              <button className="w-full h-full bg-[#C7F4C2] rounded-[15px] font-[600] text-[1rem] leading-[23.78px]">
                IT & Development
              </button>
              <button className="w-full h-full bg-[#D2D2D2] rounded-[15px] bg-opacity-[15%] font-[500] text-[1rem] leading-[23.78px]">
                Design and Creative
              </button>
            </div>
            <div className="flex py-[1.438em]">
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
              <ul className="text-[1rem] capitalize font-normal leading-[16px] text-[#959595] text-start px-[10.438em]">
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
        <article className="relative w-[100%]">
          <svg
            className={
              "bg-white absolute top-[0] left-0 w-full rotate-[0deg] z-100 mt-[78px]"
            }
            width="w-full"
            height="133"
            viewBox="0 0 1440 133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1459.75 13.9955L-8.74981 66.4955L-9.25 52.5044L1459.25 0.00439453L1459.75 13.9955ZM1461.2 30.4964L-7.3034 82.9964L-7.69641 72.0034L1460.8 19.5034L1461.2 30.4964ZM-6.85699 99.4974L1461.64 46.9974L1461.36 39.0025L-7.14282 91.5025L-6.85699 99.4974ZM1461.59 63.4983L-6.91058 115.998L-7.08922 111.002L1461.41 58.5015L1461.59 63.4983ZM-6.94631 132.999L1461.55 80.499L1461.45 77.5009L-7.0535 130.001L-6.94631 132.999Z"
              fill="url(#paint0_diamond_1_703)"
            />
            <defs>
              <radialGradient
                id="paint0_diamond_1_703"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(754 133) rotate(176.812) scale(773.197 8551.4)"
              >
                <stop stop-color="#525AA0" />
                <stop offset="1" stop-color="#A285D0" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <div className="w-full h-[40px] clipper-a z-10 bg-white"></div>
          <section className="w-full z-0 overflow-hidden gradient-a">
            <h2 className="w-[67.847%] text-center font-[700] text-[3.375rem] leading-[64px] mt-[8.313em] mx-auto pt-4">
              Your one-stop marketplace for finding the talent your business
              needs.
            </h2>
            <div className="flex justify-center w-[100%]">
              <section className="flex flex-col">
                <Marketplace />
                <Marketplace />
              </section>

              <section className="pt-[3.405em]">
                <figure className="pt-[2.25em]">
                  <img
                    src={"/assets/services/it&development.png"}
                    alt="it and development"
                  />
                </figure>
                <figure className="py-[2.25em]">
                  <img
                    src={"/assets/services/design&creative.png"}
                    alt="design and creative"
                    className=""
                  />
                </figure>
              </section>
            </div>
          </section>
        </article>
        {/* py-[80em] */}
        <article className=" text-black">
          <section>
            <h2>
              how it worked for jason &nbsp;
              <img
                src={"/assets/json/jason.png"}
                alt={"jason"}
                className="rounded-full"
              />
              &nbsp;at
              <span>
                <RenderGroove />
              </span>
            </h2>
            <p>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>

            <div>
              <span>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="49.793"
                    height="49.793"
                    rx="20.1863"
                    transform="matrix(-1 0 0 1 49.793 0)"
                    fill="white"
                  />
                  <path
                    d="M23.9819 24.5601C23.9819 26.9393 25.9941 28.8681 28.4763 28.8681C30.9585 28.8681 32.9707 26.9393 32.9707 24.5601C32.9707 22.1808 30.9585 20.252 28.4763 20.252C25.9941 20.252 23.9819 22.1808 23.9819 24.5601Z"
                    fill="#50589F"
                  />
                  <path
                    d="M25.1376 29.6067L25.1376 19.5135L16.1488 24.5601L25.1376 29.6067Z"
                    fill="#50589F"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.792969"
                    width="49.793"
                    height="49.793"
                    rx="20.1863"
                    fill="white"
                  />
                  <path
                    d="M26.6041 24.5601C26.6041 26.9393 24.5918 28.8681 22.1096 28.8681C19.6275 28.8681 17.6152 26.9393 17.6152 24.5601C17.6152 22.1808 19.6275 20.252 22.1096 20.252C24.5918 20.252 26.6041 22.1808 26.6041 24.5601Z"
                    fill="#50589F"
                  />
                  <path
                    d="M25.4484 29.6067L25.4484 19.5135L34.4372 24.5601L25.4484 29.6067Z"
                    fill="#50589F"
                  />
                </svg>
              </span>
            </div>
          </section>
          <section>
            <figure className="">
              <span>
                <RenderGroove />
              </span>
              <figcaption>
                <h3>Jason Makki</h3>
                <p>Engineer at GROOVE</p>
                <p>San Francisco</p>
              </figcaption>
              <p>
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </p>
            </figure>
          </section>
        </article>

        <article>
          <section>
            <h2>How we ensure you’re in good hands.</h2>
            <p>
              With our comprehensive screening process, we hand-pick highly
              skilled candidates so you can onboard them in a matter of days.
            </p>
          </section>
          <section>
            <ScreeningProcess />
            <ScreeningProcess />
            <ScreeningProcess />
            <ScreeningProcess />
          </section>
        </article>

        <article>
          <h2>Start your journey today.</h2>
          <div>
            <section>
              <h3>Find your next star performer.</h3>
              <p>
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div>
                <span>
                  <RightArrowSVG />
                </span>
                <span>Join Now</span>
              </div>
            </section>
            <section></section>
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
