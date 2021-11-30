import React from 'react';
import { Container, Label, Icon, Header, Image, Grid, Button, Popup, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  state = { status: true }

  render() {
    const gridStyle = { height: '600px' };
    const { status } = this.state;
    return (
      <div>
        <div className='landingTop'>
          <Grid container columns={2} centered style={gridStyle}>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header as='h1' textAlign='center' inverted className='heading'>Welcome to the OHA Catbot landing page! Click on one of the buttons to explore the website</Header>
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Grid.Row className="landingButtons">
                  <Button as='div' labelPosition='right'>
                    {/* eslint-disable-next-line no-undef */}
                    <Button color='blue' size='huge' className='pageLabel' onClick={ status ? window.clickBot : null }>
                      <Icon name={status ? 'chat' : 'phone'} /> {status ? 'Open Catbot' : '(732) 307-3105'}
                    </Button>
                    <Label as="a" basic size='tiny' className="phonelabel" onClick={() => this.setState({ status: !status })}>
                      <Icon name={status ? 'phone' : 'chat'} inverted />
                    </Label>
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
                <Grid.Row className="landingButtons">
                  <Popup content='L' on='click' trigger={<Button color='blue' size='huge'><Icon name='thumbs up'/>Rate Your Experience</Button>}>
                    <Grid columns={2}>
                      <Grid.Column>
                        <Button><Icon name='thumbs up'/></Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button><Icon name='thumbs down'/></Button>
                      </Grid.Column>
                    </Grid>
                    <Input placeholder='Add a comment' style={{ paddingBottom: '5px' }}/>
                    <Button>Submit</Button>
                  </Popup>
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
                <Image src='https://cdn.discordapp.com/attachments/901654524018704428/910836030213607454/phone.png' size='small' centered/>
                <Label className="ohagreen" size='big'>
                  <Icon name='phone'/>
          Phone
                  <Label.Detail><a href="tel: 808-594-1835" className="white-text" >808-594-1835</a></Label.Detail>
                </Label>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Image src='https://cdn.discordapp.com/attachments/901654524018704428/910836036303720499/email.png' size='small' centered/>
                <Label className="ohagreen" size='big'>
                  <Icon name='mail'/>
          Email
                  <Label.Detail><a href="mailto: info@oha.org" className="white-text">info@oha.org</a></Label.Detail>
                </Label>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Image src='https://cdn.discordapp.com/attachments/901654524018704428/910836034009452564/world.png' size='small' centered/>
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
