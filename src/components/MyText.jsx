import React from "react";

function MyText(props) {
	const { text, link, status = "info" } = props;
	const className = `sub-text ${status}`;
	if (link) {
		return (
			<div>
				<a href={link} target={"_blank"} rel="noreferrer">
					<p className={className}>{text}</p>
				</a>
			</div>
		);
	}
	return (
		<div>
			<p className={className}>{text}</p>
		</div>
	);
}

export default MyText;
