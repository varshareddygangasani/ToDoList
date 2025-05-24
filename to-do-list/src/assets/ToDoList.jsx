import React, { useState } from 'react'

function ToDoList() {
    const [newtask,setnewtask]=useState(['app','boo'])
    function changeinput(event){
        setnewtask(event.target.value)
    }
  return (
    <div>
        <div>
            <h1>To-Do-List</h1>
            <input type='text' value={newtask} placeholder='Enter a task' onChange={changeinput}/>
            <button>add</button>
        </div>
        <div>
            <ol>
                {newtask.map((task ,index)=><li key='index'>{task}<button>Delete</button><button>up</button><button>down</button></li>)}
            </ol>
            
        </div>

    </div>
  )
}

export default ToDoList
