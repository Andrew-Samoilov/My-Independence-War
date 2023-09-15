

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="flex flex-col items-center justify-between p-0 bg-neutral-50 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
        {/* <h1 className="text-2xl">Main page</h1> */}
        {/* <!-- Jumbotron --> */}
        <section
          className="bg-neutral-100 p-6 text-neutral-700 shadow-md dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
          <h2 className="mb-5 text-3xl font-semibold">Hi there!</h2>
          <p>
            This simple page uses cutting-edge <span className="text-teal-500">(React, Next JS, TypeScript, Tailwind, Tailwind elements)</span> technologies.
          </p>
          <hr
            className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
          <p className="mb-4">
            Content talking about some of my Ukraine Independence War stories.
          </p>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Learn more
          </button>
        </section>
        {/* <!-- Jumbotron --> */}

        {/* Content */}
        <div className="text-neutral-700 dark:text-neutral-200">
          <p className="my-4">Scroll down</p>
          <p className="mb-4">Scroll down</p>
          <p className="mb-4">Scroll down</p>
          <p className="mb-4">Scroll down</p>
          <p className="mb-4">Scroll down</p>
          <p className="mb-4">Scroll down</p>
          <p className="mb-4">Scroll down</p>
          <p className="mb-4">Scroll down</p>
        </div>
      </main>
      
    </>
  )
}
