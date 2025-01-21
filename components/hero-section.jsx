"use client";

import { useEffect, useState } from "react";
import NavBar from "./nav-bar";
import Image from "next/image";

export default function HeroSection() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="relative h-screen overflow-hidden">
			<div className="absolute inset-0 overflow-hidden">
				<Image
					src="/hero.jpg"
					alt="Hero background"
					layout="fill"
					objectFit="cover"
					quality={100}
					priority
					style={{
						transform: `translateY(${scrollY * 0.5}px)`,
					}}
				/>
			</div>
			<div className="absolute inset-0 bg-black/20" />
			<NavBar />
			<div className="relative h-full flex flex-col items-center justify-center text-white">
				<div className="text-center space-y-4">
					<p className="text-xl font-light tracking-wide">
						Welcome to
					</p>
					<h1 className="text-5xl md:text-7xl font-serif tracking-wider">
						THE BEST NAILS COLUMBUS
					</h1>
				</div>
			</div>
		</div>
	);
}
