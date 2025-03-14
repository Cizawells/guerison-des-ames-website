import Link from 'next/link'

const HeaderTop = ({ style }: any) => {
   return (
      <div className={`navbar-top ${style ? "pt-30 rpt-10 navtop--two" : "pt-15 pb-10 bgc-black navtop--one"}`}>
         <div className="container">
            <div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
               <ul className="topbar-left">
                  {style ?
                     <>
                        <li><b>Shalom - <Link href="callto:333-444555">68554444</Link></b></li>
                        <li>Bujumbura, Nyagakabiga</li>
                     </> :
                     <>
                        <li><span>HI</span>, Good Afternoon Dude! </li>
                        <li><i className="flaticon-pin"></i> Shiloh, Hawaii 81063</li>
                     </>
                  }
               </ul>
               <ul className="topbar-right">
                  <li className="social-area">
                     <span>Follow Us - </span>
                     <Link href="https://www.youtube.com/@e.m.guerisondesamesnyakabi3386"><i className="fab fa-facebook-f"></i></Link>
                     {/* <Link href="https://www.youtube.com/@e.m.guerisondesamesnyakabi3386"><i className="fab fa-youtube"></i></Link> */}
                     <Link  legacyBehavior href="https://www.youtube.com/@e.m.guerisondesamesnyakabi3386" passHref>
  <a target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default HeaderTop
