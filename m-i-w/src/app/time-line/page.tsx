import Link from 'next/link';
import Date from '@/components/date';

import { getSortedPostsData } from '@/lib/posts';

export default function TimeLine() {
    const allPostsData = getSortedPostsData();

    return (
        <section>
            <h1 className='text-center text-2xl'>Time line</h1>
            <hr />
            <ul>
                {allPostsData.map(({ id, date, title }: any) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`} className='text-xl'>{title}</Link>
                        <br />
                        <div className='text-right'>
                            <small>
                                <Date dateString={date} />
                            </small>
                        </div>
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
