function Button({ text, color }) {
  const colorClasses = {
    emerald: 'bg-emerald-500 hover:bg-emerald-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    red: 'bg-red-500 hover:bg-red-600',
    default: 'bg-gray-500 hover:bg-gray-600'
  };

  return (
    <button 
      className={`text-white px-6 py-3 rounded-lg font-medium transition-colors 
      ${colorClasses[color] || colorClasses.default}`}
    >
      {text}
    </button>
  );
}
  
export default Button;