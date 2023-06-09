import { useState } from "react";
import faqsicon from "../assets/icons/faqs-icon.png";

const Faqs = ({ title, content }) => {
  const [showFaqs, setshowFaqs] = useState(false);

  return (
    <div className="font-poppins">
      <div
        className="flex items-center justify-between bg-[#DAFFF2] px-4 py-3 cursor-pointer"
        onClick={() => setshowFaqs(!showFaqs)}
      >
        <div className="text-[#995BC9]">{title}</div>
        <img
          src={faqsicon}
          alt="faqsicon"
          className={
            showFaqs === true
              ? "rotate-180 transition-all ease-in-out duration-150"
              : "rotate-0 transition-all ease-in-out duration-150"
          }
        />
      </div>
      {showFaqs && <div className="p-4 text-primary">{content}</div>}
    </div>
  );
};

export default Faqs;
