import React from 'react'

export default class className extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div
        className='mask'
        style={{height: this.props.height, display: this.props.display ? 'block' : 'none'}}>
      </div>
    )
  }
}
