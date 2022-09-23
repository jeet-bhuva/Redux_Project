import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../Actions/index'
import './todo.css'

const Todo = () => {

    const [data, setData] = useState('')
    const list = useSelector((state) => state.todoreducer.list)
    const dispatch = useDispatch()

    return (
        <>
            <div className='App'>
                <div className="main-div">
                    <div className='child-div'>
<br/>                        
             
                        <figure className='titel'>
                            <figcaption className='titel1'><hr/>Add Your List <hr/></figcaption>
                        </figure>

                    

                        <div className='additem'>
                            <input type='taxt' placeholder=' Add Items' value={data} onChange={(event) => setData(event.target.value)} />
                            <button onClick={() => dispatch(addTodo(data), setData(''))}>Add</button>
                        </div>

                        <div>
                            {
                                list.map((e) => {
                                    return (
                                        <div key={e.id}>
                                            <h3>{e.datas}</h3>
                                            <div>
                                                <button onClick={() => dispatch(deleteTodo(e.id))}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
<br/>
                        <div className='remove_btn'>
                            <button type='button' onClick={()=>dispatch(removeTodo())} >All Remove List</button>
                        </div>
<br/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo 