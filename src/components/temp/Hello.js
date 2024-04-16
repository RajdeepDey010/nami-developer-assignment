import React from 'react'
import TaskData from '../dummyData/TaskData'
import '../../styles/Hello.css'

function Hello(props) {

  const [col1, col2, col3] = TaskData()


  return (
    <div>
      {
        props.toSort ? (
          <div className='sort-view'>
            <div className="col1">
              {
                col1.map((task)=>{
                  if(task.taskId === props.taskId)
                  {
                    return (
                      <div className="card">
                        <img src={task.card} alt="task.cardid" />
                      </div>
                    )
                  }
                  else{
                    return(
                      <></>
                    )
                  }
                })
              }
            </div>
            <div className="col2">
            {
                col2.map((task)=>{
                  if(task.taskId === props.taskId)
                  {
                    return (
                      <div className="card">
                        <img src={task.card} alt="task.cardid" />
                      </div>
                    )
                  }
                  else{
                    return(
                      <></>
                    )
                  }
                })
              }
            </div>
            <div className="col3">
            {
                col3.map((task)=>{
                  if(task.taskId === props.taskId)
                  {
                    return (
                      <div className="card">
                        <img src={task.card} alt="task.cardid" />
                      </div>
                    )
                  }
                  else{
                    return(
                      <></>
                    )
                  }
                })
              }
            </div>
          </div>
        ) : (
          <div className='task-view'>
            <div className="col1">
              {/* <div className="card1" id={col1[0].id}>
                <div className="row1">
                  <img src={col1[0].staffleft} alt="staff" />
                  <p className="rajesh">Rajesh</p>
                  <div className="reddot"></div>
                  <img src={col1[0].staffright[0]} className='notaccept' alt="not accepted" />
                  <img src={col1[0].staffright[1]} className='recur' alt="recurring" />

                  <span className="clock">
                    <img src={col1[0].duration[0]} alt="clock" />
                    <p>20min</p>
                  </span>
                </div>
                <div className="row2">
                  <span><p>Routine Cleaning</p></span>
                  <img src={col1[0].taskfor} alt="guest" />
                </div>
                <div className="row3">
                  <span className='left'>
                    <img src={col1[0].date} alt="calender" />
                    21 Jul 2024 | 3:00 am
                  </span>
                  <span className='right'># 68988</span>
                </div>
                <div className="row4">
                  <span className="left">From:Pantry</span>
                  <span className="right">To:Reception</span>
                </div>
                <div className='btn'>
                  <img src={col1[0].btn} alt="button" />
                  <p>Notify Staff</p>
                </div>

              </div>
              <div className="card2">
              <div className="row1">
                  <img src={col1[0].staffleft} alt="staff" />
                  <p className="rajesh">Rajesh</p>
                  <div className="reddot"></div>
                  <img src={col1[0].staffright[0]} className='notaccept' alt="not accepted" />
                  <img src={col1[0].staffright[1]} className='recur' alt="recurring" />

                  <span className="clock">
                    <img src={col1[1].duration[0]} alt="clock" />
                    <p>1min</p>
                  </span>
                </div>
              </div> */}
              {
                col1.map((task) => {
                  return (
                    <div className="card">
                      <img src={task.card} alt="task.cardid" />
                    </div>
                  )
                })
              }
            </div>

            <div className="col2">
              {
                col2.map((task) => {
                  return (
                    <div className="card">
                      <img src={task.card} alt="task.cardid" />
                    </div>
                  )
                })
              }
            </div>
            <div className="col3">
              {
                col3.map((task) => {
                  return (
                    <div className="card">
                      <img src={task.card} alt="task.cardid" />
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Hello
