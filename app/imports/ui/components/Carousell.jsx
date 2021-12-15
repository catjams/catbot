import React from 'react';
import Carousel from 'semantic-ui-carousel-react';
import { Container, Header, Icon, Image } from 'semantic-ui-react';

class Carousell extends React.Component {
  render() {
    const elements = [
      {
        render: () => <div style={{ height: '600px' }}>
          {/* eslint-disable-next-line react/no-unescaped-entities,max-len */}
          <Header as="h3" style={{ width: '90%', paddingLeft: '10%', paddingTop: '280px' }} textAlign='center'>Welcome to CatJAM's chatbot for the Office of Hawaiian Affairs. This is a short tutorial on how to navigate and utilize the chatbot website and application.</Header>
        </div>
        ,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2" style={{ paddingTop: '200px' }}><Icon name='paper plane'/> Navigation Bar</Header>
          <Container className='line'/>
          <Image src='images/Navbar.png' centered/>
          <Container style={{ marginTop: '15px' }}/>
          <p><Icon name='angle right'/>This is the navigation bar. Clicking on elements in the bar allows you to move to other pages in the application.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>
        ,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='home'/> Landing</Header>
          <Container className='line'/>
          <Image src='images/LandingButtons.png' size='huge' centered/>
          <Container style={{ marginTop: '15px' }}/>
          {/* eslint-disable-next-line max-len */}
          <p><Icon name='angle right'/>Here we have the landing page. This is the home page for our catbot website. On the right side of the landing page you will find three buttons. These buttons allow you to navigate to the Catbot window as well as the tutorial and send feedback pages.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='home'/> Landing</Header>
          <Container className='line'/>
          <Image src='images/LandingSwap.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          {/* eslint-disable-next-line max-len */}
          <p><Icon name='angle right'/>If you would like to call the chatbot instead, click on the small green button to the right of the Catbot button. This will cause the button to call the chatbot instead of opening the chatbot window on the website.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='home'/> Landing</Header>
          <Container className='line'/>
          <Image src='images/LandingPhone.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          <p><Icon name='angle right'/>Now the chatbot button will display the chatbot phone number instead of the usual text. If you would like to switch back simply click on the small green button again.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='home'/> Landing</Header>
          <Container className='line'/>
          <Image src='images/LandingContacts2.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          <p><Icon name='angle right'/>If you need to contact OHA for any reason, their phone and email contacts are available via the buttons at the bottom of the page. A link to the OHA official website is also provided.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='chat'/>Chatbot</Header>
          <Container className='line'/>
          <Image src='images/ChatbotImage.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          {/* eslint-disable-next-line max-len */}
          <p><Icon name='angle right'/>The chatbot window is shown in the picture to the right. Clicking on the chatbot button or the small circular button on the bottom right of the page will open this window. This is where you will be asking the chatbot questions and receiving answers.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='chat'/>Chatbot</Header>
          <Container className='line'/>
          <Image src='images/ChatbotTextOptions.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          {/* eslint-disable-next-line max-len */}
          <p><Icon name='angle right'/>If you have an inquiry, it can be sent to the chatbot through text or voice by typing words into the text-box on the bottom, or clicking on the mic symbol on the bottom right of the chatbot window respectively</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='chat'/>Chatbot</Header>
          <Container className='line'/>
          <Image src='images/ChatbotResponse2.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
          <p><Icon name='angle right'/>Questions you ask the chatbot will be displayed on the right side of the window in green. The chatbot's response will then be shown as a grey message on the left side of the window. </p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='wpforms'/> Send Feedback</Header>
          <Container className='line'/>
          <Image src='images/feedback.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          <p><Icon name='angle right'/>This is the Send Feedback page. This page allows users to send feedback regarding the chatbot or website. </p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='wpforms'/> Send Feedback</Header>
          <Container className='line'/>
          <Image src='images/FeedbackInfo.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          <p><Icon name='angle right'/>In order to send in feedback the user must fill out their contact details, a name for the input, select what type of feedback they are sending in, and provide a description of their feedback.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
      {
        render: () => <div style={{ height: '600px' }}>
          <Header as="h2"><Icon name='wpforms'/> Send Feedback</Header>
          <Container className='line'/>
          <Image src='images/feedbacksubmit.png' size='huge' centered bordered/>
          <Container style={{ marginTop: '15px' }}/>
          <p><Icon name='angle right'/>When you are done filling out all the fields press the submit button and your feedback will be recorded for staff to look at and consider.</p>
          <Container style={{ marginTop: '15px' }}/>
        </div>,
      },
    ];
    return (
      <div>
        <Carousel
          elements={elements}
          duration={70000}
          animation='slide left'
          showNextPrev={true}
          showIndicators={false}
        />
      </div>
    );

  }
}

export default Carousell;
