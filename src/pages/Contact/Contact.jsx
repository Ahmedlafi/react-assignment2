import React, { useState } from "react";
import Star from "../../components/Star/Star";

const Contact = () => {
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-5 space-y-3">
      <h1 className="uppercase text-[#2c3e50] text-center text-4xl">contact section</h1>
      <div className="flex justify-center">
        <Star bgColor={"[#2C3E50]"} color={"[#2C3E50]"} />
      </div>

      <div className="container mx-auto py-5 ">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <form >
              {/* Name */}
              <div className="relative mb-8">
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  id="fullName"
                  value={inputForm.name}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Your Full Name"
                />
                <label
                  htmlFor="fullName"
                  className={`absolute left-1 transition-all duration-500 ${
                    inputForm.name.length > 0
                      ? "top-[-20px] text-[#1abc9c] opacity-100"
                      : "top-2 text-transparent opacity-0"
                  }`}
                >
                  User Name
                </label>
              </div>

              {/* Email */}
              <div className="relative mb-8">
                <input
                  type="text"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  value={inputForm.email}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-1 transition-all duration-500 ${
                    inputForm.email.length > 0
                      ? "top-[-20px] text-[#1abc9c] opacity-100"
                      : "top-2 text-transparent opacity-0"
                  }`}
                >
                  Email Address
                </label>
              </div>

              {/* Age */}
              <div className="relative mb-8">
                <input
                  type="number"
                  onChange={handleChange}
                  name="age"
                  id="age"
                  value={inputForm.age}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Your age"
                />
                <label
                  htmlFor="age"
                  className={`absolute left-1 transition-all duration-500 ${
                    inputForm.age.length > 0
                      ? "top-[-20px] text-[#1abc9c] opacity-100"
                      : "top-2 text-transparent opacity-0"
                  }`}
                >
                  User Age
                </label>
              </div>

              {/* Password */}
              <div className="relative mb-8">
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  id="password"
                  value={inputForm.password}
                  className="w-full p-2 border-b border-gray-300 outline-none"
                  placeholder="Please add your password"
                />
                <label
                  htmlFor="password"
                  className={`absolute left-1 transition-all duration-500 ${
                    inputForm.password.length > 0
                      ? "top-[-20px] text-[#1abc9c] opacity-100"
                      : "top-2 text-transparent opacity-0"
                  }`}
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="rounded-md p-2 bg-[#1abc9c] text-white border-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
