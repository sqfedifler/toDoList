import React, { createRef } from 'react';


export default class Todos extends React.Component{
   constructor(props){
     super(props)
     //edit:控制是否显示编辑框
     //val:编辑框内文字
     this.state={
       edit:false,
       val:'',
       ref:createRef()
     }
   }
   //组件初次挂载时需要同步 props 与 value
   componentDidMount(){
     let {txt}=this.props.data;
     if(!this.state.edit){
       this.setState({
        val:txt
       })
     }
   }

   //组件更新props时  也要同步props 与 value（主要防止当前操作中val为空）
   componentWillReceiveProps(){
    let {txt}=this.props.data;
    if(!this.state.edit){
      this.setState({
       val:txt
      })
    }
   }

   //第一次双击时，输入框自动获得焦点
   componentDidUpdate(prevPorps,prevState){
     if((!prevState.edit) && this.state.edit){
       this.state.ref.current.select()
     }   
   }
 
   render(){
     let {data}=this.props;
     let {id,txt,done}=data;
     let {changeDone,removeData,editTxt}=this.props;
     let {edit,val,ref}=this.state;
     console.log(this.props);
     return(
        <li className={edit?"editing":""}>
            <div className={"todo"+ (done?" done":"")}>
                <div className="display">
                    <input 
                        className="check" 
                        type="checkbox" 
                        value={done}
                        onChange={(e)=>{
                          //改动数据
                          changeDone(id,e.target.checked)
                        }}
                    />
                    <div 
                        className="todo-content"
                        onDoubleClick={()=>{
                          this.setState({
                            edit:true
                          })
                        }}
                    >{txt}</div>
                    <span 
                        className="todo-destroy"
                        onClick={()=>{
                          removeData(id);
                        }}
                    ></span>
                </div>
                <div className="edit">
                    <input 
                        className="todo-input" 
                        type="text" 
                        value={val}
                        ref={this.state.ref}
                        onChange={(e)=>{
                          this.setState({
                            val:e.target.value
                          })
                        }}
                        onKeyDown={({keyCode})=>{
                          if(keyCode===13){
                            if(val.trim()){
                              editTxt(id,val);
                              this.setState({
                                edit:false
                              })
                            }
                          }
                        }}
                       onBlur={()=>{
                        this.state.edit=false;
                        if(val.trim()){
                          editTxt(id,val);
                         }else{
                          editTxt(id,txt);
                         }
                        }
                       }


                    />
                </div>
            </div>
           

        </li>

     )


   }




}