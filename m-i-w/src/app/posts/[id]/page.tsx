import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import { getAllPostIds, getPostData } from "@/lib/posts";

interface PostData {
    content: string;
    frontmatter: {
        title: string;
    };
}

export function generateStaticParams() {
    const res = getAllPostIds();
    return res;
}

export default function Post({ params }: { params: { id: string } }) {
    const { id } = params;
    const postFilePath = path.join(process.cwd(), 'posts', `${id}.md`);
    // console.log(`postFilePath ${postFilePath}`);
    const fileContents = fs.readFileSync(postFilePath, 'utf-8');
    const { content, data } = matter(fileContents);
    // console.log(`content ${content}`);
    return (
        <div>
            <h1 className='text-center text-2xl'>{data.title}</h1>
            <div className='flex justify-between'>
                <div>{data.place}</div>
                <data>{data.date}</data>
            </div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

// export function getStaticProps({ params }: any) {
//     const postFilePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
//     console.log(`postFilePath ${postFilePath}`);
//     const fileContents = fs.readFileSync(postFilePath, 'utf-8');
//     const { content, data } = matter(fileContents);
//     console.log(`content ${content}`);
//     return {
//         props: {
//             content,
//             frontmatter: data,
//         },
//     };
// }
