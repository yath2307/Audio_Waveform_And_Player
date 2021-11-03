import React from 'react';
import Player from 'react-wavy-audio';
import 'react-wavy-audio/dist/index.css';

// eslint-disable-next-line react/prop-types
class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps });
  }
  render() {
    if (this.state.data.path.length > 1) {
      return (<div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '80vh' }}>
        <Player
          audioUrl={this.state.data.path}
          waveStyles={{
            cursorWidth: 1,
            progressColor: '#ee3ec9',
            responsive: true,
            waveColor: '#121640',
            cursorColor: 'transparent'
          }}
          hideImage="true"
        />
      </div>);
    } else {
      return (<div></div>);
    }
  }
}

export default Play;
