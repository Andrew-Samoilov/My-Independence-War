import Head from 'next/head';
import Date from '../../components/date';

import { getAllPostIds, getPostData } from '../../lib/posts';

// import type {
//     InferGetStaticPropsType,
//     GetStaticProps,
//     GetStaticPaths,
// } from 'next'

export default function Post({ postData }:any) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className='text-2xl'>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    console.log(`///---/// params ${params}`);
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
