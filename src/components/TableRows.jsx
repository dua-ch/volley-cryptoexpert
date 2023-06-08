import elipsisicon from "../assets/icons/elipsis.png";

const TableRows = ({ id, name, token_name, token_icon, price, last_hours, market_cap, volume }) => {
  return (
    <div className="flex justify-between items-center font-poppins py-2 border-b-2 border-primary">
      <div className="basis-[3%] text-primary text-sm font-semibold">{id}</div>
      <div className="basis-[25%]">
        <div className="flex items-center space-x-3">
          <img src={token_icon} alt="Ethereum" />
          <div className="flex flex-col space-y-1">
            <h5 className="text-sm font-semibold text-primary leading-3">{token_name}</h5>
            <span className="text-[10px] font-normal leading-3 inline-block text-primary">{name}</span>
          </div>
        </div>
      </div>
      <div className="basis-[15%] text-right">
        <span className="text-primary text-sm font-semibold">${price}</span>
      </div>
      <div className="basis-[9%] text-right">
        {last_hours > 0 ? (
          <span className="text-primarygreen text-sm font-semibold ">{last_hours !== "" ? `${last_hours}%` : ""}</span>
        ) : (
          <span className="text-[#F23838] text-sm font-semibold ">{last_hours !== "" ? `${last_hours}%` : ""}</span>
        )}
      </div>
      <div className="basis-[17%] text-right">
        <span className="text-primary text-sm font-semibold">${market_cap} B</span>
      </div>
      <div className="basis-[17%] text-right">
        <span className="text-primary text-sm font-semibold">${volume} B</span>
      </div>
      <div className="basis-[3%] flex items-center justify-center">
        <button>
          <img src={elipsisicon} alt="elipsisicon" width={3} />
        </button>
      </div>
    </div>
  );
};

export default TableRows;
