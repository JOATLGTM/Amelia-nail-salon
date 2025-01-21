import "./globals.css";

export const metadata = {
	title: "Amelia Nail Salon",
	description: "Columbus Nail Salon ready to make your nails",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
