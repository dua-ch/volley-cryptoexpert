import { useState } from "react";

const AboutAside = () => {
  const [activeTab, setactiveTab] = useState("swap");
  return (
    <div className="lg:sticky lg:top-4 border-2 border-primarygreen flex justify-between items-center py-5 px-4 rounded-2xl sm:space-x-6 mb-4 lg:mb-0 lg:flex-col sm:justify-around sm:py-8  lg:justify-center lg:space-y-6 lg:space-x-0">
      <button
        className={
          activeTab === "swap"
            ? "bg-primary pb-[8px] pt-[12px] px-5 border-4 border-primarygreen rounded-xl flex flex-col items-center justify-center space-y-1"
            : "pb-[8px] pt-[12px] px-5 border-4 border-primarygreen rounded-xl flex flex-col items-center justify-center space-y-1"
        }
        onClick={() => setactiveTab("swap")}
      >
        <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.3571 5.30419C14.0335 4.06486 12.3158 3.38549 10.4936 3.3871C7.21409 3.38998 4.3829 5.63859 3.6012 8.75776C3.5443 8.98483 3.34201 9.14516 3.10792 9.14516H0.68178C0.364325 9.14516 0.123163 8.85696 0.181887 8.54497C1.09797 3.68025 5.3691 0 10.5 0C13.3133 0 15.8682 1.10656 17.7533 2.90803L19.2654 1.39591C19.9055 0.755788 21 1.20915 21 2.11444V7.79032C21 8.35152 20.5451 8.80645 19.9839 8.80645H14.308C13.4027 8.80645 12.9493 7.71195 13.5895 7.07179L15.3571 5.30419ZM1.01613 12.1935H6.69201C7.5973 12.1935 8.05066 13.288 7.41054 13.9282L5.6429 15.6958C6.9665 16.9352 8.68431 17.6146 10.5066 17.6129C13.7844 17.61 16.6167 15.3629 17.3988 12.2423C17.4557 12.0153 17.658 11.8549 17.8921 11.8549H20.3183C20.6357 11.8549 20.8769 12.1431 20.8182 12.4551C19.902 17.3197 15.6309 21 10.5 21C7.68668 21 5.13183 19.8934 3.24674 18.092L1.73462 19.6041C1.0945 20.2442 0 19.7908 0 18.8856V13.2097C0 12.6485 0.454929 12.1935 1.01613 12.1935Z"
            fill={activeTab === "swap" ? "#39F2AE" : "#4F018B"}
          />
        </svg>
        <span
          className={
            activeTab === "swap"
              ? "uppercase font-poppins font-bold text-[10px] text-primarygreen"
              : "uppercase font-poppins font-bold text-[10px] text-primary"
          }
        >
          Swap
        </span>
      </button>
      <button
        className={
          activeTab === "bot"
            ? "bg-primary pb-[8px] pt-[12px] px-5 border-4 border-primarygreen rounded-xl flex flex-col items-center justify-center space-y-1"
            : "pb-[8px] pt-[12px] px-5 border-4 border-primarygreen rounded-xl flex flex-col items-center justify-center space-y-1"
        }
        onClick={() => setactiveTab("bot")}
      >
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 10V15C0 15.6914 0.558594 16.25 1.25 16.25H2.5V8.75H1.25C0.558594 8.75 0 9.30859 0 10ZM18.125 3.75H13.75V1.25C13.75 0.558594 13.1914 0 12.5 0C11.8086 0 11.25 0.558594 11.25 1.25V3.75H6.875C5.14844 3.75 3.75 5.14844 3.75 6.875V17.5C3.75 18.8789 4.87109 20 6.25 20H18.75C20.1289 20 21.25 18.8789 21.25 17.5V6.875C21.25 5.14844 19.8516 3.75 18.125 3.75ZM10 16.25H7.5V15H10V16.25ZM8.75 11.5625C7.88672 11.5625 7.1875 10.8633 7.1875 10C7.1875 9.13672 7.88672 8.4375 8.75 8.4375C9.61328 8.4375 10.3125 9.13672 10.3125 10C10.3125 10.8633 9.61328 11.5625 8.75 11.5625ZM13.75 16.25H11.25V15H13.75V16.25ZM17.5 16.25H15V15H17.5V16.25ZM16.25 11.5625C15.3867 11.5625 14.6875 10.8633 14.6875 10C14.6875 9.13672 15.3867 8.4375 16.25 8.4375C17.1133 8.4375 17.8125 9.13672 17.8125 10C17.8125 10.8633 17.1133 11.5625 16.25 11.5625ZM23.75 8.75H22.5V16.25H23.75C24.4414 16.25 25 15.6914 25 15V10C25 9.30859 24.4414 8.75 23.75 8.75Z"
            fill={activeTab === "bot" ? "#39F2AE" : "#4F018B"}
          />
        </svg>
        <span
          className={
            activeTab === "bot"
              ? "uppercase font-poppins font-bold text-[10px] text-primarygreen"
              : "uppercase font-poppins font-bold text-[10px] text-primary"
          }
        >
          Bot
        </span>
      </button>
      <button
        className={
          activeTab === "info"
            ? "bg-primary pb-[8px] pt-[12px] px-5 border-4 border-primarygreen rounded-xl flex flex-col items-center justify-center space-y-1"
            : "pb-[8px] pt-[12px] px-5 border-4 border-primarygreen rounded-xl flex flex-col items-center justify-center space-y-1"
        }
        onClick={() => setactiveTab("info")}
      >
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.2969 0H21.9219C22.5173 0 23 0.479688 23 1.07143V8.21429C23 8.80603 22.5173 9.28571 21.9219 9.28571H13.2969C12.7014 9.28571 12.2188 8.80603 12.2188 8.21429V1.07143C12.2188 0.479688 12.7014 0 13.2969 0ZM9.70312 0H1.07812C0.482686 0 0 0.479688 0 1.07143V8.21429C0 8.80603 0.482686 9.28571 1.07812 9.28571H9.70312C10.2986 9.28571 10.7812 8.80603 10.7812 8.21429V1.07143C10.7812 0.479688 10.2986 0 9.70312 0ZM0 11.7857V18.9286C0 19.5203 0.482686 20 1.07812 20H9.70312C10.2986 20 10.7812 19.5203 10.7812 18.9286V11.7857C10.7812 11.194 10.2986 10.7143 9.70312 10.7143H1.07812C0.482686 10.7143 0 11.194 0 11.7857ZM13.2969 20H21.9219C22.5173 20 23 19.5203 23 18.9286V11.7857C23 11.194 22.5173 10.7143 21.9219 10.7143H13.2969C12.7014 10.7143 12.2188 11.194 12.2188 11.7857V18.9286C12.2188 19.5203 12.7014 20 13.2969 20Z"
            fill={activeTab === "info" ? "#39F2AE" : "#4F018B"}
          />
        </svg>
        <span
          className={
            activeTab === "info"
              ? "uppercase font-poppins font-bold text-[10px] text-primarygreen"
              : "uppercase font-poppins font-bold text-[10px] text-primary"
          }
        >
          INFO
        </span>
      </button>
    </div>
  );
};

export default AboutAside;
