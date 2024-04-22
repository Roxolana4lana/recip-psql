import Image from "next/image";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImg() {
    const randomNum = getRandomInt(1, 4)
    return `/${randomNum}.jpg`
}

const Card = ({ title = "title", author = "author", rating = 0, date, id }) => {
    const img = getRandomImg();
    //max-w-80 min-w-56 
    return (
        <div className="bg-white max-w-52 min-w-52 rounded-lg shadow-lg overflow-hidden m-1">

            <Image
                src={img}
                width={650}
                height={366}
                alt={title}

            />

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{id}.{title}</h2>
                <p className="text-gray-700 mb-4">by {author}</p>
                <p className="text-gray-700 mb-4">published in {date}</p>
                <div className="flex items-center">
                    <svg className="w-6 h-6 fill-current text-yellow-500 mr-1" viewBox="0 0 20 20">
                        <path d="M10 0c-.1 0-.2 0-.3.1L6.1 6.5 0 7.5l5.3 4.7L3.6 20l6.5-3.5L16.5 20l-1.7-8.8L20 7.5l-6.1-1-2.6-6.4C10.2 0 10.1 0 10 0zm0 2.8l1.6 4.1 4.3.4-3.3 2.9 1 4-3.3-2-3.3 2 1-4-3.3-2.9 4.3-.4L10 2.8z" />
                    </svg>
                    <span className="text-yellow-500 font-bold">{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;