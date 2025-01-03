// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="bg-gray-900 p-4 shadow-lg">
			<ul className="flex space-x-8 justify-center">
				<li>
					<Link href="/" className="text-white text-lg hover:text-blue-300 transition-all duration-200">
						Home
					</Link>
				</li>
				<li>
					<Link href="/about" className="text-white text-lg hover:text-blue-300 transition-all duration-200">
						About
					</Link>
				</li>
				<li>
					<Link href="/projects" className="text-white text-lg hover:text-blue-300 transition-all duration-200">
						Projects
					</Link>
				</li>
				<li>
					<Link href="/hobbies" className="text-white text-lg hover:text-blue-300 transition-all duration-200">
						Hobbies
					</Link>
				</li>
			</ul>
		</nav>
	);
}
