import React from 'react'

function Popup({open,onclose,data}) {
  return (
    <div>
            <div onClick={onclose} className={`fixed inset-0 justify-center items-center transition-colors ${open ? "visible bg-black/20":"invisible"} `}>

        <div onClick={(e)=>e.stopPropagation()} className={`  h-{64}  absolute inset-0 bg-white rounded-xl shadow p-8 transition-all   text-5xl ${open ? "scale-50 opacity-100":"scale-125-opacity-0"}`}  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div><h1 class="text-black">You haven't entered your email id yet</h1></div>
        <button onClick={onclose} type="button" class="absolute top-0 right-0 h-16 w-20 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-5xl">X</button>
        <div/>
    </div>
    </div>
   </div> 
  )
}

export default Popup