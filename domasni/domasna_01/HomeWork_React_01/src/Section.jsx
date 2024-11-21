import profileImg from "./assets/martin_profile1.jpg";

const data = {
  firstName: "Martin",
  lastName: "Petroski",
  age: 35,
  contact: {
    email: "martinpetroski@gmail.com",
    mobile: "0786314202",
  },
};

const Section = () => {
  return (
    <div className="wrapper clearfix">
      <div className="left">
        <div className="name-hero">
          <div className="me-img"></div>

          <div className="name-text">
            <div className="img">
              <img
                id="img"
                src={profileImg}
                alt=""
                width="300px"
                height="300px"
              />
            </div>

            <h1>
              {data.firstName} <em>{data.lastName} </em>
            </h1>
            <h1 id="contact-text">Contact</h1>

            <p>✉️ {data.contact.email}</p>
            <p>📞 {data.contact.mobile}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="inner">
          <section>
            <h1>PROFILE</h1>
            <p className="right-text">
              Passionate service support professional at Dynavox Electronics,
              residing in Switzerland for the past five years. Originally from
              Macedonia, I am currently expanding my skills in programming to
              pursue a future career as a programmer.
            </p>
          </section>
          <section>
            <h1>Employment</h1>
            <p className="right-text">
              <a href="https://www.dynavox.ch/de/index.php">
                Dinavox Electronics SA, 3186 Düdingen
              </a>
            </p>
          </section>
          <section>
            <h1>Technical Skills</h1>
            <ul className="skill-set">
              <li>
                <a href="https://de.wikipedia.org/wiki/HTML5">HTML5</a>
              </li>
              <li>
                <a href="https://de.wikipedia.org/wiki/CSS3">CSS3</a>
              </li>
              <li>
                <a href="https://de.wikipedia.org/wiki/JavaScript">
                  JavaScript
                </a>
              </li>
              <li>
                <a href="https://de.wikipedia.org/wiki/Node.js">NodeJS</a>
              </li>
              <li>
                <a href="https://de.wikipedia.org/wiki/React.js">ReactJS</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Section;
