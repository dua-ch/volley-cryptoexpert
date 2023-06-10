const Info = ({ question, anwser }) => {
  return (
    <div className="pb-4">
      <h3 className="font-poppins text-2xl font-semibold text-primary">{question}</h3>
      <p className="font-poppins font-medium text-base text-primarygray py-4">{anwser}</p>
    </div>
  );
};

export default Info;
