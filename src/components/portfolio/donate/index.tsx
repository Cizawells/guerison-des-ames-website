import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterTwo"
import HeaderOne from "@/layout/headers/HeaderOne"
import DonateArea from "./DonateArea"

const Donate = () => {
   return (
      <>
         <HeaderOne style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
            {/* <DonateArea /> */}
    <div className="container mt-4"  style={{
    backgroundImage: "url('/building.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Ensure it covers the full viewport height
    padding: "20px",
    width:"100%"
  }}>
      <span className="text-center section-title__subtitle mb-10">Donate & Support</span>
      {/* <span className="section-title__subtitle mb-10">
                Our Leadership team
              </span> */}
      
      <div className="card p-3 mb-3" style={{ backgroundColor: "transparent", color: "white", width: "60%", marginRight: "auto", marginLeft: "auto" }}>
        <h5>Bank Transfer</h5>
        <ul className="list-group" style={{ backgroundColor: "transparent", color: "white"}}>
          <li className="list-group-item" style={{ backgroundColor: "transparent", color: "white"}}>
            <strong>Bank Name:</strong> BCB<br />
            <strong>Account Name: </strong> Compte courant<br />
            <strong>Account Number:</strong> 74974-58
          </li>
          <li className="list-group-item" style={{ backgroundColor: "transparent", color: "white"}}>
            <strong>Bank Name:</strong> ABC Bank<br />
            <strong>Account Name:</strong> Compte de construction<br />
            <strong>Account Number:</strong> 02012090011
          </li>
        </ul>
      </div>

      <div className="card p-3 mb-3" style={{ backgroundColor: "transparent", color: "white", width: "60%", marginRight: "auto", marginLeft: "auto" }}>
        <h5>Mobile Transfer</h5>
        <ul className="list-group" style={{ backgroundColor: "transparent", color: "white"}}>
          <li className="list-group-item" style={{ backgroundColor: "transparent", color: "white"}}>
            <strong>CashApp:</strong> $Irakoze Richard
          </li>
        </ul>
      </div>

      <div className="text-center" style={{color: "white", fontWeight: "bold"}}>
        <p>For any questions, please contact us at <strong>info@guerisondesames.org</strong></p>
      </div>
    </div>
         </main>
         <FooterOne />
      </>
   )
}

export default Donate;
