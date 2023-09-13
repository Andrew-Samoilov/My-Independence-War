// import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// type Repo = {
//     date: string
//     title: string
//     place: string
// }

// export const getStaticProps = (async (context) => {
//     const res = await fetch('./src/app/_files/24.json')
//     const repo = await res.json()
//     return { props: { repo } }
// }) satisfies GetStaticProps<{
//     repo: Repo
// }>

interface IpostItem {
    date: string;
    title: string;
    place: string;
}

import data from './all-posts.json';

export default function TimeLine() {
    console.log(`!/ posts /!`);
    console.log(data);

    return (
        <section className='p-2'>
            <h1>Time line</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda saepe, aperiam veniam consectetur alias ipsam dolorem quod, omnis facilis reiciendis distinctio tempore? Labore error cum quibusdam, similique maxime iste!</p>

            {data.posts?.map((post: IpostItem) => (
                <div key={post.date} className='p-2'>
                    <h2 className='text-xl'>{post.title}</h2>
                    <div className='text-right italic text-m'>
                        <p>{post.date}</p>
                        <div>{post.place}</div>
                    </div>
                    <hr/>
                </div>
            ))
            }

            <hr />
            <p className='italic bg-gray-200'>Items loaded with simple import</p>
        </section>
    )
}
