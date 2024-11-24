import React from 'react'
import Layout from '../Components/layouts/Layout'

const Blog = () => {
  return (
    <>
    <Layout>
    <div className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Post 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/500"
            alt="Blog Post 1"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Blog Post Title 1</h2>
          <p className="text-gray-600 mt-2">
            This is a brief description or excerpt from the first blog post. You can add some preview text here.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Read more...
          </a>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/500"
            alt="Blog Post 2"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Blog Post Title 2</h2>
          <p className="text-gray-600 mt-2">
            This is a brief description or excerpt from the second blog post. You can add some preview text here.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Read more...
          </a>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/500"
            alt="Blog Post 3"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Blog Post Title 3</h2>
          <p className="text-gray-600 mt-2">
            This is a brief description or excerpt from the third blog post. You can add some preview text here.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Read more...
          </a>
        </div>
      </div>
    </div>

    </Layout>
      
    </>
  )
}

export default Blog
