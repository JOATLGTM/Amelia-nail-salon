import { nailServices } from "@/data";

export default function ServicesMenu() {
	return (
		<section className="py-24 px-4 bg-[#E5C7C2]">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{Object.entries(nailServices).map(
						([category, services]) => (
							<div
								key={category}
								className="bg-[#FAF7F5] p-8 rounded-lg shadow-md"
							>
								<h2 className="text-2xl font-serif mb-6 text-center">
									{category}
								</h2>
								<div className="space-y-4">
									{services.map((service, index) => (
										<div
											key={index}
											className="border-b border-gray-200 pb-2 last:border-b-0"
										>
											<p className="text-sm font-medium">
												{service.name}
											</p>
											{service.price && (
												<p className="text-sm text-amber-600">
													{service.price}
												</p>
											)}
										</div>
									))}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
