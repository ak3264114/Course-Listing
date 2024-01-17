// src/components/CourseCard.jsx
import React from "react";

const CourseCard = ({ course }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-md bg-white flex flex-col items-center">
			<img
				className=" h-40 w-auto object-cover"
				src={course.thumbnail}
				alt={course.name}
			/>

			<div className="p-4">
				<div className="text-left">
					<h2 className="text-xl font-bold mb-2">{course.name}</h2>
					<p className="text-gray-600 mb-4">
						By <span className="font-semibold">{course.instructor} </span>
					</p>
				</div>

				<div className="flex items-center">
					<span className="text-gray-700">Status:</span>
					<span
						className={`ml-2 text-${
							course.enrollmentStatus === "Open" ? "green" : "red"
						}-500 font-bold`}
					>
						{course.enrollmentStatus}
					</span>
				</div>

				<div className="mt-4">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
