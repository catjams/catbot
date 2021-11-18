import React from 'react';
import { Container, Label, Icon, Header, Image, Grid, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  render() {
    return (
      <div>
        <div className='landingTop'>
          <Grid container columns={2} centered >
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header as='h1' textAlign='center' inverted className='heading'>Welcome to the OHA Catbot landing page! Click on one of the buttons to explore the website</Header>
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Grid.Row className="landingButtons">
                  {/* eslint-disable-next-line no-undef */}
                  <Button color='blue' size='huge' className='pageLabel' onClick={window.clickBot}>
                    <Icon name='chat' /> Open Catbot
                  </Button>
                </Grid.Row>
                <Grid.Row className="landingButtons">
                  <Button as={NavLink} color='blue' size='huge' className='pageLabel2' exact to="/tutor" key='tutor'>
                    <Icon name='book'/> Tutorial
                  </Button>
                </Grid.Row>
                <Grid.Row className="landingButtons">
                  <Button as={NavLink} color='blue' size='huge' className='pageLabel3' exact to="/sendfeedback" key='sendfeedback'>
                    <Icon name='reply'/> Send Feedback
                  </Button>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className='landingBottom'>
          <Container>
            <Header as='h1' textAlign='center' style={{ paddingTop: 20 }}>Contacts us or visit our website!</Header>
            <Grid columns={3}>
              <Grid.Column textAlign='center'>
                <Image src='https://blogs.mulesoft.com/wp-content/uploads/2014/10/icon-iphone-blue-big.png' size='small' centered/>
                <Label className="ohagreen" size='big'>
                  <Icon name='phone'/>
          Phone
                  <Label.Detail><a href="tel: 808-594-1835" className="white-text" >808-594-1835</a></Label.Detail>
                </Label>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Image src='https://jasonsavard.com/forum/attachments/54aecef1955e7.png' size='small' centered/>
                <Label className="ohagreen" size='big'>
                  <Icon name='mail'/>
          Email
                  <Label.Detail><a href="mailto: info@oha.org" className="white-text">info@oha.org</a></Label.Detail>
                </Label>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Image src='https://www.downloadclipart.net/large/website-png-hd.png' size='small' centered/>
                <Label className="ohagreen" size='big'>
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
