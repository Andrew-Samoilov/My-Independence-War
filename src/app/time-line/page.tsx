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
    // console.log(allPostsData);

    return (
        <section>
            <h1 className='text-center'>Time line</h1>
            <ul className='grid z-10 grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
                {allPostsData.map(({ id, date, title, titleImage }: any) => (
                    <li key={id} className="list-none relative bg-neutral-600/50">
                        <Link href={`/posts/${id}`} >
                            {!titleImage ? '' :
                                <Image
                                    src={titleImage}
                                    alt={title}
                                    width={1080}
                                    height={100}
                                />}
                            <h2 className='text-white bg-neutral-600/50 p-2 m-0 absolute left-2 top-2'>{title}</h2>
                            <small className='text-white bg-neutral-600/50 p-2 text-sm absolute right-0 bottom-2'>
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
