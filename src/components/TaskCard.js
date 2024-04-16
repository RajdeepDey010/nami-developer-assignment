import React, { useState } from 'react'
import '../styles/TaskCard.css'
import StatusData from './dummyData/statusData'
import Hello from './temp/Hello';

function TaskCard() {
    const data = StatusData();
    const [select, setSelect] = useState(false);
    const [selectId, setSelectId] = useState(null)

    return (
        <div className='task-header'>
            <span>Tasks of the day</span>
            <div className="recomends">
                {
                    data.map((tmpData) => {
                        return (
                            <button
                                className='recomendBtn'
                                value={tmpData.status}
                                onClick={()=>{
                                    setSelect(true)
                                    setSelectId(tmpData.id)
                                }}
                            >
                                {tmpData.status}
                            </button>

                        )
                    })
                }
            </div>
            <div className="task-lists">
                {
                    select?(
                        <>
                            <Hello taskId={selectId} toSort={select}/>
                        </>
                    ):(
                        <>
                            <Hello taskId={selectId} toSort={select}/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default TaskCard
