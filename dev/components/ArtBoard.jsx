import React from 'react';
import Art from './Art.jsx';

class ArtBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arts: []};
  }

  componentDidMount() {

  }

  render() {
    const artWorks = this.state.arts.map((art, index) => {
      return <Art key={index} art={art}/>;
    });

    return (
      <div id='board'>
        {artWorks}
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <p>p</p>
      </div>
    )
  }
}

export default ArtBoard;