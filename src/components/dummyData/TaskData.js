import React from 'react'
import staffSvg from '../../assets/staff-icon.svg'
import notaccept from '../../assets/not-accepted.svg'
import recur from '../../assets/recurring.svg'
import clock from '../../assets/clock.svg'
import guest from '../../assets/guest-task.svg'
import internal from '../../assets/internal-task.svg'
import ongoing from '../../assets/ongoing.svg'
import onetime from '../../assets/onetime.svg'
import calender from '../../assets/date-icon.svg'
import btn from '../../assets/card-btn.svg'
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'
import card4 from '../../assets/card4.svg'
import card5 from '../../assets/card1-col2.svg'
import card6 from '../../assets/card2-col2.svg'
import card7 from '../../assets/card3-col2.svg'
import card8 from '../../assets/card4-col2.svg'
import card9 from '../../assets/card5-col2.svg'
import card10 from '../../assets/card1-col3.svg'
import card11 from '../../assets/card2-col3.svg'
import card12 from '../../assets/card3-col3.svg'
import card13 from '../../assets/card4-col3.svg'
import card14 from '../../assets/card5-col3.svg'



function TaskData() {
    const col1 = [
        {
            cardid: 1,
            taskId: 1,
            staffleft: staffSvg,
            staffright: [notaccept, recur],
            duration: [clock, "20min"],
            date: calender,
            taskfor: guest,
            btn: btn,
            card: card1
        },
        {
            cardid: 2,
            taskId: 1,
            staffleft: staffSvg,
            staffright: [notaccept, recur],
            duration: [clock, "1min"],
            date: calender,
            taskfor: internal,
            btn: btn,
            card: card2
        },
        {
            cardid: 3,
            taskId: 2,
            staffleft: staffSvg,
            staffright: [ongoing, onetime],
            duration: [clock, "20min"],
            date: calender,
            taskfor: internal,
            btn: "",
            card: card3
        },
        {
            cardid: 4,
            taskId: 3,
            staffleft: staffSvg,
            staffright: [ongoing, onetime],
            duration: [clock, "20min"],
            date: calender,
            taskfor: internal,
            btn: "",
            card: card4
        }
    ]

    const col2 = [
        {
            cardid: 1,
            taskId: 3,
            card: card5
        },
        {
            cardid: 2,
            taskId: 3,
            card: card6
        },
        {
            cardid: 3,
            taskId: 3,
            card: card7
        },
        {
            cardid: 4,
            taskId: 3,
            card: card8
        },
        {
            cardid: 5,
            taskId: 3,
            card: card9
        }
    ]
    const col3 = [
        {
            cardid: 1,
            taskId: 5,
            card: card10
        },
        {
            cardid: 2,
            taskId: 6,
            card: card11
        },
        {
            cardid: 3,
            taskId: 6,
            card: card12
        },
        {
            cardid: 4,
            taskId: 5,
            card: card13
        },
        {
            cardid: 5,
            taskId: 5,
            card: card14
        }
    ]

    return [col1, col2, col3]
}

export default TaskData
