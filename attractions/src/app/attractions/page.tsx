"use client"
import React from 'react'
import { AttractionDto } from '../models/attractionsModel';
import Link from 'next/link';

type Props = {}

export default async function Attractions({ }: Props) {

    const result = await fetch("http://localhost:3333/attractions")
    const data = await result.json();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((attr: AttractionDto) => (
                <div className="col m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={attr.id}>
                    <Link href={`/attractions/${attr.id}`} key={attr.id}>
                        <img className="rounded-t-lg" src={attr.coverimage} alt={attr.name} />
                    </Link>
                    <div className="p-5">
                        <Link href={`/attractions/${attr.id}`} key={attr.id}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{attr.name}</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{attr.detail}</p>
                        <Link href={`/attractions/${attr.id}`} key={attr.id} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>

                        <Link href={`/edit/${attr.id}`} key={attr.id} className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" viewBox="0 0 50 50" className='ml-2'>
                                <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
                            </svg>
                        </Link>

                    </div>
                </div>
            ))}

        </div>

    )
}

