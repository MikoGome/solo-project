import React from 'react';
import Art from './Art.jsx';

class ArtBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arts: [] };
    this.selfTerminate= this.selfTerminate.bind(this);
  }

  componentDidMount() {
    fetch('/api/', {mode: 'cors'})
      .then(res => res.json())
      .then(artWorks => {
        this.setState({arts: artWorks})
      });
  }

  selfTerminate(post) {
    fetch(`/api/${post}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
      .then(() => {
        fetch('/api/', {mode: 'cors'})
        .then(res => res.json())
        .then(artWorks => {
          this.setState({arts: artWorks})
        });
      })
      .catch(() => console.log('not deleted'))
  }

  render() {
    const artWorks = this.state.arts.map((art, index) => {
      return <Art key={index} artPost={art} selfTerminate={this.selfTerminate}/>;
    });
    return (
      <div id='ArtBoard'>
        {artWorks}
      </div>
    )
  }
}

export default ArtBoard;