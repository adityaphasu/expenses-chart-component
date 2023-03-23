import Logo from "./assets/images/logo.svg";
import Chart from "./components/Chart";
import CountUp from "react-countup";

function App() {
  return (
    <main>
      <div className="totalbalance">
        <h1 className="totalbalance__heading">Expenses</h1>
        <div>
          <p className="totalbalance__text">My balance</p>
          <span className="totalbalance__value">
            $<CountUp end={921.48} decimals="2" duration={2.5} />
          </span>
        </div>
        <img src={Logo} alt="" className="totalbalance__logo" />
      </div>
      <div className="expenses">
        <h2 className="expenses__heading">Spending - Last 7 days</h2>
        <div className="expenses__chartbox">
          <Chart />
        </div>
        <div className="expenses__container">
          <div className="expenses__text ">
            <span>Total this month</span>
            <span className="expenses__value expenses__value--large">$478.33</span>
          </div>
          <div className="expenses__text expenses__text--end">
            <span className="expenses__value">+2.4%</span>
            <span>from last month</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
