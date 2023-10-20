import { useEffect } from "react";

export default function SmoothScroll({ children, speed = 0.03 }) {

	useEffect(() => {
		const scrollWrapper = document.getElementsByClassName("smooth-scroll-wrapper")[0];
		let height = scrollWrapper.getBoundingClientRect().height - 1;

		let offset = 0;
		document.body.style.height = Math.floor(height) + "px";

		function smoothScroll() {
			offset += (window.scrollY - offset) * speed;

			let scroll = "translateY(-" + offset + "px) translateZ(0)";
			scrollWrapper.style.transform = scroll;

			requestAnimationFrame(smoothScroll);
		}

		smoothScroll();
	}, []);


	return (
		<div className="smooth-scroll-wrapper">
            {children}
		</div>
	)
}
