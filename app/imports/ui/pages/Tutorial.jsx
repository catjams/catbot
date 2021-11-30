import React from 'react';
import { Container, Header, Icon, Image, Grid, Message } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Tutorial extends React.Component {

  // Render the page once subscriptions have been received.
  render() {
    return (
      <div id='tutorial-page' className='tutorial-background'>
        <Container>

          <Header style={{ paddingTop: '10px' }} as="h1" textAlign="center">Chatbot User Guide</Header>
          <Image style={{ width: '100%', height: '50px' }} src='https://cms1files.revize.com/revize/ranchosimi/Recreation/Before%20&%20After%20School%20Clubs/Hillside%20Teen%20Club/Line.gif'/>
          <Message>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p><Icon name='angle right'/>Welcome to CatJAM's chatbot for the Office of Hawaiian Affairs. This is a short tutorial on how to navigate and utilize the chatbot website and application.</p>
          </Message>
          <Grid columns={2} style={{ paddingTop: '20px' }}>
            <Grid.Row>
              <Header as="h2"><Icon name='paper plane'/> Navigation Bar</Header>
              <Container className='line'/>
              <Grid.Column>
                <Container style={{ width: '90%' }}>
                  <Message>
                    <p><Icon name='angle right'/>This is the navigation bar. Clicking on elements in the bar allows you to move to other pages in the application.</p>
                  </Message>
                </Container>
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <Image src='images/Navbar.png' centered/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Header as="h2"><Icon name='home'/> Landing</Header>
              <Container className='line'/>
              <Grid.Column>
                <Container style={{ marginTop: '90px' }}/>
                <Message>
                  {/* eslint-disable-next-line max-len */}
                  <p><Icon name='angle right'/>Here we have the landing page. This is the home page for our catbot website. On the right side of the landing page you will find three buttons. These buttons allow you to navigate to the Catbot window as well as the tutorial and send feedback pages.</p>
                </Message>
                <Container style={{ marginTop: '36%' }}/>
                <Message>
                  {/* eslint-disable-next-line max-len */}
                  <p><Icon name='angle right'/>If you would like to call the chatbot instead, click on the small green button to the right of the Catbot button. This will cause the button to call the chatbot instead of opening the chatbot window on the website.</p>
                </Message>
                <Container style={{ marginTop: '36%' }}/>
                <Message>
                  <p><Icon name='angle right'/>Now the chatbot button will display the chatbot phone number instead of the usual text. If you would like to switch back simply click on the small green button again.</p>
                </Message>
                <Container style={{ marginTop: '40%' }}/>
                <Message>
                  <p><Icon name='angle right'/>If you need to contact OHA for any reason, their phone and email contacts are available via the buttons at the bottom of the page. A link to the OHA official website is also provided.</p>
                </Message>
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <Image src='images/LandingButtons.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
                <Image src='images/LandingSwap.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
                <Image src='images/LandingPhone.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
                <Image src='images/LandingContacts2.png' size='huge' centered bordered/>
              </Grid.Column>
            </Grid.Row>
            <Header as="h2"><Icon name='chat'/>Chatbot</Header>
            <Container className='line'/>
            <Grid.Row>
              <Grid.Column>
                <Container style={{ marginTop: '70px' }}/>
                <Message>
                  {/* eslint-disable-next-line max-len */}
                  <p><Icon name='angle right'/>The chatbot window is shown in the picture to the right. Clicking on the chatbot button or the small circular button on the bottom right of the page will open this window. This is where you will be asking the chatbot questions and receiving answers.</p>
                </Message>
                <Container style={{ marginTop: '32%' }}/>
                <Message>
                  {/* eslint-disable-next-line max-len */}
                  <p><Icon name='angle right'/>If you have an inquiry, it can be sent to the chatbot through text or voice by typing words into the text-box on the bottom, or clicking on the mic symbol on the bottom right of the chatbot window respectively</p>
                </Message>
                <Container style={{ marginTop: '35%' }}/>
                <Message>
                  {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
                  <p><Icon name='angle right'/>Questions you ask the chatbot will be displayed on the right side of the window in green. The chatbot's response will then be shown as a grey message on the left side of the window. </p>
                </Message>
              </Grid.Column>
              <Grid.Column>
                <Image src='images/ChatbotImage.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
                <Image src='images/ChatbotTextOptions.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
                <Image src='images/ChatbotResponse2.png' size='huge' centered bordered/>
              </Grid.Column>
            </Grid.Row>
            <Header as="h2"><Icon name='wpforms'/> Send Feedback</Header>
            <Container className='line'/>
            <Grid.Row>
              <Grid.Column>
                <Container style={{ marginTop: '100px' }}/>
                <Message>
                  <p><Icon name='angle right'/>This is the Send Feedback page. This page allows users to send feedback regarding the chatbot or website. </p>
                </Message>
                <Container style={{ marginTop: '38%' }}/>
                <Message>
                  <p><Icon name='angle right'/>In order to send in feedback the user must fill out their contact details, a name for the input, select what type of feedback they are sending in, and provide a description of their feedback.</p>
                </Message>
                <Container style={{ marginTop: '36%' }}/>
                <Message>
                  <p><Icon name='angle right'/>When you are done filling out all the fields press the submit button and your feedback will be recorded for staff to look at and consider.</p>
                </Message>
              </Grid.Column>
              <Grid.Column>
                <Image src='images/feedback.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
                <Image src='images/FeedbackInfo.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
                <Image src='images/feedbacksubmit.png' size='huge' centered bordered/>
                <Container style={{ marginTop: '30px' }}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Container className='bottom'/>
        </Container>
      </div>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default Tutorial;
