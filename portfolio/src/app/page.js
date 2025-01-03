// src/app/page.js
export default function Home() {
	return (
		<div className="min-h-screen bg-gray-800 text-gray-100 flex items-center justify-center">
			<div className="text-center px-6 sm:px-12 max-w-4xl w-full">
				<h1 className="text-4xl font-semibold text-blue-300 leading-tight">
					Welcome to My Portfolio
				</h1>
				<p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
					I'm a passionate web developer specializing in JavaScript, Node.js, and Next.js.
					I focus on building modern, responsive web applications with clean code and attention to detail.
				</p>
				<div className="mt-8">
					<a
						href="#projects"
						className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-200"
					>
						See My Projects
					</a>
				</div>
				<div className="mt-12 text-sm text-gray-500">
					<p>
						Check out my work and feel free to connect with me if you want to collaborate on a project!
					</p>
				</div>
			</div>
		</div>
	);
}
