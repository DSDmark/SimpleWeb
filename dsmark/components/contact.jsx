import { FaPhoneAlt, FaSearchLocation, FaGoogle } from "react-icons/fa";

const data = [
  {
    contact: [
      {
        title: "phone",
        subtitle: "10101010111",
        icons: FaPhoneAlt,
      },
      {
        title: "location",
        subtitle: "india(m,p)",
        icons: FaSearchLocation,
      },
      {
        title: "email",
        subtitle: "sahup3296@gmail.com",
        icons: FaGoogle,
      },
    ],
  },
];

const contact = () => {
  return (
    <>
      <div className="contanier grid section contact-section">
        {data.map((e) => {
          return (
            <>
              <div className="text-area">
                <h1 className="title">contact</h1>
                <h2 className="subtitle">get in touch ಠ_ಠ</h2>
              </div>
              <div className="detail-area">
                {e.contact.map((e, i) => {
                  return (
                    <div key={i} className="outer-shadow">
                      <span>
                        <e.icons />
                      </span>
                      <h1 className="title">{e.title}</h1>
                      <h2 className="subtitle">{e.subtitle}</h2>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
        <form className="massage-area">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="mail" name="email" placeholder="You Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <input type="text" name="massages" placeholder="Your Massages" />
          <input type="submit" value="send massage" className="button" />
        </form>
      </div>
    </>
  );
};

export default contact;
