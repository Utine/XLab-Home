import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/bio">Bio</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/research">Research</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/publications">Publications</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/team">Team</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/opensource">Opensource</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© XLab-UB. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
