"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import trust_logo from "@public/images/trust-logo.png";
import Link from "next/link";
import TextField from "@components/common/TextField";

const Signup = () => {
  const [referralData, setReferralData] = useState({
    firstName: "",
    lastName: "",
    ssn: "",
    phone: "",
    email: "",
    address: "",
    idFront: "",
    idBack: "",
    referralId: "",
  });

  const handleTextChange = (e) => {
    setReferralData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-[800px] mx-auto py-[50px] md:py-[80px]">
      <Link
        href="/"
        className="w-max flex gap-2 items-center text-[20px] font-bold"
      >
        <BsArrowLeft /> <span>Go back</span>
      </Link>
      <div className="relative w-[80px] h-[80px] mx-auto mb-6">
        <Image
          src={trust_logo}
          alt="Trust logo"
          fill
          className="inline-block rounded-full"
        />
      </div>
      <h1 className="text-[26px] font-bold leading-[33px] text-center mb-6">
        Trust App Referral
      </h1>
      <form className="md:text-[18px]">
        <TextField
          id="first-name"
          type="text"
          title="1. First Name"
          value={referralData.firstName}
          name="firstName"
          handleTextFieldChange={handleTextChange}
          required={true}
        />
        <TextField
          id="last-name"
          type="text"
          title="2. Last Name"
          value={referralData.lastName}
          name="lastName"
          handleTextFieldChange={handleTextChange}
          required={true}
        />
        <TextField
          id="ssn"
          type="number"
          title="3. SSN"
          value={referralData.ssn}
          name="ssn"
          handleTextFieldChange={handleTextChange}
          required={true}
        />
        <TextField
          id="phone"
          type="tel"
          title="4. Phone Number"
          value={referralData.phone}
          name="phone"
          handleTextFieldChange={handleTextChange}
          required={true}
        />
        <TextField
          id="email"
          type="email"
          title="5. Email Address"
          value={referralData.email}
          name="email"
          handleTextFieldChange={handleTextChange}
          required={true}
        />
        <TextField
          id="address"
          type="text"
          title="6. Address"
          value={referralData.address}
          name="address"
          handleTextFieldChange={handleTextChange}
          required={true}
        />

        <TextField
          id="referral-id"
          type="tel"
          title="9. Referral ID"
          value={referralData.referralId}
          name="referralId"
          handleTextFieldChange={handleTextChange}
          required={true}
        />

        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={false}
            className="w-[95px] h-[38px] bg-color-primary text-white rounded mx-auto flex items-center justify-center hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
