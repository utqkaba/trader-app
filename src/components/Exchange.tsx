import "./exchange.scss";
import {
  BlButton,
  BlSelect,
  BlIcon,
  BlInput,
} from "@trendyol/baklava/dist/baklava-react";

function Exchange() {
  const iconStyle = {
    color: "#f27a19",
  };

  return (
    <div className="exchange">
      <section className="exchange-unit">
        <div className="exchange-unit-line">
          <BlSelect clearable placeholder="Choose exchange unit"></BlSelect>
        </div>
        <div className="exchange-unit-line">
          <BlIcon
            name="arrow_right"
            title="arrow_right"
            style={iconStyle}
          ></BlIcon>
        </div>
        <div className="exchange-unit-line">
          <BlSelect clearable placeholder="Choose exchange unit"></BlSelect>
        </div>
      </section>
      <section className="exchange-unit">
        <div className="exchange-unit-line">
          <BlInput type="number" label="Amount"></BlInput>
        </div>
        <div className="exchange-unit-line">
          <BlIcon
            name="arrow_right"
            title="arrow_right"
            style={iconStyle}
          ></BlIcon>
        </div>
        <div className="exchange-unit-line">
          <BlInput type="number" label="New Amount"></BlInput>
        </div>
      </section>
      <section className="exchange-button">
        <BlButton icon="change" size="large">
          Get Exchange Rate
        </BlButton>
      </section>
    </div>
  );
}

export default Exchange;
