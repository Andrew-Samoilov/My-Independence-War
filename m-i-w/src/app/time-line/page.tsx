import Link from 'next/link';
import Date from '@/components/date';

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
                {allPostsData.map(({ id, date, title }: any) => (
                    <li key={id} className="list-none">
                        <Link href={`/posts/${id}`} className='text-3xl mb-3 leading-snug'>{title}</Link>
                        <br />
                            <Date dateString={date} />
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
