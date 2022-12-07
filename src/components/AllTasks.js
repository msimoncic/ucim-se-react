import "./AllTasks.css"
import data from "../data"
import React from 'react'
import { useState } from "react"

const AllTasks = () => {
    const [myTasks, setMyTasks] = useState(data)

    const tasksHandler = (idecko) => {    
        const filteredTasks = myTasks.filter( (oneTask) => {
            return oneTask.id !== idecko
        } )
        setMyTasks(filteredTasks)
    }

    const allDeleteHandler = () => {
        setMyTasks([])
    }

  return (
    <div>
        {
            myTasks.map( (oneTask) => {
                const {id, name} = oneTask

                return (
                    <div className="one-task" key={id}>
                        <h4>{name}</h4>
                        <button type="button" onClick={() => tasksHandler(id)}>Vymazat</button>
                    </div>
                )
            } )
        }
        <button type="button" className="main-button" onClick={allDeleteHandler}>Vše vymazat</button>
    </div>
  )
}

export default AllTasks