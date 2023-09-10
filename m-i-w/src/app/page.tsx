import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-xl">Main page</h1>
        <div className="mb-8 text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur quasi deserunt incidunt dolorum, vitae nihil, exercitationem voluptates quos commodi dolore temporibus cupiditate accusantium enim, culpa animi voluptate corporis consectetur?</p>
        </div>
      </main>
      <Footer/>
    </>
  )
}
