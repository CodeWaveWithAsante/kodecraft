const Title = ({ title, subTitle, titleStyles, subTitleStyles }) => {
  return (
    <div className='flex w-full mb-16 flex-col items-center text-center'>
      <h1 className={`text-3xl md:text-2xl font-semibold mb-4 ${titleStyles} `}>
        {title}
      </h1>

      <p
        className={`lg:w-1/2 w-full leading-relaxed text-base ${subTitleStyles} `}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
