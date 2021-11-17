import React from 'react';
import { Container, Label, Icon, Header, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div>
        <Container className='messageBox'>
          <div className='landingTop'>
            <Header as='h1' textAlign='center' inverted>Welcome to OHA Catbot!</Header>
            <Label color='blue' size='huge'>
              <Image src='https://img1.picmix.com/output/stamp/normal/1/1/6/7/1917611_5dcbf.png' size='small'/>
            Catbot
            </Label>
          </div>

          <Container>
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
        </Container>
      </div>
    );
  }
}

export default Landing;
