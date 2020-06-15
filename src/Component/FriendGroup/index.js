import React from 'react';

export default class FriendGroup extends React.Component{
 constructor(props){
   super(props);
 }

 
 expand=()=>{
   let {index,changeKey}=this.props;
   //改父组件中的state
   changeKey(index);
 }

 render(){
    let {datas,index,currentKey}=this.props;
    return (
        <dl  className={["friend-group",index==currentKey?"expanded":""].join(" ")}>
         <dt onClick={this.expand}>{datas["title"]}</dt>
         {datas["list"].map((item)=>{
            return (
               <dd key={item.name}>{item.name}</dd>
            )
         })}
       </dl>

    )


 }
 



}