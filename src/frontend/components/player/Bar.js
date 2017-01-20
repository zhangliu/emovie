import React from 'react'
import {Slider, Switch} from 'antd'
import positionHelper from '../../libs/positionHelper'

export default class className extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSeconds: props.currentSeconds,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({currentSeconds: props.currentSeconds})
  }

  getMinuteFormat(totalSeconds) {
    const minutes = `000${Math.floor(totalSeconds / 60)}`.substr(-3)
    const seconds = `00${Math.floor(totalSeconds % 60)}`.substr(-2)
    return `${minutes}:${seconds}`
  }
  onClick(e) {
    const width = this.bar.offsetWidth
    const position = positionHelper.getRelativePosition(e)
    const currentSeconds = Math.floor(this.props.totalSeconds * (position.left / width))
    this.setState({currentSeconds})
    this.props.onUpdateProgress(currentSeconds)
  }

  render() {
    const totalMinutes = this.getMinuteFormat(this.props.totalSeconds)
    const currentMinutes = this.getMinuteFormat(this.state.currentSeconds)
    return (
      <div className='bar'>
        <Slider value={30} />
        <div className='bar-content'>
          <div className='change-mode'>
            <Switch checked checkedChildren={'听力模式'} unCheckedChildren={'写作模式'} />
          </div>
          {currentMinutes} / {totalMinutes}
        </div>
      </div>
    )
  }
}
