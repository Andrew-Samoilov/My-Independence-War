import { getPostData } from '@/lib/posts'
import Head from 'next/head';

// const postData = getSortedPostsData();

export default async function Page({
    params: { id },
}: {
    params: { id: string }
}) {
    const postData = await getPostData(id);

    return (
        <div>
            <Head>
                <title>{postData.id}</title>
            </Head>
            <p></p>
        </div>
    )
}