import React from 'react';
import { format } from 'date-fns';

const WeekBooking = ({ booking }) => {

  const bookingDate = new Date(booking.year, booking.month - 1, booking.day, booking.hour, booking.minute);
  console.log(bookingDate);
  const bookingDay = format(bookingDate, "EEE");
  const endTime = booking.hour + 1;
	return (
		<div className={`booking ${bookingDay} start${booking.hour}${booking.minute} end${endTime}${booking.minute} `}>
			<h4> Interview with {booking.coach.first_name}</h4>
		</div>
	);
};

export default WeekBooking;