import React from 'react';
import { Image, Grid, Container } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', backgroundColor: '#3469CA', color: 'white', borderTop: '5px solid #3469CA', paddingBottom: '15px' };
    return (

      <footer className='blue-background footer'>
        <Container>
          <Grid columns={2}>
            <Grid.Column>
              <Image size='medium' src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/StandardColorLogo.png'/>
            </Grid.Column>
            <Grid.Column>
              <div style={divStyle} className="ui center aligned container">
              Beneficiary Services Chatbot <br />
              Office of Hawaiian Affairs<br />
              560 Nimitz Hwy #200 <br />
              Honolulu, HI 96817 <br />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </footer>
    );
  }
}

export default Footer;
