export default function Button({ children, onClick, variant = 'primary' }) {
    const variants = {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
      outline: 'border-2 border-blue-500 hover:bg-blue-50'
    }
  
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition-colors ${variants[variant]}`}
      >
        {children}
      </button>
    )
  }