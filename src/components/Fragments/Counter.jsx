import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div className="flex">
                <h1 className="mr-5">{this.state.count}</h1>
                <Button classname="bg-black text-white p-3" onClick={() => this.setState({count: this.state.count + 1})}>+</Button>
            </div>
        )
    }
}

export default Counter;