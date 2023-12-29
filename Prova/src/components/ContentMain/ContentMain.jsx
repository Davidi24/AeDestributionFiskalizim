import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";
import Table  from "../Table/Table";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Cards />

        </div>
        <div className="content-grid-two">
            <Table />
            <div className="grid-two-item">
              <div className="subgrid-two">

              </div>
            </div>

       
        </div>
    </div>
  )
}

export default ContentMain
