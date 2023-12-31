import React from 'react';
import { images } from './myGalleryData';
import Image from 'next/image';

export default function MyGallery() {
    return (
        <div className="mx-auto">
            <div className="flex flex-wrap">
                {images.map((image, index) => (
                    <div key={image.id} className="flex w-full md:w-1/2 lg:w-1/3 flex-wrap p-1 md:p-2">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.imgWidth}
                            height={image.imgHeight}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            priority={index === 0}
                            className="block h-full w-full rounded-lg object-cover object-center"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
