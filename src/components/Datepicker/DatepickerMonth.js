import React from 'react';

import styled from 'styled-components';
import DatepickerWeek from './DatepickerWeek';
import DatepickerDay from './DatepickerDay';

const WeekdayContainer = styled.div`
   display: flex;
   flex-direction: row;
   margin: 16px 0 8px;
`;

const Week = styled.div`
    display: flex;

    &:last-of-type{
        border-bottom: 1px solid #15bfea;
   }
`;



const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

class DatepickerMonth extends React.Component {
    constructor(props){
        super(props);
        this.renderWeek = this.renderWeek.bind(this);
    }

    

    render(){

        const WeekdaysMarkup = weekdays.map(weekday => {
            return(
                <DatepickerWeek title={weekDayAbbr(weekday)}></DatepickerWeek>
            )
        });

        const weeks = getWeeksForMonth(this.props.date.getMonth(), this.props.date.getFullYear());
        const WeeksMarkup = weeks.map((week, index) => {
            return(
                <Week className="row" key={index}>{week.map(this.renderWeek)}</Week>
            )
            });
        return (<React.Fragment>
            <WeekdayContainer>{WeekdaysMarkup}</WeekdayContainer>
            {WeeksMarkup}
        </React.Fragment>
        )
    }

    renderWeek(fullDate){
        const date = fullDate != null && fullDate;
        const DayData = {
            date         : fullDate != null && fullDate,
            selected     : fullDate != null && sameDay(fullDate, this.props.oldDate),
            onDayClick   : this.props.function,
            closeCalendar: this.props.closeCalendar,
            changeOldDate: this.props.changeOldDate,

        };
        return <DatepickerDay {...DayData}></DatepickerDay>
    }
}

function sameDay(first, second){
    const firstDay = {
        day   : first.getDate(),
        month : first.getMonth(),
        year  : first.getFullYear()
    }

    const secondDay = {
        day   : second.getDate(),
        month : second.getMonth(),
        year  : second.getFullYear()
    }
    if(JSON.stringify(firstDay) === JSON.stringify(secondDay)){
        return true;
    }else{
        return false;
    }
}

function weekDayAbbr(weekday){
    return weekday.substring(0,2);
}

const WEEK_LENGTH = 7;
function getWeeksForMonth(month, year){
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [[]]

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for(let i=0; i<firstDayOfWeek; i++) {
        currentWeek.push(null);
    }

    while(currentDate.getMonth() === month) {
        if(currentWeek.length === WEEK_LENGTH) {
            currentWeek = [];
            weeks.push(currentWeek)
        }

        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() + 1);
    }

    while(currentWeek.length < WEEK_LENGTH) {
        currentWeek.push(null);
    }    

    return weeks;
}

export default DatepickerMonth;