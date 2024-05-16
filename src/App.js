import Header from "./components/Header/Header";
import RenderGroove from "./components/section3/GrooveSVG";
import ScreeningProcess from "./components/section4/ScreeningProcess";
import RightArrowSVG from "./components/page5/RightArrowSVG";
import Logo from "./components/Logo";

import "./App.css";
import SearchButton from "./components/section1/SearchButton";
import MarketParent from "./components/section2/MarketParent";
import LinesSVG from "./components/section2/LineSVG";

function App() {
  return (
    <>
      <Header />
  

      <main className=" text-black h-full w-full flex flex-col my-0 mx-auto justify-center">
        <article className="text-center pt-[9em]">
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
            With our rigorous <span className="truncate">pre-vetting</span> process, you'll never have to worry
            about finding the ideal candidate ever again.
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
              <SearchButton/>
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
        <article className="relative w-[100%]">
          <LinesSVG/>
          <div className="w-full h-[40px] clipper-a z-10 bg-white"></div>
          <section className="w-full z-0 overflow-hidden gradient-a">
            <h2 className="md:w-[67.847%] text-center font-[700] text-3xl md:text-[3.375rem] leading-[4rem] mt-[8.313em] mx-auto">
              Your one-stop marketplace for finding the talent your business
              needs.
            </h2>
            <div className="flex items-center flex-col mx-[70px]">
              <MarketParent 
              description={"Find Dev and IT professionals to scale your business."}
              image={"/assets/services/design&creative.png"}
              imageAlt={"design and creative"}
              />
              <MarketParent 
              description={"Explore Creative individuals with a keen eye for detail."}
              image={"/assets/services/it&development.png"}
              imageAlt={"design and creative"}
              />
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
