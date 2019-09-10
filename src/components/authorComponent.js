import React from 'react';
import axios from 'axios';

class AuthorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const authors = response.data;
        this.setState({ authors })
      })
  }

  render() {
      return(
        <div>
          <div className="header">Author Names</div>
          <ul className="authorList">
            { this.state.authors.map(author => <li key={author.id}>{author.name} </li>)}
          </ul>
        </div>
      );
    }
}

export default AuthorComponent;