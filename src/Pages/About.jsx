import React from 'react'
import Layout from '../Components/layouts/Layout'

const About = () => {
  return (
    <>
    <Layout>

    <div className="about-container bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-8">About Me</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Profile Picture */}
          <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Hello, I'm John Doe</h2>
            <p className="mb-4">
              I'm a passionate web developer with over 4 years of experience in
              creating modern, responsive, and user-friendly websites and
              applications. My expertise lies in front-end development,
              utilizing frameworks like React, Tailwind CSS, and JavaScript to
              deliver seamless user experiences.
            </p>
            <p>
              I enjoy learning new technologies, solving challenging problems,
              and collaborating with teams to bring creative ideas to life. When
              I'm not coding, you'll find me exploring new coffee shops, hiking,
              or reading about the latest in tech.
            </p>
          </div>
        </div>
      </div>
    </div>

    </Layout>
      
    </>
  )
}

export default About
