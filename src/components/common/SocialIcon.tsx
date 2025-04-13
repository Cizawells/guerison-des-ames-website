import Link from "next/link";

const CommonSocialIcon = () => {
  return (
    <>
      <Link
        href="https://www.facebook.com/guerisondesamesnyakabigaSiege/?locale=fr_FR"
        legacyBehavior
      >
        <a target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </Link>
      <Link
        href="https://www.youtube.com/@e.m.guerisondesamesnyakabi3386"
        legacyBehavior
      >
        <a target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </Link>
    </>
  );
};

export default CommonSocialIcon;
