export default function Home() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome to Learn to Code!
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        This platform is your one-stop solution for learning programming languages and frameworks.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Get Started</h2>
          <p className="text-gray-600">
            Choose from our wide range of programming topics and start your
            coding journey today.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Popular Topics</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>JavaScript Fundamentals</li>
            <li>React Development</li>
            <li>HTML & CSS Basics</li>
            <li>SQL Database Design</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 