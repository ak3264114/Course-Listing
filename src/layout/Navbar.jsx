// src/Navbar.jsx
import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<a href="/" className="text-white font-bold text-xl">
					EduHub
				</a>

				<ul className="flex space-x-4">
					<li>
						<a href="/courses" className="text-white">
							User
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
