import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { courses } from '../services/course-service'
import CourseCard from '../components/CourseCard'

const Courses = () => {
    const [Courses, setCourse] = useState([])
    console.log("🚀 ~ Courses ~ Courses:", Courses)

    useEffect(() => {
        courses()
            .then(({data :{result}}) => {
                setCourse(result)
                console.log("🚀 ~ Courses ~ Course:", result)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <section className='grid grid-cols-3 px-[5%] pt-5 gap-[3.5rem]'>
            {Courses.map((course) => (
                <CourseCard key={course._id} course={course} />
            ))}
        </section>
    )
}

export default Courses