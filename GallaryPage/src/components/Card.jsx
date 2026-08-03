import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    
         <div >
              <a href={props.elem.url} target="_blank">
                <div className="w-84 h-80  overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    className="w-full h-full object-cover"
                    src={props.elem.download_url}
                  />
                </div>
              </a>
              <h3 className="my-3 text-center hover:scale-115 cursor-default text-gray-500 font-medium ">
                {props.elem.author}
              </h3>
            </div>
   
  )
}

export default Card