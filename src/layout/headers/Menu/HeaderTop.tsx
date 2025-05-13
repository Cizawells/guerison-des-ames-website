import Link from "next/link";

const HeaderTop = ({ style }: any) => {
  return (
    <div
      className={`navbar-top ${style ? "pt-10 rpt-10 navtop--two" : "pt-15 pb-10 bgc-black navtop--one"}`}
    >
      <div className="container">
        <div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
          <ul className="topbar-left">
            {style ? (
              <>
                <li>
                  <b>
                    Shalom - <Link href="callto:333-444555">+25776720000</Link>
                  </b>
                </li>
                <li>Bujumbura, Nyakabiga</li>
              </>
            ) : (
              <>
                <li>
                  <span>HI</span>, Good Afternoon Dude!{" "}
                </li>
                <li>
                  <i className="flaticon-pin"></i> Shiloh, Hawaii 81063
                </li>
              </>
            )}
          </ul>
          <ul className="topbar-right">
            <li className="social-area">
              <span>Follow Us - </span>

              <Link
                legacyBehavior
                href="https://www.facebook.com/guerisondesamesnyakabigaSiege/?locale=fr_FR"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </Link>
              <Link
                legacyBehavior
                href="https://www.youtube.com/@e.m.guerisondesamesnyakabi3386"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
