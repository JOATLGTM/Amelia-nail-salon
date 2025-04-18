import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Amelia Nail Salon",
	description: "The best nails in Columbus",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="relative min-h-screen">
					{children}
					<Analytics />
					<SpeedInsights />
				</div>
			</body>
		</html>
	);
}
