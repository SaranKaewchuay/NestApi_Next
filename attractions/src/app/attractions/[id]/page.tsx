import React from 'react'

import MapBar from '../../../../component/map'

type Props = {
  params: any
}

export default async function Attractions({ params }: Props) {

  const result = await fetch("http://localhost:3333/attractions/" + params.id)
  const data = await result.json();

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 m-5">
      <div>
        <figure className="max-w-lg" style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center" }}>
          <img className="h-auto max-w-full rounded-lg" src={data.coverimage} alt="image description" />
        </figure>

        <p className="m-5 text-sm text-center text-gray-500 dark:text-gray-400" style={{ fontSize: "50px" }}>{data.name}</p>
        <div>
          <MapBar latitude={data.latitude} longitude={data.longitude} />
        </div>
      </div>
      <div>
        <div id="alert-additional-content-5" className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
          <div className="flex items-center">
            <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h1 className="text-lg font-medium text-gray-800 dark:text-gray-300">{data.name}</h1>
          </div>
          <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
            {data.detail}
          </div>
        </div>

        <div id="alert-additional-content-5" className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
          <div className="flex items-center">
            <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h1 className="text-lg font-medium text-gray-800 dark:text-gray-300">{data.name}</h1>
          </div>
          <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
            {data.detail}
          </div>
        </div>
        <div id="alert-additional-content-5" className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
          <div className="flex items-center">
            <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h1 className="text-lg font-medium text-gray-800 dark:text-gray-300">{data.name}</h1>
          </div>
          <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
            {data.detail}
          </div>
        </div>
      </div>

    </div>
  )
}