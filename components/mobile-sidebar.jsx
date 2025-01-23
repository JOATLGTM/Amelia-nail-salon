"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileSidebar() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const closeOnEscape = (e) => {
			if (e.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("keydown", closeOnEscape);
		return () => document.removeEventListener("keydown", closeOnEscape);
	}, []);

	return (
		<>
			<button
				className="md:hidden text-white p-2 z-50 relative"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Close menu" : "Open menu"}
			>
				<div className="w-6 h-6 flex items-center justify-center">
					<span
						className={`transform transition-all duration-300 ease-in-out ${
							isOpen ? "rotate-45 translate-y-1.5" : ""
						} absolute w-full h-0.5 bg-current`}
					></span>
					<span
						className={`transform transition-all duration-300 ease-in-out ${
							isOpen ? "opacity-0" : ""
						} absolute w-full h-0.5 bg-current`}
					></span>
					<span
						className={`transform transition-all duration-300 ease-in-out ${
							isOpen ? "-rotate-45 -translate-y-1.5" : ""
						} absolute w-full h-0.5 bg-current`}
					></span>
				</div>
			</button>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-50"
					onClick={() => setIsOpen(false)}
				>
					<div
						className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
							isOpen ? "translate-x-0" : "-translate-x-full"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="p-4 flex justify-between items-center border-b">
							<h2 className="text-xl font-semibold">Menu</h2>
							{/* <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button> */}
						</div>
						<nav className="p-4">
							<ul className="space-y-4">
								<li>
									<Link
										href="/"
										className="text-gray-800 hover:text-amber-600 transition-colors"
										onClick={() => setIsOpen(false)}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="text-gray-800 hover:text-amber-600 transition-colors"
										onClick={() => setIsOpen(false)}
									>
										Services
									</Link>
								</li>
								<li>
									{/* <Link
                    href="/contact"
                    className="text-gray-800 hover:text-amber-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link> */}
								</li>
							</ul>
						</nav>
					</div>
				</div>
			)}
		</>
	);
}
