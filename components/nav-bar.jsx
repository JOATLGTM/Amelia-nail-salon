"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./mobile-sidebar";

export default function NavBar() {
	const pathname = usePathname();

	return (
		<nav className="absolute top-0 left-0 right-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-24">
					<MobileSidebar />
					<div className="hidden md:flex items-center space-x-8 pl-12">
						<Link
							href="/"
							className={`text-white hover:text-gray-200 transition-colors px-4 py-2 ${
								pathname === "/"
									? "border-b-2 border-white"
									: ""
							}`}
						>
							Home
						</Link>
						<Link
							href="/services"
							className={`text-white hover:text-gray-200 transition-colors px-4 py-2 ${
								pathname === "/services"
									? "border-b-2 border-white"
									: ""
							}`}
						>
							Services
						</Link>
					</div>
					<div className="hidden md:block pr-12">
						<Link
							href="https://calendly.com/amelia-nail-salon"
							className={`text-white hover:text-gray-200 transition-colors px-4 py-2 ${
								pathname === "/contact"
									? "border-b-2 border-white"
									: ""
							}`}
						>
							Book an appointment
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
