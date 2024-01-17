// src/page-components/CourseListingPage.jsx
import React, { useEffect, useState } from "react";
import { getAllCourses } from "../utils";
import CourseCard from "../components/CourseCard";

const CourseListingPage = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const coursesData = await getAllCourses();
				setCourses(coursesData);
			} catch (error) {}
		};

		fetchCourses();
	}, []);

	return (
		<div className="min-h-screen flex justify-center">
			<div className=" max-w-7xl bg-gray-100 p-4 rounded-lg ">
				<h1 className="text-3xl font-bold mb-8">Course Listing Page</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{courses.map((course) => (
						<CourseCard key={course.id} course={course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseListingPage;
