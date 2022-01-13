const contact = () => {
  return (
    <>
      <section className="container section contant-section">
        <div className="contant-data grid">
          <div className="text-area">
            <h1 className="title">contact</h1>
            <h2 className="subtitle">get in touch</h2>
          </div>
          <div className="contact-details">
            <span></span>
            <h1 className="title"></h1>
            <h2 className="subtitle"></h2>
          </div>
          <div className="massages-area">
            <form>
              <input type="text" placeholder="Name" name="name" />
              <input type="email" placeholder="You email" name="email" />
              <input type="text" placeholder="Subject" name="subject" />
              <input type="text" placeholder="You Massages" name="massage" />
              <input type="submit" value="send massage" className="button" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
