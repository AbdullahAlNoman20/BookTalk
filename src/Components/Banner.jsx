import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className=" px-3 md:px-20 rounded-3xl">
      <div className="hero min-h-screen bg-base-200 rounded-3xl md:px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className=" md:w-1/2"
            src="https://i.ibb.co/4Mpgh1r/app6ykaagqpc3iciwikz.png"
          />
          <div className="md:ml-20">
            <h1 className="text-5xl font-bold">
              <span className="text-orange-400">BookTalk:</span>
              <span
                className="hidden lg:block"
                style={{ color: "black", fontWeight: "bold" }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Where EveryPage Holds a Conversation Adventure"]}
                  loop={""}
                  cursor
                  cursorStyle="✒️"
                  typeSpeed={20}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="py-6 text-justify">
              Discover BookTalk: Where books come to life through vibrant
              discussions and shared passion. Join a diverse community
              celebrating the magic of storytelling. Explore, connect, and let
              your love for books flourish on BookTalk!
            </p>

            <NavLink to="/listed">
              <button className="btn btn-outline btn-success">
                View This List
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
