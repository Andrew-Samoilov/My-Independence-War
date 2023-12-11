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

        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {allPostsData.map(({ id, date, title, titleImage }: any, index) => (
            <li key={id} className="list-none">
              <Link href={`/posts/${id}`}>
                <small className="p-2 text-sm">
                  <Date dateString={date} />
                </small>
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
                <h2 className="p-2 m-0">{title}</h2>
              </Link>
            </li>
          ))}
        </ul>

        <hr />
        <br />

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
                  <h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
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
          {/* Item #1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">Order Placed</div>
                <time className="font-caveat font-medium text-slate-500">
                  08/06/2023
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* Item #2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-eindigo-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
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
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">Order Shipped</div>
                <time className="font-caveat font-medium text-indigo-500">
                  09/06/2023
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* Item #3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
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
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">In Transit</div>
                <time className="font-caveat font-medium text-indigo-500">
                  10/06/2023
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* Item #4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-amber-400 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
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
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">Out of Delivery</div>
                <time className="font-caveat font-medium text-indigo-500">
                  12/06/2023
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* Item #5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">Delivered</div>
                <time className="font-caveat font-medium text-amber-500">
                  Exp. 12/08/2023
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
        </div>

        <hr />

        <small>
          <p className="italic text-right w-100 bg-gray-200 dark:bg-neutral-600 dark:text-neutral-200">
            Items loaded from separate *.md files in folder
          </p>
        </small>
      </section>
    );
}
