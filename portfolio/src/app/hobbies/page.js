// src/app/hobbies/page.js
export default function Hobbies() {
	return (
		<div className="min-h-screen bg-gray-800 text-gray-100 flex items-center justify-center">
			<div className="text-center px-6 sm:px-12 max-w-4xl w-full">
				<h1 className="text-4xl font-semibold text-blue-300 leading-tight">
					My Hobbies
				</h1>
				<p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
					In addition to web development, I enjoy several other activities that help me stay creative and balanced. Below are some of my hobbies:
				</p>
				<ul className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto space-y-4">
					<li>🎮 Gaming - I love exploring new video games and discovering creative narratives.</li>
					<li>📚 Reading - I'm always reading books, especially in the science fiction and technology genres.</li>
					<li>🌍 Traveling - I enjoy traveling to new places to experience different cultures and environments.</li>
					<li>🎨 Photography - Capturing moments through a lens helps me to stay in touch with my artistic side.</li>
				</ul>
				<div className="mt-8">
					<a
						href="#contact"
						className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-200"
					>
						Get in Touch
					</a>
				</div>
			</div>
		</div>
	);
}
