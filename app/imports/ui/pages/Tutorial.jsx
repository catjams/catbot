import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import Carousell from '../components/Carousell';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Tutorial extends React.Component {

  // Render the page once subscriptions have been received.
  render() {
    return (
      <div id='tutorial-page' className='tutorial-background'>
        <Container>
          <Header style={{ paddingTop: '10px' }} as="h1" textAlign="center">Chatbot User Guide</Header>
          <Image style={{ width: '100%', height: '50px' }} src='https://cms1files.revize.com/revize/ranchosimi/Recreation/Before%20&%20After%20School%20Clubs/Hillside%20Teen%20Club/Line.gif'/>
          <Carousell/>
          <Container className='bottom'/>
        </Container>
      </div>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default Tutorial;
