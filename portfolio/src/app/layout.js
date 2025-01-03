import Navbar from '../components/Navbar';  // Import Navbar
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio site built with Next.js",
};

export default function Layout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* You can include meta tags, title, and other head elements here */}
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>My Portfolio</title>
			</head>
			<body className="bg-gray-50 text-gray-900">
				{/* Navbar should appear on every page */}
				<Navbar />
				{/* This will render the content of each page */}
				<main>{children}</main>
			

			</body>
		</html>
	);
}
