import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import * as Styled from "./styling";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS
} from "../../helpers/calendar";

class Calendar extends Component {
  
  state = { ...this.resolveStateFromProp(), today: new Date() };

  resolveStateFromDate(date) {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    };
  }

  resolveStateFromProp() {
    return this.resolveStateFromDate(this.props.date);
  }

  getCalendarDates = () => {
    const { current, month, year } = this.state;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  render() {
    return (
      <Styled.CalendarContainer>
        
        { this.renderMonthAndYear() }

        <Styled.CalendarGrid>
          <Fragment>
            { Object.keys(WEEK_DAYS).map(this.renderDayLabel) }
          </Fragment>

          <Fragment>
            { this.getCalendarDates().map(this.renderCalendarDate) }
          </Fragment>
        </Styled.CalendarGrid>
        
      </Styled.CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func
}

export default Calendar;