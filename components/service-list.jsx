import { serviceData } from "@/data/services";

export default function ServicesList() {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4">
				{Object.entries(serviceData).map(([category, services]) => (
					<div key={category} className="mb-16">
						<h2 className="text-3xl font-serif mb-8 text-center">
							{category}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{services.map((service, index) => (
								<div
									key={index}
									className="bg-gray-50 p-6 rounded-lg shadow-sm"
								>
									<h3 className="text-xl font-medium mb-2">
										{service.name}
									</h3>
									{service.price && (
										<p className="text-amber-600 font-bold">
											{service.price}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
