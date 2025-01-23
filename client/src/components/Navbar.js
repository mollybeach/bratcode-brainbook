import Link from 'next/link'

export default function Navbar() {
  const topics = ["C++", "CSS", "HTML", "JavaScript", "React", "SQL"]

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Learn To Code
        </Link>
        
        <div className="flex items-center space-x-6">
          {/* Main Navigation */}
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
          </div>

          {/* Topics Dropdown */}
          <div className="relative group">
            <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
              Topics
            </button>
            <div className="absolute hidden group-hover:block right-0 w-48 bg-white text-black mt-2 rounded shadow-lg">
              {topics.map((topic) => (
                <Link
                  key={topic}
                  href={`/topic/${topic.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
