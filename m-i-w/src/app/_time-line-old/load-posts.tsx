// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory

export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('./24.json')
    const data = await res.json()
    
    console.log(`Data ${data}`);

    return data
}
