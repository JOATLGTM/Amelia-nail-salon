import Image from "next/image";

export default function GallerySection() {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="text-center">
						<Image
							src="/nailcare.jpeg"
							alt="Nail Art Example 1"
							width={500}
							height={400}
							className="w-full h-[400px] object-cover mb-6"
						/>
						<h3 className="text-2xl font-serif mb-4">
							Luxury Nail Care
						</h3>
						<p className="text-gray-600">
							Experience premium nail care with our expert
							technicians
						</p>
					</div>
					<div className="text-center">
						<Image
							src="/naillist.jpg"
							alt="Nail Art Example 2"
							width={500}
							height={400}
							className="w-full h-[400px] object-cover mb-6"
						/>
						<h3 className="text-2xl font-serif mb-4">
							Creative Designs
						</h3>
						<p className="text-gray-600">
							Custom nail art tailored to your style
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
