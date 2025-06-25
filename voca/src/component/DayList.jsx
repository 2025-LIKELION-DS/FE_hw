import { Link } from "react-router-dom"; // 
import useFetch from "../hooks/useFetch"; // 
import { DayListContainer, DayListItem, DayLink } from '../styles/GlobalStyles';


export default function DayList() { // 
  const days = useFetch("http://localhost:3001/days"); // 

  if (days.length === 0) { // 
    return <span>Loading...</span>; // 
  }

  return ( 
    <DayListContainer> 
      {days.map((day) => ( 
        <DayListItem key={day.id}> 
          <DayLink as={Link} to={`/day/${day.day}`}>Day {day.day}</DayLink>
        </DayListItem>
      ))}
    </DayListContainer>
  );
}