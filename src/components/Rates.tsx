import "./rates.scss";
import { BlIcon } from "@trendyol/baklava/dist/baklava-react";

function Rates() {
  return (
    <div className="rate">
      {/* ekstra component olarak tasarlanabilir */}
      <div className="rate-unit">
        <div className="rate-unit-name">Dolar / Tl</div>
        <div className="rate-unit-price">31,3127</div>
        <div className="rate-change">
          <section>
            %0.36
            <BlIcon name="arrow_up" title="arrow_up"></BlIcon>
          </section>
        </div>
      </div>
      <div className="rate-unit">
        <div className="rate-unit-name">Euro / Tl</div>
        <div className="rate-unit-price">33,9394</div>
        <div className="rate-change">
          <section>
            %0.18
            <BlIcon name="arrow_down" title="arrow_down"></BlIcon>
          </section>
        </div>
      </div>
      <div className="rate-unit">
        <div className="rate-unit-name">Altın / Tl</div>
        <div className="rate-unit-price">2.141,209</div>
        <div className="rate-change">
          <section>
            %0.77
            <BlIcon name="arrow_up" title="arrow_up"></BlIcon>
          </section>
        </div>
      </div>
      <div className="rate-unit">
        <div className="rate-unit-name">BTC / Dolar</div>
        <div className="rate-unit-price">62.448</div>
        <div className="rate-change">
          <section>
            %0.63
            <BlIcon name="arrow_up" title="arrow_up"></BlIcon>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Rates;
