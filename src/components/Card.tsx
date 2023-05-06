interface CardProps {
  title: string;
  description: string;
  logo: any;
  onClick: () => void;
}

const Card = (props: CardProps) => {
  const { title, description, logo, onClick } = props;

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover curser-point w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        onClick={onClick}
        src={logo}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          type="button"
          className="flex rounded-lg bg-indigo-500 py-3 px-6 text-lg text-white font-semibold text-txGray shadow-sm hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] lg:ml-32 xl:my-auto xl:ml-0 justify-center"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={onClick}
        >
          GO IN
        </button>
      </div>
    </div>
  );
};

export default Card;
