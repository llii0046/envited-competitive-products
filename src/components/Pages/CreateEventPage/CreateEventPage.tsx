import EventInfoContainer from "../../Shares/EventInfoContainer"
import styled from "styled-components";
import { color } from "../../../styles/variables";

const { darkPurple } = color;

const Container = styled.div`
  padding: 30px 160px;
`;

const PageTitle = styled.h2`
  color: ${darkPurple};
  font-size: 48px;
`;

const CreateEventPage = () => {
  return (
    <Container>
      <PageTitle>Create your event</PageTitle>
      <EventInfoContainer title='Event name' > 

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
    </Container>
  )
}

export default CreateEventPage;