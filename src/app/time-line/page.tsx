import Link from 'next/link';
import Date from '@/components/date';
import Image from 'next/image';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Time Line',
}

import { getSortedPostsData } from '@/lib/posts';

export default function TimeLine() {
    const allPostsData = getSortedPostsData();
    // console.log(allPostsData);

    return (
      <section>
        <h1 className="text-center">Time line</h1>

        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          {allPostsData.map(({ id, date, title, titleImage }: any, index) => (
            <li key={id} className="list-none">
              <Link href={`/posts/${id}`}>
                <div className="flex-start flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">
                    <Date dateString={date} />
                  </p>
                </div>

                <div className="mb-6 ml-4 mt-2">
                  <h2 className="mb-1.5 text-xl font-semibold">{title}</h2>
                  {!titleImage ? (
                    ""
                  ) : (
                    <Image
                      src={titleImage}
                      alt={title}
                      width={1080}
                      height={100}
                      loading={index <= 1 ? "eager" : "lazy"}
                      priority={index <= 1}
                    />
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <hr />
        <br />

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {allPostsData.map(({ id, date, title, titleImage }: any, index) => (
            <div
              key={id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-slate-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>
              {/* Card */}
              <Link
                href={`/posts/${id}`}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
              >
                <div className="flex justify-between flex-col space-x-2 mb-1">
                  <h2 className=" text-slate-900 m-0 pb-1 font-semibold">
                    {title}
                  </h2>
                  {/* <time className="font-medium text-slate-500"> */}
                  <Date dateString={date} />
                </div>
                {!titleImage ? (
                  ""
                ) : (
                  <Image
                    src={titleImage}
                    alt={title}
                    width={1080}
                    height={100}
                    loading={index <= 1 ? "eager" : "lazy"}
                    priority={index <= 1}
                    className="hover:scale-105 duration-300"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        <small>
          <p className="italic text-right w-100 bg-gray-200 dark:bg-neutral-600 dark:text-neutral-200">
            Items loaded from separate *.md files in folder
          </p>
        </small>
      </section>
    );
}
