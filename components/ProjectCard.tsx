import React from 'react';
import Link from "next/link";

interface Props {
    image: string;
    title: string;
    text: string;
    url: string;
}

const ProjectCard = ({ image, title, text,url }: Props) => {
    return (
        <div className="md:w-[450px] md:h-[280px] w-[300px] h-[200px] rounded-md cursor-pointer overflow-hidden shadow-lg">
        <div className="w-full h-full bg-cover bg-center relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
              <Link href={url} passHref>
                <button>Learn more</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white p-4">
          <h1 className="text-gray-800 text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-600">{text}</p>
        </div>
      </div>
    );
};

export default ProjectCard;
