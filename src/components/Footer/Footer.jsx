export const Footer = () => {
	return (
		<footer className="footer flex-column">
			<p>Made by poornima</p>
			<ul className=" flex-center">
				<li>
					<a href="https://github.com/poornima-alugubelly" target="_blank">
						<i className="fa-fw fab fa-github fa-2x btn-icon"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/poornima-alugubelly-aa13291b6/"
						target="_blank"
					>
						<i className="fa-fw fab fa-linkedin fa-2x btn-icon"></i>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/Moony_codes " target="_blank">
						<i className="fa-fw fab fa-twitter fa-2x btn-icon"></i>
					</a>
				</li>
			</ul>
			<small>© 2022 Asimov Creations</small>
			<small>
				<a className="acknowledgement" href="https://storyset.com/technology">
					Technology illustrations by Storyset
				</a>
			</small>
		</footer>
	);
};
