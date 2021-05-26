import React from 'react';

class MatchesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {
          !!this.props.items && this.props.items.map(item => {
            return (
              <li style={{ padding: 10 }}>{item}</li>
            );
          })
        }
      </ul>
    );
  }
}

export default MatchesList;