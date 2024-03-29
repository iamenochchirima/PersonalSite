import React, { useState } from "react";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFocused = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const templateParams = {
      message: message,
      from_name: name,
      from_email: email,
    };

    emailjs
      .send(
        "service_515ffkj",
        "template_k9ogr5i",
        templateParams,
        "ni25KjXycoHjn-cD1"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          console.log("message was sent");
          toast.success("Message sent successfully!", {
            autoClose: 5000,
            position: "top-center",
            hideProgressBar: true,
          });
          setIsLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setFocused({
            name: false,
            email: false,
            message: false,
          });
        },
        (error) => {
          console.log(error);
          toast.error("Message failed to send!", {
            autoClose: 5000,
            position: "top-center",
            hideProgressBar: true,
          });
          setIsLoading(false);
        }
      );

  };

  return (
    <div className=" mx-5 md:mx-10 p-2">
      <div className="flex justify-center mb-5">
        <div className="md:w-3/4">
          <h1 className="text-white text-center text-3xl mt-5 font-bold">
            Let&apos;s Talk
          </h1>
          <p className="md:text-center font-thin text-sm md:text-base">
            I&apos;m thrilled that you&apos;re checking out my work! If there&apos;s something
            on my site that&apos;s piqued your interest, If you&apos;ve got an offer that
            would make my day, or if you just want to say hi, please don&apos;t
            hesitate to reach out. Just drop me a message using the form below. Let&apos;s make some great digital magic
            together!
          </p>
        </div>
      </div>
      <form className="text-white gap-y-4" onSubmit={handleSubmit}>
        <div className="form-div">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="contact-input"
            value={name}
            focused={focused.name.toString()}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => handleFocused("name")}
            placeholder="Enter your name"
            required
          />
          <span className="error-message">Name is required</span>
        </div>
        <div className="form-div">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="contact-input"
            value={email}
            focused={focused.email.toString()}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() => handleFocused("email")}
            placeholder="Enter your Email address"
            required
          />
          <span className="error-message">Email invalid</span>
        </div>
        <div className="form-div">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="contact-input"
            value={message}
            focused={focused.message.toString()}
            onChange={(event) => setMessage(event.target.value)}
            onBlur={() => handleFocused("message")}
            placeholder="Type the message"
            required
          />
          <span className="error-message">This field is required</span>
        </div>
        <button
          className="bg-gray-800 py-2 px-5 mx-2 text-white text-lg rounded-lg"
          type="submit"
        >
          {isLoading ? (
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <span>Send</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
