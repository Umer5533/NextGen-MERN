import React from "react";
import "./Contact.css";
import phoneIcon from "../../assets/phoneIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import locationIcon from "../../assets/locationIcon.png";
import msgIcon from "../../assets/msgIcon.png";
import contactBanner from "../../assets/contactbanner.jpg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0cc1a407-b25f-4e0a-8868-d658af18635e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div class="contactbanner relative  bg-cover bg-center h-screen ">
        <div class="absolute inset-0 bg-black z-10 opacity-80">
          <div className="z-20">
            <h2
              className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `}
            >
              NEXT
              <span className="font-medium uppercase text-2xl md:text-3xl">
                Gen
              </span>
            </h2>

            <div className="absolute top-60 left-20  ">
              <h2 className="text-4xl text-white font-extrabold  uppercase">
                The BEST AGENCY FOR YOUR BUSINESS
              </h2>
              <p className="text-5xl text-custom-pink-rgb font-extrabold w-5/12 mt-12 uppercase leading-tight">
               NextGen PROVIDES THE BEST VIDEO EDITING SERVICES
              </p>
            </div>
          </div>
        </div>
      </div>


<div className="mt-28"> 
  <h2 className={`capitalize text-4xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12 text-center mx-auto lg:leading-relaxed`}>
        Contact us
      </h2>

      <div className="container" id="contact">

        <div className="left">
          <h2 className="text-xl font-bold">Contact Information</h2>
          <p>
            Get professional video production services and boost your marketing
            efforts. Book an appointment with our Video Production House today
            and tells your brand’s unique story to your audience. We make
            impactful videos, powerful animation and
          </p>
          <p>
            <img  src={phoneIcon} alt="" /> 03065612226
          </p>
          <p>
            <img src={emailIcon} alt="" /> nextgenmediasolution@gmail.com
          </p>
          <p>
            <img src={locationIcon} alt="" /> Address: Qasim bela, Cantt Multan
          </p>
        </div>
        <div className="right">
          <h2 className="text-xl font-bold">
            Send Us a Message <img src={msgIcon} alt="" />{" "}
          </h2>
          <form onSubmit={onSubmit}>
            <label for="name">Name:</label>
            <input
              className="h-12 p-4 mb-4"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label for="phone">Phone Number:</label>
            <input
              className="h-12 p-4 mb-4"
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />

            <label for="email">Email:</label>
            <input
              className="h-12 p-4 mb-4"
              type="email"
              id="email"
              name="email"
              placeholder="nextgen@gmail.com"
              required
            />

            <label for="message">Message:</label>
            <textarea
              className=" p-4 mb-4"
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>

            <button className="  w-full py-4 bg-fuchsia-400 hover:bg-custom-pink-rgb text-white mx-auto rounded transition duration-700" type="submit">Send Message</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
