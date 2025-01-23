import ServiceHero from "@/components/service-hero";
import ServicesMenu from "@/components/service-menu";
import Footer from "@/components/footer";

export default function ServicesPage() {
	return (
		<main className="min-h-screen bg-[#E5C7C2]">
			<ServiceHero />
			<ServicesMenu />
			<Footer />
		</main>
	);
}
