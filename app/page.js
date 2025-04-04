import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import MissionSection from "@/components/mission-section";
import Footer from "@/components/footer";
import PromoBanner from "@/components/promo-banner";

export default function Home() {
	return (
		<main>
			<PromoBanner />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<GallerySection />
			<MissionSection />
			<Footer />
		</main>
	);
}
