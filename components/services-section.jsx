import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
	const services = [
		{
			category: "GEL • NAILS",
			title: "Natural Gel Extensions",
			description: "100% Organic Sculptured Gel Extensions",
			image: "/gel_extensions.jpeg",
		},
		{
			category: "BEST • MANICURES",
			title: "Organic Gel Nails",
			description:
				"Our Gel Strengthening Overlay is designed for nail biters and those who want to grow their nails naturally",
			image: "/organic_gel.jpeg",
		},
		{
			category: "SILKY • PEDICURES",
			title: "Perfect Pedicures",
			description: `The softest feet you'll ever have`,
			image: "/pedicure.jpeg",
		},
	];

	return (
		<section className="py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{services.map((service, index) => (
						<div key={index} className="text-center">
							<Image
								src={service.image || "/placeholder.svg"}
								alt={service.title}
								width={300}
								height={400}
								className="w-full h-[400px] object-cover mb-6"
							/>
							<p className="text-amber-600 font-medium mb-2">
								{service.category}
							</p>
							<h3 className="text-2xl font-serif mb-4">
								{service.title}
							</h3>
							<p className="text-gray-600 mb-4">
								{service.description}
							</p>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<Link
						href="/services"
						className="border border-amber-600 text-amber-600 px-8 py-3 inline-block hover:bg-amber-600 hover:text-white transition-colors"
					>
						EXPLORE SERVICES
					</Link>
				</div>
			</div>
		</section>
	);
}
