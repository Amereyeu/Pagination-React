import React from "react";
import spinner from "./ball.svg";

export default () => {
	return (
		<div>
			<img
				src={spinner}
				alt="Loading..."
				style={{ width: "100px", margin: " 300px auto", display: "block" }}
			/>
		</div>
	);
};
