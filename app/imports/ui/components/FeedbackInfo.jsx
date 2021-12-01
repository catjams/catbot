import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import ModalFeedback from './ModalFeedback';

class FeedbackInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      valueIntoModal: '123456abcdef',
    };
  }

  render() {
    return ([
      <Button icon// Button to click to activate the Modal
        key='infoButton'
        primary
        content={<Icon name='info'/>}
        onClick={
          () => {
            this.setState({ modalOpen: true });
          }
        }
      />,
      <ModalFeedback // The invisible modal itself
        key='modal1'
        modalOpen={this.state.modalOpen}
        handleClose={
          () => {
            this.setState({ modalOpen: false });
          }
        }
        valueIntoModal={this.state.valueIntoModal}
      />,
    ]);
  }
}

export default FeedbackInfo;
