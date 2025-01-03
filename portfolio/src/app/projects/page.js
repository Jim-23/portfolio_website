// src/app/projects/page.js
export default function Projects() {
	return (
		<div className="min-h-screen bg-gray-800 text-gray-100 flex items-center justify-center">
			<div className="text-center px-6 sm:px-12 max-w-4xl w-full">
				<h1 className="text-4xl font-semibold text-blue-300 leading-tight">
					My Projects
				</h1>
				<p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
					Here are some of the projects I've worked on. Each one showcases different skills and technologies.
				</p>
				<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Add your project cards here */}
					<div className="bg-gray-700 p-6 rounded-lg shadow-lg">
						<h2 className="text-xl font-semibold text-blue-300">Project 1</h2>
						<p className="mt-2 text-gray-400">Description of the project goes here.</p>
						<a
							href="#"
							className="mt-4 inline-block text-blue-600 hover:text-blue-400 transition-all duration-200"
						>
							View Project
						</a>
					</div>
					<div className="bg-gray-700 p-6 rounded-lg shadow-lg">
						<h2 className="text-xl font-semibold text-blue-300">Project 2</h2>
						<p className="mt-2 text-gray-400">Description of the project goes here.</p>
						<a
							href="#"
							className="mt-4 inline-block text-blue-600 hover:text-blue-400 transition-all duration-200"
						>
							View Project
						</a>
					</div>
					{/* Add more projects as needed */}
				</div>
			</div>
		</div>
	);
}
