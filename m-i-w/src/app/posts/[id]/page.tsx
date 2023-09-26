import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Date from '@/components/date';
import Image from 'next/image';

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
        <div className='container mx-auto md:px-6'>
            <h1>{data.title}</h1>
            <div className='flex justify-between pb-6'>
                <div>{data.place}</div>
                <Date dateString={data.date} />
            </div>
            <ReactMarkdown
                components={{
                    img: (props) => (
                        <Image src={props.src} alt={props.alt} width={1200} />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
