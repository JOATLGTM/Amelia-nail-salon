import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="absolute top-0 left-0 right-0 z-50">
			<div className="container mx-auto">
				<div className="flex items-center justify-between h-24">
					<div className="flex items-center space-x-8 pl-12">
						<Link
							href="/"
							className="text-white hover:text-gray-200 transition-colors px-4 py-2"
						>
							Home
						</Link>
						<Link
							href="/services"
							className="text-white hover:text-gray-200 transition-colors px-4 py-2"
						>
							Services
						</Link>
					</div>
					<div className="pr-12">
						<Link
							href="/contact"
							className="text-white hover:text-gray-200 transition-colors px-4 py-2"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
