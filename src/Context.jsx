import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';


let TextContext = React.createContext(null);
export{TextContext}

function Context({children}) {
    
let [notes, setNotes] = useState([{
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis aspernatur doloribus nostrum vitae quia consequatur asperiores ipsa et maxime laudantium velit odit facilis ipsum totam quae, minus ex? Ipsum.",
  title: "feedback"
},
{
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis aspernatur doloribus nostrum vitae quia consequatur asperiores ipsa et maxime laudantium velit odit facilis ipsum totam quae, minus ex? Ipsum.",
  title: "feedback"
},
{
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis aspernatur doloribus nostrum vitae quia consequatur asperiores ipsa et maxime laudantium velit odit facilis ipsum totam quae, minus ex? Ipsum.",
  title: "feedback"
}

]
)

  return (
    <>
    <TextContext.Provider value={{notes, setNotes}}>
         {children}

    </TextContext.Provider>
     </>

  )
}

export default Context