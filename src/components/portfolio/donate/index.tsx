import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import DonateArea from "./DonateArea"

const Donate = () => {
   return (
      <>
         <HeaderOne style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
            {/* <DonateArea /> */}
    <div className="container mt-4">
      <h2 className="text-center mb-4">Donate & Support</h2>
      
      <div className="card p-3 mb-3">
        <h5>Bank Transfer</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Bank Name:</strong> XYZ Bank<br />
            <strong>Account Name:</strong> John Doe<br />
            <strong>Account Number:</strong> 1234567890
          </li>
          <li className="list-group-item">
            <strong>Bank Name:</strong> ABC Bank<br />
            <strong>Account Name:</strong> John Doe<br />
            <strong>Account Number:</strong> 0987654321
          </li>
        </ul>
      </div>

      <div className="card p-3 mb-3">
        <h5>Mobile Transfer</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>PayPal:</strong> paypal.me/johndoe
          </li>
          <li className="list-group-item">
            <strong>Venmo:</strong> @JohnDoe
          </li>
          <li className="list-group-item">
            <strong>CashApp:</strong> $JohnDoe
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p>For any questions, please contact us at <strong>support@example.com</strong></p>
      </div>
    </div>
         </main>
         <FooterOne />
      </>
   )
}

export default Donate;
