import React from 'react';
import "./index.css";
import Title from "./title";
import Create from "./create";
import Todos from "./todos"
import State from "./state"
/*

  数据驱动视图

   1. 确定数据格式
   2. 根据数据完成列表的渲染
   3. 完成添加功能
   4. 完成单项错误

   data:[
      {
        id: 0,
        txt: "数据内容",
        done: false
      },{
        id: 1,
        txt: "数据内容2",
        done: false
      },{
        id: 2,
        txt: "数据内容3",
        done: false
      }
   ]

*/



export default class App extends React.Component{

    constructor(props){
      super(props);
      this.state={
        data:[
            {
            id: 0,
            txt: "数据内容",
            done: false
            }
        ]
      }
    }


    addData=(txt)=>{
      let {data}=this.state;
      data.unshift({
        id:Date.now(),
        txt,
        done:false
      })
      this.setState(
        {
          data:[...data]
        }
      )
    }
    //改变数据中do的状态
    changeDone=(id,flag)=>{
       let {data}=this.state;
       data.forEach(item=>{
          if(item.id==id){
            item.done=flag
          }
       })
       this.setState(
         {
            data:[...data]
         }
       )
    }

    //删除对应id的数据
    removeData=(id)=>{
      let {data}=this.state;
      let newData=data.filter(item=>{
           return item.id!=id
      })
      console.log(newData);
      this.setState({
        data:[...newData]
      })

    }
    //编辑内容
    editTxt=(id,txt)=>{
      let {data}=this.state;
      data.forEach(item=>{
        if(item.id==id){
          item.txt=txt
        }
      })
      this.setState({
       data:[...data]
      })
    }
    //将所有已完成的删除
    removeDone=()=>{
      let {data}=this.state;
      let doneData=data.filter(item=>{
        return item.done===false
      })
      this.setState(
        {data:[...doneData]}
      )
    }
    



    render(){

        let {data}=this.state;
        console.log(data);
        return (
            <div id="todoapp">
                 <Title />
                 <div className="content">
                   <Create addData={this.addData}/> 
                   {data.length>0?[
                        <Todos
                        key={1}
                        data={data}
                        changeDone={this.changeDone}
                        removeData={this.removeData}
                        editTxt={this.editTxt}
                        />
                   ]
                   :""}
                 </div>
                 <State 
                  data={data} 
                  key={2}
                  removeDone={this.removeDone}
                />


            </div>
        );
    }





}

