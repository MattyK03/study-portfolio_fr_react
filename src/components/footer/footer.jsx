import "./footer.css"

const Footer = () => {
  return (
	<footer className="footer">
	  <div className="container">
		<div className="footer__content">
		  <div className="footer__icons">
			<a href="vk.com" target="_blank" rel="noreferrer">
			  <i className="fa-brands fa-vk"></i>
			</a>
			<a href="instagram.com" target="_blank" rel="noreferrer">
			  <i className="fa-brands fa-instagram"></i>
			</a>
			<a href="twitter.com" target="_blank" rel="noreferrer">
			  <i className="fa-brands fa-twitter"></i>
			</a>
			<a href="github.com" target="_blank" rel="noreferrer">
			  <i className="fa-brands fa-github"></i>
			</a>
			<a href="linkedin.com" target="_blank" rel="noreferrer">
			  <i className="fa-brands fa-linkedin"></i>
			</a>
		  </div>
		  <div className="footer__text">© 2022 frontend-dev.com</div>
		</div>
	  </div>
	</footer>
  );
};

export default Footer;
