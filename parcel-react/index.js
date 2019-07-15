import React,{Component} from 'react'
import ReactDOM from 'react-dom'


class Pcomponent extends Component{
    constructor(){
        super()
        this.state = {
            age:'20',
            height:'180'
        }
    }
    render(){
        return(
            <div>
                <p>年龄：{this.state.age}</p>
                <p>身高：{this.state.height}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Pcomponent />,
    document.getElementById('root')
)

