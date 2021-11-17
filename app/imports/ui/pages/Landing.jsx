import React from 'react';
import { Container, Label, Icon, Header, Image, Grid } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className='landingTop'>
          <Header as='h1' textAlign='center' inverted className='heading'>Welcome to the OHA Catbot landing page! Click on one of the buttons to explore the website</Header>
          <div className='block'>
            <Label as='a' color='blue' size='massive' className='pageLabel'>
              <img src='https://img1.picmix.com/output/stamp/normal/1/1/6/7/1917611_5dcbf.png' alt='catjam'/> Catbot
            </Label>
            <Label as='a' color='blue' size='massive' className='pageLabel2'>
              <Icon name='book'/> Tutorial
            </Label>
            <Label as='a' color='blue' size='massive' className='pageLabel3'>
              <Icon name='reply'/> Send Feedback
            </Label>
          </div>
        </div>

        <div className='landingBottom'>
          <Container>
            <Header as='h1' textAlign='center' style={{ paddingTop: 20 }}>Contacts us or visit our website!</Header>
            <Grid columns={3}>
              <Grid.Column textAlign='center'>
                <Image src='https://blogs.mulesoft.com/wp-content/uploads/2014/10/icon-iphone-blue-big.png' size='small' centered/>
                <Label color='olive' size='big' centered>
                  <Icon name='phone'/>
          Phone
                  <Label.Detail><a href="tel: 808-594-1835" className="white-text" >808-594-1835</a></Label.Detail>
                </Label>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Image src='https://jasonsavard.com/forum/attachments/54aecef1955e7.png' size='small' centered/>
                <Label color='orange' size='big'>
                  <Icon name='mail'/>
          Email
                  <Label.Detail><a href="mailto: info@oha.org" className="white-text">info@oha.org</a></Label.Detail>
                </Label>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Image src='https://www.downloadclipart.net/large/website-png-hd.png' size='small' centered/>
                <Label color='teal' size='big'>
                  <Icon name='mouse pointer'/>
          Website
                  <Label.Detail><a target="_blank" rel="noopener noreferrer" href="https://www.oha.org/" className="white-text">https://www.oha.org/</a></Label.Detail>
                </Label>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default Landing;
