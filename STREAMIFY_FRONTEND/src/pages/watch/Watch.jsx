import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";
export default function Watch() {
	return (
		<div className="watch">
			<div className="back">
				<ArrowBackOutlined />
				Home
			</div>
			<video
				className="video"
				autoPlay
				progress
				controls
				src="../public/burning_charcoal_fire (1080p).mp4"
			/>
		</div>
	);
}
