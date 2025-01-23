import Image from "next/image";
import NavBar from "./nav-bar";

export default function ServicesHero() {
	return (
		<div className="relative h-[50vh] overflow-hidden">
			<div className="absolute inset-0 overflow-hidden">
				<Image
					src="/service_hero.jpeg"
					alt="Services background"
					layout="fill"
					objectFit="cover"
					quality={100}
					priority
				/>
			</div>
			<div className="absolute inset-0 bg-black/40" />
			<NavBar />
			<div className="relative h-full flex flex-col items-center justify-center text-white">
				<h1 className="text-5xl md:text-7xl font-serif tracking-wider">
					Our Services
				</h1>
				<p className="text-xl mt-4">
					Discover our range of nail care treatments
				</p>
			</div>
		</div>
	);
}
