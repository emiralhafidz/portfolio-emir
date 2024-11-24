import "./Contact.css";

const Contact = () => {
  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const buttonStyle = {
    textDecoration: "none",
    color: "#000",
  };

  return (
    <>
      <div className="contact">
        <h2>CONTACT</h2>
        <div className="textDesc1">
          <b>
            I'm always open for new and interesting opportunities. Maybe we're a
            match?
          </b>
        </div>
        <div className="textDesc2">
          Let's have a chat and I can show you how I can bring impact to your
          company.
        </div>
        <hr />
        <div className="contactBtn">
          <button onClick={() => copyToClipboard("hafidz853@gmail.com")}>
            Copy email address
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/muhammad-emir-al-hafidz"
              style={buttonStyle}
            >
              Linkedin
            </a>
          </button>
          <button>
            <a href="https://github.com/emiralhafidz" style={buttonStyle}>
              Github
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
