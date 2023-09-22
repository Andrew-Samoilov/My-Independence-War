export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    return (
        <>
        <div>
            <h1>Pages № {id}</h1>
            </div>
        </>
    )
}
