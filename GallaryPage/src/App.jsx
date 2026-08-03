import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [index, setIndex] = useState(2);
  const [data, setData] = useState([]); //as resp is -- array of objects, so empty []

  async function getImg() {
    const resp = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=16`,
    );
    setData(resp.data);
  }

  useEffect(() => {
    getImg();
  }, [index]);

  let printData = <h2 className="-translate-x-1/2 -translate-y-1/2 
  text-3xl  text-gray-400 absolute top-1/2 left-1/2">
    Loading <span className="font  text-5xl">...</span></h2>
  
  if(data.length>0){

   printData= data.map((elem)=>{
      return <div key={elem.id}>
        <Card elem={elem} />
      </div>
    })
  }



  return (
    <div className="p-10 h-screen bg-black text-white">

      <div className=" h-[94.5%] flex flex-wrap gap-6 overflow-auto ">
      {printData}
      </div>

      <div className="flex justify-center mt-5 gap-3">

        <button style={{opacity: index == 2 ? 0.7 : 1,
                        cursor : index == 2 ? "not-allowed" : "pointer"
        }}
          className="bg-amber-600 px-5 py-1.5 rounded cursor-pointer active:scale-95 font-medium text-2xl"
          onClick={() => {
            if (index >= 3) {
              setData([])
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>

        <h2 className="font-medium text-2xl pt-1  text-gray-500">
          Page {index-1}
        </h2>
        <button
          className="bg-amber-600 px-5 py-1.5 rounded cursor-pointer active:scale-95 font-medium text-2xl"
          onClick={() => {
            setData([])
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
