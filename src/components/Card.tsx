import Comming from 'src/assets/img/comming.png';

interface CardProps {
  title: string;
  description: string;
  logo: any;
  comingSoon?: boolean;
  onClick: () => void;
}

const Card = (props: CardProps) => {
  const { title, description, logo, comingSoon = false, onClick } = props;

  return (
    <div className="h-full flex flex-col gap-8 text-center">
      <div className="relative w-full h-full rounded overflow-hidden shadow-lg border-t-4 border-green-500 p-6">
        {comingSoon && (
          <div className="absolute top-2 right-2">
            <img src={Comming} alt="Comming" />
          </div>
        )}
        <div className="h-20 flex justify-center items-center my-8">
          <img src={logo} alt="Dalle" />
        </div>
        <div className="">
          <div className="font-bold text-xl mb-2 ">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      {comingSoon ? (
        <div className="w-full h-10" style={{ minHeight: '40px' }} />
      ) : (
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="button"
            onClick={onClick}
          >
            GO IN
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
