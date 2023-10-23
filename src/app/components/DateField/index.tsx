import { ReactNode, useState } from "react";
import Calendar from "react-calendar";
import { CalendarContainer, Container, IconContainer, TitleContainer } from "./styles";
import 'react-calendar/dist/Calendar.css';

interface DateFieldProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  open: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  icon?: ReactNode;
}

export const DateField = (props: DateFieldProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = (date: any) => {
        setSelectedDate(date)
        props.onChange({
          target: {
            value: date.toISOString().split('T')[0],
          },
        } as React.ChangeEvent<HTMLInputElement>)
        props.open
    }

  return (
    <Container>
      <IconContainer onClick={props.onClick}>{props.icon}</IconContainer>
        <input
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type="text"
          placeholder={props.placeholder}
          maxLength={8}
        />
        {props.open && (
            <CalendarContainer>
                <TitleContainer>{props.placeholder}</TitleContainer>
                <Calendar
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </CalendarContainer>
        )}
    </Container>
  );
};
