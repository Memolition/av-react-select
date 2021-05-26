import React from 'react';

class MatchesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {
          !!this.props.items && this.props.items.map(item => {
            return (
              <li
                style={{
                  margin: 0,
                  padding: 5,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderColor: 'lightgray',
                  borderStyle: 'solid',
                }}
              >
                {item}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default MatchesList;