import React from "react";
import { Instagram, Phone, Mail } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactThree = () => {
  return (
    <div className="bg-[#F5F7FE] py-8 px-4 md:px-12 font-[Quicksand]">
      {/* Desktop / Laptop Version */}
      <div className="hidden md:flex max-w-[1400px] mx-auto w-full flex-row justify-between items-start gap-8 px-6 xl:px-12">
        {/* Left - Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl xl:text-4xl font-bold text-[#4F2270]">
            Contact Us
          </h3>

          <div className="flex md:flex-col lg:flex-row gap-6">
            {[
              { icon: PiPhoneCallFill, label: "Call Us", value: "+1 (888) 202-1350" },
              { icon: IoMail, label: "Reach Us", value: "reachus@Mass Tort Counsel.com" },
            ].map(({ icon: Icon, label, value }, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-[#4F2270] rounded-[13px] flex justify-center items-center text-white w-[clamp(3.5rem,4vw,4.5rem)] h-[clamp(3.5rem,4vw,4.5rem)] hover:scale-[1.05] transition-transform duration-200">
                  <Icon className="w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)]" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#FDBA22]">
                    {label}
                  </p>
                  <p className="text-sm lg:text-base font-semibold text-[#4F2270] break-words">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Social Media */}
        <div className="flex flex-col gap-6 flex-shrink-0">
          <h3 className="text-3xl xl:text-4xl font-bold text-[#4F2270]">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {[FaFacebookF, BsTwitterX, Instagram].map((Icon, index) => (
              <div
                key={index}
                className="w-[clamp(3.5rem,4vw,4.5rem)] h-[clamp(3.5rem,4vw,4.5rem)] bg-[#4F2270] rounded-[13px] flex justify-center items-center text-white hover:scale-[1.05] transition-transform duration-200"
              >
                <Icon className="w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex flex-col gap-6">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[30px] font-bold text-[#4F2270]">Contact Us</h3>

          {[
            { icon: PiPhoneCallFill, label: "Call Us", value: "+1 (888) 202-1350" },
            { icon: IoMail, label: "Reach Us", value: "reachus@Mass Tort Counsel.com" },
          ].map(({ icon: Icon, label, value }, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="bg-[#4F2270] p-2 rounded-md w-[48px] h-[48px] text-white flex items-center justify-center">
                <Icon className="w-[28px] h-[28px]" />
              </div>
              <div>
                <p className="text-[24px] text-[#FDBA22] font-semibold">
                  {label}
                </p>
                <p
                  className={`text-sm lg:text-base xl:text-base font-semibold text-[#4F2270] ${
                    label === "Reach Us" ? "break-all" : ""
                  }`}
                >
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[30px] font-bold text-[#4F2270]">Follow Us</h3>
          <div className="flex gap-4">
            {[FaFacebookF, BsTwitterX, Instagram].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-[#4F2270] p-2 rounded-md text-white w-[48px] h-[48px] flex items-center justify-center"
              >
                <Icon className="w-[28px] h-[28px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactThree;
