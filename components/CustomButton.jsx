const CustomButton = ({ title, containerStyles, iconRight }) => {
  return (
    <button className={`inline-flex items-center ${containerStyles}`}>
      {title}

      {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
