export default function TopicPage({ params }) {
  const { topic } = params

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {topic?.replace('-', ' ')} Study Guide
      </h1>

      {/* Notes Section */}
      <div className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Notes</h2>
          
          {/* Beginner Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Beginner</h3>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Basic concepts and fundamentals of {topic}.
              </p>
              {/* Add your beginner content here */}
            </div>
          </div>

          {/* Intermediate Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Intermediate</h3>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Advanced concepts and practical applications.
              </p>
              {/* Add your intermediate content here */}
            </div>
          </div>

          {/* Advanced Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">Advanced</h3>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Expert-level topics and best practices.
              </p>
              {/* Add your advanced content here */}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Practice Quiz</h2>
        <div className="space-y-6">
          {/* Sample Quiz Question */}
          <div className="border-b pb-4">
            <p className="text-lg font-medium mb-3">What is {topic}?</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input type="radio" name="q1" className="form-radio" />
                <span>Answer Option 1</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="q1" className="form-radio" />
                <span>Answer Option 2</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="q1" className="form-radio" />
                <span>Answer Option 3</span>
              </label>
            </div>
          </div>

          {/* Add more quiz questions here */}
          
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
