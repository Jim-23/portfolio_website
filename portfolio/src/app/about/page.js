// src/app/about/page.js
export default function About() {
	return (
		<div className="min-h-screen bg-gray-800 text-gray-100 flex items-center justify-center">
			<div className="text-center px-6 sm:px-12 max-w-4xl w-full">
				<h1 className="text-4xl font-semibold text-blue-300 leading-tight">
					About Me
				</h1>
				<p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
					I'm a web developer passionate about creating impactful digital experiences. With a focus on JavaScript and Next.js, I build scalable and modern web applications that are optimized for both performance and usability.
				</p>
				<p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
					I enjoy tackling complex challenges and constantly learning new technologies to enhance my development skills.
				</p>
				<div className="mt-8">
					<a
						href="#contact"
						className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-200"
					>
						Contact Me
					</a>
				</div>
			</div>
		</div>
	);
}
