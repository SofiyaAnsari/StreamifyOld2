import React from "react";
import "./listItem.scss";
import {
	Add,
	PlayArrow,
	ThumbDownAltOutlined,
	ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
export default function ListItem({ index }) {
	const [isHovered, setIsHovered] = useState(false);
	const trailer = "../public/burning_charcoal_fire (1080p).mp4";
	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src="../public/movie3.jpg" alt="" />
			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					<div className="itemInfo">
						<div className="icons">
							<PlayArrow className="icon" />
							<Add className="icon" />
							<ThumbUpAltOutlined className="icon" />
							<ThumbDownAltOutlined className="icon" />
						</div>
						<div className="itemInfoTop">
							<span>1 hour 14 mins</span>
							<span className="limit">+16</span>
							<span>1997</span>
						</div>
						<div className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
							cupiditate tempora, veritatis, commodi, exercitationem eaque porro
							est natus nostrum voluptate modi adipisci vitae a! Consequuntur
							vitae nulla at sit molestiae!
						</div>
						<div className="genre">Action</div>
					</div>
				</>
			)}
		</div>
	);
}
