import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { client } from "../lib/client";

import { useSession, signOut } from "next-auth/react";

export default function ContactUs({ contactformData }) {
  const session = useSession();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormIncomplete = Object.values(formData).some(
      (value) => value === ""
    );
    if (isFormIncomplete) {
      return toast.error("Please fill all details");
    }
    try {
      console.log("Form Data:", formData);
      const response = await fetch("/api/saveFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        throw new Error("Failed to save form data");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
      toast.error("Failed to send messagae. Please try again later.");
    }
  };

  return (
    <>
      <div className="w-[90%] mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <h1 className="text-[2.7vh] md:text-[5vh] font-semibold mr-[1vh] md:mr-[3vh]">Hello {session?.data?.user?.name}</h1>
          <img src={session?.data?.user?.image} alt="" className="w-[5vh] md:w-[10vh] rounded-full" />
        </div>
        <div className="bg-red-500 py-[1vh] px-[2vh] md:py-[1.5vh] md:px-[2.5vh] rounded-xl">
          <button onClick={signOut} className="text-[2.2vh] md:text-[3vh] text-white">Logout</button>
        </div>
      </div>

      <div className="w-[85%] md:w-[50%] mx-auto py-[6vh]">
        <h2 className="text-[4vh] font-semibold text-center">Please Fill the Contact Form</h2>
        <Toaster />

        <form onSubmit={handleSubmit}>
          <div className="mt-[6vh] border-2 border-black bg-red-400">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input w-full p-[2vh] focus:outline-none"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="mt-[4vh] border-2 border-black bg-red-400">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="input w-full p-[2vh] focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-[4vh] border-2 border-black bg-red-400">
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="input w-full p-[2vh] focus:outline-none"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="mt-[4vh] border-2 border-black bg-red-400">
            <input
              type="text"
              placeholder="Enter Message"
              className="input w-full p-[2vh] focus:outline-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="mt-[4vh] bg-black text-white p-[1.5vh] px-[3vh] text-[2.5vh] font-semibold">
            <button type="submit">Send Message</button>
          </div>
        </form>

        {/* <h2 className="my-[5vh] text-[3.5vh]">Data from Sanity:</h2>
        <ul>
          {contactformData.map((message) => (
            <li key={message._id} className="my-[4vh]">
              <p className="text-[3.2vh] font-medium">
                Name: {message.fullName}
              </p>
              <p className="text-[2.7vh] font-normal">Email: {message.email}</p>
              <p className="text-[2.7vh] font-normal">
                Phone Number: {message.phoneNumber}
              </p>
              <p className="text-[2.7vh] font-normal">
                Message: {message.message}
              </p>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
