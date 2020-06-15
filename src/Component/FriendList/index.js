import React from 'react';
import '../index.css';
import FriendGroup from '../FriendGroup';

export default class FriendList extends React.Component{
   constructor(props){
       super(props);
       this.state={
        currentKey:0
       }
   }
   //现有展开的项目为currentKey, state 存放在父组件，然后传入子组件
   changeKey=(currentKey)=>{
      this.setState({
        currentKey
      }
      )

   }




   //index 为当前的列表值，state中的currentKey也要传入
    render(){
      let {datas}=this.props;
      let {currentKey}=this.state;
      return (
        <div >
            {
              Object.keys(datas).map((item,index)=>{
                 return (
                           <FriendGroup key={item} datas={datas[item]} index={index} currentKey={currentKey} changeKey={this.changeKey}/>
                        )
              })

            }

        </div>
      )

    }



}