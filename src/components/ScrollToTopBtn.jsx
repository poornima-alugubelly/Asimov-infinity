export const ScrollToTopBtn = () => {
	return (
		<button
			className="btn btn-primary-solid btn-floating btn-floating-bottom"
			onClick={() => window.scrollTo(0, 0)}
		>
			<i className="fas fa-arrow-up"></i>
		</button>
	);
};
