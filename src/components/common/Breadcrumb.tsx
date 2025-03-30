import { urlFor } from "../../../sanity.image";

const Breadcrumb = ({ page_title, page_list, style, url }: any) => {
  console.log("urlll", url)
  return (
    <div
      className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
      style={{ backgroundImage:   `url(https://cdn.sanity.io/images/qvy0ccge/production/992939497c4273e865cd2249103c2f8495ba3fe5-5760x3840.jpg)`}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className={`${style ? "col-lg-12" : "col-xl-7 col-lg-8"}`}>
            <div className="breadcrumb-inner text-center"><p className="yyth5"></p>
              <h2 className="page-title">{page_title}</h2>
              <ul className="page-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>{page_list}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
