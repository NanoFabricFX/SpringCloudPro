import React from 'react'
import Child from './Parent'

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handeAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handeClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div style={{ padding: 50 }}>
            <p>react生命周期</p>
            <button onClick={this.handeAdd}>点击一下</button>
            <button onClick={this.handeClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name="Eyck"></Child>
        </div>
    };
}