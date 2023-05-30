import Counter from 'React-2305/basic/state/Counter';
import React from 'react';

export default class ClassPage extends React.Component {
    state = { count: 0 };

    onClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    componentDidMount() {
        console.log('컴포넌트가 마운트 됌');
    }

    componentWillUnmount() {
        console.log('컴포넌트가 곧 언마운트 될 예정!');
    }

    render() {
        return (
            <div className='container'>
                <div className='banner'>
                    Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
                </div>
                <div className='counters'>
                    <Counter total={this.state.count} onClick={this.onClick} />
                    <Counter total={this.state.count} onClick={this.onClick} />
                </div>
            </div>
        );
    }
}
