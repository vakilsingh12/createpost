import React, { Component } from 'react'
import User from './User';
import id from 'react-html-id';
class App extends Component {
    constructor(){
        super();
        id.enableUniqueIds(this)
        this.state={
            users:[
                {id:this.nextUniqueId(),name:"Vakil",age:19},
                {id:this.nextUniqueId(),name:"Sunil",age:20},
                {id:this.nextUniqueId(),name:"Manish",age:21},
            ]
        }
    }
    
    deleteMe=(index,e)=>{
    const users=Object.assign([],this.state.users);
    users.splice(index,1);
    this.setState({
        users:users
    })
    }
    changeInput=(index,e)=>{
     const index1=this.state.users.findIndex((user)=>{
         return user.id===index;
     });
     const user=Object.assign([],this.state.users[index1]);
     user.name=e.target.value;
     const users=Object.assign([],this.state.users);
     console.log(users);
     users[index1]=user;
     this.setState({
         users:users
     })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map((res,index)=>{
                            return <User delevent={()=>this.deleteMe(res.id)} 
                            inputfield={this.changeInput.bind(this,res.id)}
                             key={index} age={res.age}>{res.name}</User>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App
