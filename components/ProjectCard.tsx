import React from 'react';

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
    return (
        <div className='w-[450px] h-[280px] rounded-md cursor-pointer overflow-hidden shadow-lg'>
            <div className='w-full h-full bg-cover bg-center relative'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300'>
                    <div className='absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold'>
                        Learn more &gt;
                    </div>
                </div>
            </div>
            <div className='bg-white p-4'>
                <h1 className='text-gray-800 text-2xl font-semibold mb-2'>{title}</h1>
                <p className='text-gray-600'>{text}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
