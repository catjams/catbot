import React from 'react';
import { Container, Header, Icon, Image, Message } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Tutorial extends React.Component {

  // Render the page once subscriptions have been received.
  render() {
    return (
      <div className='tutorial-background'>
        <Container>

          <Header as="h1" textAlign="center">Chatbot User Guide</Header>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>Welcome to CatJAM's chatbot for the Office of Hawaiian Affairs. This is a short tutorial on how to navigate and utilize the chatbot website and application.</p>
          <Header as="h2">Navigation Bar</Header>
          <Container className='line'/>
          <Image src='images/Navbar.png' centered/>
          <Message>
            <p><Icon name='angle right'/>This is the navigation bar. Clicking on elements in the bar allows you to move to other pages in the application.</p>
          </Message>
          <Header as="h2">Landing</Header>
          <Container className='line'/>
          <Image src='images/Landing.png' size='huge' centered/>
          <Message>
            {/* eslint-disable-next-line max-len */}
            <p><Icon name='angle right'/>Above is the landing page. This is the home page for our catbot website. On the right side of the landing page you will find three buttons. These buttons allow you to navigate to the Catbot window as well as the tutorial and send feedback pages.</p>
          </Message>
          <Image src='images/LandingButtons.png' size='huge' centered/>
          <Message>
            {/* eslint-disable-next-line max-len */}
            <p><Icon name='angle right'/>If you would like to call the chatbot instead, click on the small green button to the right of the Catbot button. This will cause the button to call the chatbot instead of opening the chatbot window on the website. The button will display the chatbot phone number instead of the usual text. If you want to switch back simply click on the small green button again.</p>
          </Message>
          <Image src='images/LandingSwap.png' size='huge' centered/>
          <Container style={{ marginTop: '15px' }}/>
          <Image src='images/LandingPhone.png' size='huge' centered/>
          <Message>
            <p><Icon name='angle right'/>If you need to contact OHA for any reason, their phone and email contacts are available via the buttons at the bottom of the page. A link to the OHA official website is also provided.</p>
          </Message>
          <Image src='images/LandingContacts2.png' size='huge' centered/>
          <Header as="h2">Chatbot</Header>
          <Container className='line'/>
          <Image src='images/ChatbotImage.png' size='huge' centered/>
          <Message>
            {/* eslint-disable-next-line max-len */}
            <p><Icon name='angle right'/>The chatbot window is shown in the picture above. This is where you will be asking the chatbot questions and receiving answers. If you have an inquiry, it can be sent to the chatbot through text or voice by typing words into the text-box on the bottom, or clicking on the mic symbol on the bottom right of the chatbot window respectively</p>
          </Message>
          <Image src='images/ChatbotTextOptions.png' size='huge' centered/>
          <Message>
            {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
            <p><Icon name='angle right'/>Questions you ask the chatbot will be displayed on the right side of the window in green. The chatbot's response will then be shown as a grey message on the left side of the window. </p>
          </Message>
          <Image src='images/ChatbotResponse2.png' size='huge' centered/>
          <Header as="h2">Send Feedback</Header>
          <Container className='line'/>
          <Image src='images/feedback.png' size='huge' centered/>
          <Message>
            {/* eslint-disable-next-line max-len */}
            <p><Icon name='angle right'/>This is the Send Feedback page. This page allows users to send feedback regarding the chatbot or website. In order to send in feedback the user must fill out their contact details, a name for the input, select what type of feedback they are sending in, and provide a description of their feedback.</p>
          </Message>
          <Image src='images/FeedbackInfo.png' size='huge' centered/>
          <Message>
            <p><Icon name='angle right'/>When you are done filling out all the fields press the submit button and your feedback will be recorded for staff to look at and consider.</p>
          </Message>
          <Image src='images/feedbacksubmit.png' size='huge' centered/>
          <Container className='bottom'/>
        </Container>
      </div>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default Tutorial;
