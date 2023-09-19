"use client"
import { useState } from "react";
import { Bar } from '../../component/bar'

function Home(props: any) {
  const [couter, setCouter] = useState(0)
  return (
    <main>
      <div style={{ textAlign: "center" }}>
        <Bar couter={couter} />
        <div>
          <p style={{ fontSize: "100px", textAlign: "center" }}>
            Home
          </p>
          <p style={{ fontSize: "100px", textAlign: "center" }} className="mt-5">
            Couter : {couter}
          </p>

            <button onClick={() => setCouter(couter + 1)} type="submit" style={{ width: '500px', height: "200px", fontSize: "50px", textAlign: "center" }} className="m-1 place-items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Couter Add</button>
            <button onClick={() => setCouter(couter - 1)} type="submit" style={{ width: '500px', height: "200px", fontSize: "50px", textAlign: "center" }} className="m-1 place-items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Couter Delete</button>

        </div>
      </div>
    </main>
  );
}

export default Home