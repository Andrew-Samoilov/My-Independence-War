import React from 'react';
import { images } from './myGalleryData';

export default function MyGallery() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                {images.map((image) => (
                    <div key={image.id} className="flex w-full md:w-1/2 lg:w-1/3 flex-wrap p-1 md:p-2">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="block h-full w-full rounded-lg object-cover object-center"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
