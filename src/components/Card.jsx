
export const Card = ({ image, alt, title, description, link }) => {
  return (
    <div className="max-w-sm bg-white border border-[#10433B] rounded-lg shadow-sm dark:bg-gray-800 dark:border-[#E47A5D]">
      <a href={link || "#"}>
        <img src={image} alt={alt} className="w-4/5 mx-auto my-4 rounded" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link || "#"}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#ECBD47] bg-[#10433B] rounded-lg hover:text-[#10433B] hover:bg-[#ECBD47] focus:ring-4 focus:outline-none focus:ring-[#ECBD47] dark:bg-[#ECBD47] dark:hover:bg-[#ECBD47] dark:focus:ring-[#ECBD47]"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
