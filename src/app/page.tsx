import Link from "next/link";
import MyGallery from "@/components/myGalery/MyGallery";
import LogoClouds from "@/components/logo-coluds/logo-clouds";

export default function Home({ pageProps }: any) {
  return (
    <main className="flex flex-col items-center justify-between p-0 text-center bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
      <section
        className="rounded-lg p-8 lg:max-w-5xl 2xl:max-w-7xl sm:grid gap-8 lg:grid-cols-2 lg:items-center bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
        <div>
          <h2>Hi there!</h2>
          <h3 className="lg:pb-10">
            This page uses cutting-edge <span className="text-main-color">(React, Next JS, TypeScript, Tailwind)</span> technologies.
          </h3>
          <hr className="-z-10 lg:hidden my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:bg-neutral-800" />
        </div>
        
        <div>
          <h3 className="xl:px-8">
            Content talking some of my stories about the Ukraine Independence War.
          </h3>
          <Link
            type="button"
            href='./time-line'
            className="rounded bg-main-color px-6 pb-2 pt-2.5 text-xl font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-teal-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Learn more
          </Link>
        </div>
      </section>
      <section>
        <MyGallery />
      </section>
      <section>
        <LogoClouds />
      </section>
    </main>
  )
}
