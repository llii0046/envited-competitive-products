import EventInfoContainer from "../../Shares/EventInfoContainer";
import styled from "styled-components";
import { color } from "../../../styles/variables";
import EventInfoInput from "../../Shares/EventInfoInput";
import { useState } from "react";
import { ERouterType } from "../../../constant/router";
import { useNavigate } from "react-router-dom";
import Button from "../../Shares/Button";

const { darkPurple } = color;

const Container = styled.div`
  padding: 30px 160px;
`;

const PageTitle = styled.h2`
  color: ${darkPurple};
  font-size: 48px;
`;


const CreateEventPage = () => {
  const [eventName, setEventName] = useState<string>('');
  const router = useNavigate();

  const handleClick = () => {
    const path = `/${ERouterType.EVENT}`;
    router(path);
  }


  return (
    <Container>
      <PageTitle>Create your event</PageTitle>
      <EventInfoContainer title='Event name' >
        <EventInfoInput
          placeholder="Please enter event name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEventName(event.target.value)
          }
          value={eventName}
        />
      </EventInfoContainer>

      <EventInfoContainer title='Host name' >

      </EventInfoContainer>

      <EventInfoContainer title='Start time' >

      </EventInfoContainer>

      <EventInfoContainer title='End time' isOptional={true} >

      </EventInfoContainer>

      <EventInfoContainer title='Location' >

      </EventInfoContainer>

      <EventInfoContainer title='EventPhoto' isOptional={true}>

      </EventInfoContainer>

      <Button buttonText="Submit" onClick={handleClick} />
    </Container>
  )
}

export default CreateEventPage;