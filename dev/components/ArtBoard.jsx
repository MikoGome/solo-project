import React from 'react';
import Art from './Art.jsx';

class ArtBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arts: [] };
  }

  componentDidMount() {
    fetch('/api/', {mode: 'cors'})
      .then(res => res.json())
      .then(artWorks => {
        this.setState({arts: artWorks})
      })
  }

  render() {
    const artWorks = this.state.arts.map((art, index) => {
      return <Art key={index} artPost={art}/>;
    });
    return (
      <div id='ArtBoard'>
        {artWorks}
      </div>
    )
  }
}

export default ArtBoard;