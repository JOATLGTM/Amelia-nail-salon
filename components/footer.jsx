import { Martini } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-white border-t">
			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col md:flex-row justify-between items-start">
					<div className="mb-8 md:mb-0">
						<Martini className="h-12 w-12 text-amber-600" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h3 className="text-lg font-serif mb-4">
								Working Hours
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li>Monday - Friday: 9:00 AM - 7:00 PM</li>
								<li>Saturday: 9:00 AM - 6:00 PM</li>
								<li>Sunday: 10:00 AM - 5:00 PM</li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-serif mb-4">
								Our Salon
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li>123 Main Street</li>
								<li>Columbus, OH 43215</li>
								<li>Phone: (614) 555-0123</li>
								<li>Email: info@bestnailscolumbus.com</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
