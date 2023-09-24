import Link from 'next/link';
import Date from '@/components/date';

import { getSortedPostsData } from '@/lib/posts';

export default function TimeLine() {
    const allPostsData = getSortedPostsData();

    return (
        <section>
            <h1 className='text-center text-2xl font-bold p-6'>Time line</h1>
            <ul className='grid gap-6'>
                {allPostsData.map(({ id, date, title }: any) => (
                    <li key={id} >
                        <Link href={`/posts/${id}`} className='text-xl'>{title}</Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>

            <hr />
            <small>
                <p className='italic bg-gray-200 dark:bg-neutral-600 dark:text-neutral-200'>Items loaded from separate *.md files in folder</p>
            </small>
        </section>
    )
}
