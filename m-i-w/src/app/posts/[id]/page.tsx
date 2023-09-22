import { getAllPostIds } from "@/lib/posts"

export function generateStaticParams() {
    const res = getAllPostIds();
    // return [{ id: '1' }, { id: '2' }, { id: '3' }];
    return res;
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    return (
        <>
        <div>
            <h1>Pages id {id}</h1>
            </div>
        </>
    )
}
