import React from "react";

function MyButton(props) {
	const { fcn, buttonLabel, disabled = false, loading = false } = props;
	return (
		<div>
			<button
				onClick={fcn}
				className={`cta-button${disabled ? " disabled" : ""}`}
				disabled={disabled || loading}
				aria-disabled={disabled || loading}
			>
				{loading ? "Processing…" : buttonLabel}
			</button>
		</div>
	);
}
export default MyButton;
