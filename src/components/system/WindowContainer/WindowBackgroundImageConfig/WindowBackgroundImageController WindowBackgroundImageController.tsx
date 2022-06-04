/**
 * Window Background Image Controller
 * This component will get the config from the cache and set the image.
 * It only receive the route where the file is, if not cached, downloadit and then cache it.
 */

import image from "../../../../assets/gif/VirtualWave.gif";
const WindowBackgroundImageConfig = () => {
	// todo: get the config from systemConfigContext;
	const windowSystemConfig = {
		backgroundImage: {
			route: image,
		},
	};

	console.log(image);

	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
				height: "100%",
				left: "0",
				top: "0",
				backgroundImage: `url(${windowSystemConfig.backgroundImage.route})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				overflow: "hidden",
				zIndex: "0",
			}}
		>
			{/* <img src={windowSystemConfig.backgroundImage.route} alt="" style={{ width: "100%" }} /> */}
		</div>
	);
};

export default WindowBackgroundImageConfig;
