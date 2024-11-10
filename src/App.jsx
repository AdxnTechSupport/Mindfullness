import Button from './Button/Button.jsx'
import {ScheduleXCalendar, useCalendarApp} from "@schedule-x/react";
import {createViewWeek, createViewMonthGrid, createViewMonthAgenda} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'
import Pomodoro from './Pomodoro/Pomodoro.jsx'


function App() {
  const calendar = useCalendarApp({
    views: [
      createViewWeek(),
      createViewMonthGrid()
    ],
    events: [ //from api
      {
        id:1,
        title: 'My new event',
        start: '2025-01-01 00:00',
        end: '2025-01-01 02:00',
        description: 'My cool des'
      }
    ],
    selectedDate: '2025-01-01',
    plugins: [ 
      
    ]
  })
  return(
    <>
    <Pomodoro/>
    {/* <ScheduleXCalendar calendarApp={calendar} /> */}
    </>
    
    
    
  );
}

export default App
