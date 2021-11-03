import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import FileInput from './FileInput';
import Play from './Play';

const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${p => p.theme.color.background},
    ${p => p.theme.color.backgroundSecondary}
  );
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0.8em;
`;

class Home extends React.PureComponent {
    state = {
      path: ''
    };

  getFile = async (path = '') => {
    this.state.path = path;
    this.forceUpdate();
  };

  handleFile = event => {
    const files = event.target.files;
    const file = window.URL.createObjectURL(files[0]);
    // eslint-disable-next-line no-return-assign
    this.getFile(file);
  };

  render() {
    return (
      <Wrapper>
        <FileInput accept="audio/*" onChange={this.handleFile} />
        <Play path={this.state.path} />
      </Wrapper>
    );
  }
}

export default Home;
