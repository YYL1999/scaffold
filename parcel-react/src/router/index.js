import React from 'react'

export default class Demo extends React.Component{
   
   onSubmit(e,{value}){
    e.preventDefault()      
   console.log(value)
   }
      
    componentWillUpdate(){
        return false
    }
    render(){
       return(
           <div>
               <form onSubmit={this.onSubmit}>
                   <input 
                   type="number"
                   name="数字"
                   placeholder="请输入数字"
                   />
                   <input 
                   type="number"
                   name="电话"
                   placeholder="请输入电话"
                   />
                   <button>提交</button>
               </form>
           </div>
       )
    }
}