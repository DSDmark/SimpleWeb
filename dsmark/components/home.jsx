import Link from "next/link";
import Typical from "react-typical";

const home = () => {
  return (
    <>
      <section className="home_section container section">
        <div className="effect-wrap">
          <div className="effect squre"></div>
          <div className="effect circle"></div>
          <div className="effect triangle"></div>
          <div className="effect lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="effect dots">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="grid home_data">
          <div className="home_details">
            <h2 className="subtitle">
              <Typical
                steps={["≧◉ᴥ◉≦ 😅 !,", 6000, "hello 😈 !,", 7000]}
                loop={Infinity}
                wrapper="p"
              />
            </h2>
            <h1 className="title">
              i'm [sanskar sahu ||<b>DSmark</b> ]
            </h1>
            <p className="decs">
              <Typical
                steps={[
                  "webDeveloper && designer",
                  7000,
                  "trader && inverster",
                  7000,
                  "gamer && small gamerDeveloper",
                  7000,
                  "coder && techSupporter",
                  7000,
                ]}
                loop={Infinity}
              />
            </p>
            <Link href="#">
              <button className="button">
                <Typical steps={["more about me", 10000]} wrapper="p" />
              </button>
            </Link>
          </div>
          <div className="home_img">
            <img src="image/sanskar.png" alt="dsmark" />
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
