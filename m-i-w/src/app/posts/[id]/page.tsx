import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Date from '@/components/date';

import { getAllPostIds } from "@/lib/posts";

interface PostData {
    content: string;
    frontmatter: {
        title: string;
    };
}


import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    
    const { id } = params;
    const postFilePath = path.join(process.cwd(), 'posts', `${id}.md`);
    const fileContents = fs.readFileSync(postFilePath, 'utf-8');
    const { data } = matter(fileContents);

    const previousImages = (await parent).openGraph?.images ?? []

    return {
        title: data.title,
        openGraph: {
            images: [data.titleImage, ...previousImages],
            title: data.title,
            type: 'website',
        },
    }
}


export function generateStaticParams() {
    const res = getAllPostIds();
    return res;
}

export default function Post({ params, searchParams }: Props) {
    const { id } = params;
    const postFilePath = path.join(process.cwd(), 'posts', `${id}.md`);
    // console.log(`postFilePath ${postFilePath}`);
    const fileContents = fs.readFileSync(postFilePath, 'utf-8');
    const { content, data } = matter(fileContents);

    // console.log(`content ${content}`);
    return (
        <article className='container mx-auto md:px-6 mb-20'>
            <h1>{data.title}</h1>
            <div className='flex justify-between pb-6 max-w-2xl mx-auto text-lg'>
                <div>{data.place}</div>
                <Date dateString={data.date} />
            </div>
            <ReactMarkdown className='max-w-2xl mx-auto text-lg'>
                {content}
            </ReactMarkdown>
        </article>
    );
}
