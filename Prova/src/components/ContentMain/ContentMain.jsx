import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const ContentMain = ({selectedVatNumber}) => {

  const print = () => {
    console.log(selectedVatNumber)

  };
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Cards />

        </div>
        <div className="content-grid-two">
            <Table selectedVatNumber={selectedVatNumber}/>
            <div className="grid-two-item">
              <div className="subgrid-two">

              </div>
            </div>

       
        </div>
    </div>
  )
}

export default ContentMain