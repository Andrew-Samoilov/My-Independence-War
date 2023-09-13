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


export default function TimeLine() {
    return (
        <section>
            <h1>Time line</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda saepe, aperiam veniam consectetur alias ipsam dolorem quod, omnis facilis reiciendis distinctio tempore? Labore error cum quibusdam, similique maxime iste!</p>
        </section>
    )
}
