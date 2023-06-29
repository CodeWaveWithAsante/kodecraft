const TextInput = ({ type, placeholder, styles }) => {
  return (
    <input
      className={`rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 ${styles}`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default TextInput;
