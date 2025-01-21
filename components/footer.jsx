import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-white border-t">
			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-8 md:mb-0">
						<Image
							src="/logo.png"
							width={100}
							height={100}
							alt="logo"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h3 className="text-lg font-serif mb-4">
								Working Hours
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li>Monday: 10:00 AM - 7:00 PM</li>
								<li>Tuesday - Friday: 10:00 AM - 7:30 PM</li>
								<li>Saturday: 10:00 AM - 6:30 PM</li>
								<li>Sunday: 12:00 AM - 5:00 PM</li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-serif mb-4">
								Our Salon
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li>1013 W 5th Ave</li>
								<li>Columbus, OH 43212</li>
								<li>Phone: (614) 706-4798</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
