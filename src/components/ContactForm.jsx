import React, { useState } from "react";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

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

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setFocused({
          name: false,
          email: false,
          message: false,
        }),
          toast.success("Message sent successfully!", {
            autoClose: 5000,
            position: "top-center",
            hideProgressBar: true,
          });
        setIsLoading(false);
      } else {
        toast.error('Something went wrong, Try again latter', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error('Something went wrong, Try again latter', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div className=" mx-5 md:mx-10 p-2">
      <h1 className="text-white text-center text-3xl mt-5 font-bold">
        Lets Talk
      </h1>
      <p className="text-center font-thin text-sm ">
        Send me an email message by simply filling and sending the form below or
        send a direct message via WhatsApp{" "}
        <a href="https://wa.me/+263774266830/">
          <span className="font-mono text-white underline">Here</span>
        </a>{" "}
      </p>
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
          className="bg-gray-800 py-2 px-5 m-1 text-white text-lg rounded-lg"
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
