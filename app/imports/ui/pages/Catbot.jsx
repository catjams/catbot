import React from 'react';
import { Container, Label, Icon, Header, Message } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

/** A simple static component to render some text for the landing page. */
class Catbot extends React.Component {
  render() {
    return (
      <div>
        <Container className='messageBox'>
          <Message color='green'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Header as='h4' textAlign='center'><Icon name='bullhorn'/>Welcome to OHA Catbot! Click on "Tutorial" in the navbar to view a quick guide on how to use this application.
              You can ask your questions through the chatbot below, or call (732) 307-3105 for help.</Header>
          </Message>
          <Helmet>
            <script type="text/javascript"
              id="botcopy-embedder-d7lcfheammjct"
              className="botcopy-embedder-d7lcfheammjct"
              data-botId="6192d793f15a03000849cfd9"
            >
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://widget.botcopy.com/js/injection.js';
              document.getElementById('botcopy-embedder-d7lcfheammjct').appendChild(s);
            </script>
          </Helmet>
          <Label color='olive' size='big'>
            <Icon name='phone'/>
          Phone
            <Label.Detail><a href="tel: 808-594-1835" className="white-text" >808-594-1835</a></Label.Detail>
          </Label>
          <Label color='orange' size='big'>
            <Icon name='mail'/>
          Email
            <Label.Detail><a href="mailto: info@oha.org" className="white-text">info@oha.org</a></Label.Detail>
          </Label>
          <Label color='teal' size='big'>
            <Icon name='mouse pointer'/>
          Website
            <Label.Detail><a target="_blank" rel="noopener noreferrer" href="https://www.oha.org/" className="white-text">https://www.oha.org/</a></Label.Detail>
          </Label>
        </Container>
      </div>
    );
  }
}

export default Catbot;