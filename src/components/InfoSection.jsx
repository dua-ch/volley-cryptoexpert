import { faqsData } from "../data/FaqsData";
import NFTSwiper from "./NFTSwiper";
import Faqs from "./Faqs";
import AboutBanner from "./AboutBanner";
import AboutAside from "./AboutAside";
import Info from "./Info";
import { infoData } from "../data/InfoData";

const InfoSection = () => {
  return (
    <div className="lg:grid grid-cols-7 gap-6 py-4 items-start">
      <AboutAside />
      <div className="col-span-6">
        <AboutBanner />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-start py-4">
          {/* Swap Section  */}
          <div className="col-span-3">
            <div className="border-2 border-primary p-6 rounded-tl-xl rounded-tr-xl">
              {infoData.map((info) => {
                return <Info key={info.id} question={info.question} anwser={info.answer} />;
              })}
            </div>
          </div>
          {/* End Swap Section  */}

          {/* Faq Section  */}
          <div className="col-span-3 lg:col-span-2 md:col-auto">
            <div className="border-2 border-primary rounded-tr-2xl rounded-tl-2xl p-4 sm:p-6">
              <h3 className="font-poppins font-semibold text-primary  mb-2 ml-4 text-2xl sm:text-4xl">FAQs</h3>
              {faqsData.map((data) => {
                return <Faqs key={data.title} {...data} />;
              })}
            </div>
          </div>
          {/* Faq Section  */}

          {/* Slider Section */}
          <div className="col-span-3 md:col-span-1 lg:col-auto ">
            <div className="text-white rounded-tr-2xl rounded-tl-2xl relative">
              <NFTSwiper />
            </div>
          </div>
          {/* End Slider Section  */}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
