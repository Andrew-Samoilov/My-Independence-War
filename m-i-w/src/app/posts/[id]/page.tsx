import { getAllPostIds, getPostData } from "@/lib/posts"

export function generateStaticParams() {
    const res = getAllPostIds();
    // return [{ id: '1' }, { id: '2' }, { id: '3' }];
    return res;
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    async function fetchData() {
        try {
            const postData = (await getPostData(id));
            console.log('inside fetchData',postData); // Тут ви маєте доступ до отриманих даних
            return postData.contentHtml;
        } catch (error) {
            console.error(error); // Обробка помилки, якщо є
        }
    }

    let postData= fetchData();

    console.log(`post data ${postData}`);

    return (
        <>
            <div>
                <h1 className='text-center text-2xl'>Pages id {id}</h1>
                {postData}
            </div>
        </>
    )
}
