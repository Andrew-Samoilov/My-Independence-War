import Link from 'next/link';
import Date from '@/components/date';
import Image from 'next/image';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Time Line',
}

import { getSortedPostsData } from '@/lib/posts';

export default function TimeLine() {
    const allPostsData = getSortedPostsData();

    return (
        <section className='container mx-auto md:px-6'>

            <h1 className='text-center text-2xl font-bold p-6'>Time line</h1>
            <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
                {allPostsData.map(({ id, date, title, titleImage }: any) => (
                    <li key={id} className="list-none">
                        <Link href={`/posts/${id}`} >
                            {!titleImage ? '' :
                                <Image
                                    src={titleImage}
                                    alt={title}
                                    width={1080}
                                    height={100}
                                />}
                            <h2 className='m-0'>{title}</h2>
                            <small className='text-sm'>
                                <Date dateString={date} />
                            </small>
                            
                        </Link>
                    </li>
                ))}
            </ul>

            <hr />
            <small>
                <p className='italic text-right w-100 bg-gray-200 dark:bg-neutral-600 dark:text-neutral-200'>Items loaded from separate *.md files in folder</p>
            </small>
        </section>
    )
}
