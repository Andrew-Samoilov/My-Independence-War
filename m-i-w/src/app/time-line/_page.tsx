// import { loadPosts } from './load-posts'
// import type { NextPage, GetStaticProps } from "next";

// interface HomeProps {
//     host: string
// }

// // This function runs only on the server side
// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//     // Instead of fetching your `/api` route you can call the same
//     // function directly in `getStaticProps`
//     const posts = await loadPosts()

//     // Props returned will be passed to the page component
//     return { props: { posts } }
// }


// export default function TimeLine: NextPage<HomeProps> = (props) => {
//     console.log('1', props);
//     return (
//         <div>
//             {props}
//         </div>
//     )
// }
