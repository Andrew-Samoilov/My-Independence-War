import Link from 'next/link';
import Date from '@/components/date';

import { getSortedPostsData } from '@/lib/posts';

interface IpostItem {
    date: string;
    title: string;
    place: string;
}

interface IMd {
    id: string;
    title: string;
    date: string;
}

import data from './all-posts.json';

export default function TimeLine() {
    // console.log(`!/ posts /!`);
    // console.log(data);
    const allPostsData = getSortedPostsData();
    // console.log(`!/ allPostsData /!`);
    // console.log(allPostsData);
    // console.log(`!/ allPostsData /!`);

    return (
        <section>
            <h1>Time line</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda saepe, aperiam veniam consectetur alias ipsam dolorem quod, omnis facilis reiciendis distinctio tempore? Labore error cum quibusdam, similique maxime iste!</p>

            {data.posts?.map((post) => (
                <div key={post.date} className='p-2 border-solid border-2 border-gray-200 dark:border-gray-600'>
                    <h2 className='text-xl'>{post.title}</h2>
                    <div className='text-right italic text-m'>
                        <p>{post.date}</p>
                        <div>{post.place}</div>
                    </div>
                    <hr />
                </div>
            ))
            }
            <hr />
            <p className='italic bg-gray-200 dark:bg-neutral-600 dark:text-neutral-200'>Items loaded with simple import</p>
            <hr />
            <h2>Blog</h2>
            <ul>
                {/* {allPostsData?.map(({ id, date, title }: any) => (
                    <li key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))} */}
                {allPostsData.map(({ id, date, title }: any) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>

            <hr />
            <p className='italic bg-gray-200 dark:bg-neutral-600 dark:text-neutral-200'>Items loaded from separate *.md files in folder</p>
        </section>
    )
}
