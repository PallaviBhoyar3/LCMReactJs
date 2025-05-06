import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";

// IMAGES
import thumbnail1 from "../../assets/images/artificialThumbnail.png";
import thumbnail2 from "../../assets/images/bootstrap.jpg";
import thumbnail3 from "../../assets/images/iosAppThumbnail.jpg";
import thumbnail4 from "../../assets/images/thumbnail3.png";
import thumbnail5 from "../../assets/images/thumbnail5.png";
import thumbnail6 from "../../assets/images/thumbnail6.png";
import thumbnail7 from "../../assets/images/thumbnail7.png";
import thumbnail8 from "../../assets/images/thumbnail8.png";
 
const Courses = () => {
  // const {data, isLoading, isError} = useGetPublishedCourseQuery();

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  console.log("isError",isError)

  const data = [{
    _id: "1",
    courseTitle: "Introduction to Artificial Intelligence (AI)",
    description: "This course is part of multiple programs.",
    creator:{
      name: "Rav Ahuja",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail1,
    coursePrice: 1000,
    courseLevel: 4.5,
    totalEnrolledStudents: 50,
  },
  {
    _id: "2",
    courseTitle: "IOS App Development Basic", 
    description: "This course is part of multiple programs.",
    creator:{
      name: "Parham Aarabi",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail2,
    coursePrice: 2000,
    courseLevel: 4.0,
    totalEnrolledStudents: 30,
  },
  {
    _id: "3",
    courseTitle: "Javascript Basics",
    description: "Description for Course 3",
    creator:{
      name: "Parham Aarabi",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail3,
    coursePrice: 3000,
    courseLevel: 4.0,
    totalEnrolledStudents: 30,
  },
  {
    _id: "4",
    courseTitle: "React Js Basics",
    description: "Description for Course 4",
    creator:{
      name: "Parham Aarabi",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail4,
    coursePrice: 2000,
    courseLevel: 4.0,
    totalEnrolledStudents: 30,
  },
  {
    _id: "5",
    courseTitle: "HTML, CSS and Javascript",
    description: "Description for Course 5",
    creator:{
      name: "Parham Aarabi",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail5,
    coursePrice: 5000,
    courseLevel: 4.5,
    totalEnrolledStudents: 50,
  },
  {
    _id: "6",
    courseTitle: "React Native Advanced",
    description: "Description for Course 6",
    creator:{
      name: "Parham Aarabi",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail6,
    coursePrice: 6000,
    courseLevel: 4.0,
    totalEnrolledStudents: 30,
  },
  {
    _id: "7",
    courseTitle: "Developing Websites and Front-Ends with Bootstrap",
    description: "Description for Course 7",
    creator:{
      name: "Parham Aarabi",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail7,
    coursePrice: 7000,
    courseLevel: 4.0,
    totalEnrolledStudents: 30,
  },
  {
    _id: "8",
    courseTitle: "Moving to the Cloud",
    description: "Moving to the Cloud",
    creator:{
      name: "Parham Aarabi",
      // photoUrl: "https://via.placeholder.com/150",
    },
    courseThumbnail: thumbnail8,
    coursePrice: 8000,
    courseLevel: 4.0,
    totalEnrolledStudents: 30,
  }
]
 
  if(isError) return <h1>Some error occurred while fetching courses.</h1>

  return (
    <div className="bg-gray-50 dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={index} />
            ))
          ) : (
          //  data?.courses && data.courses.map((course, index) => <Course key={index} course={course}/>) 
          data && data.map((course, index) => <Course key={index} course={course}/>) 
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
