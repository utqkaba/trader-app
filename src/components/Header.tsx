import "./header.scss";
import moment from "moment/moment";

function Header() {
  return (
    <div>
      <h1 className="heading">Exchange Rates</h1>
      <p className="moment"> {moment().format("L")} </p>
      <p className="moment"> {moment().add(3, "days").calendar()} </p>
    </div>
  );
}

export default Header;
