import React from "react";
const ToDoList = ({toDoList}) => {
return (
    <div>
        {toDoList.map(toDo => {
            return(
                <div className={toDo.complete? "strike":""}>{toDo.task}</div>
            )
        })}
    </div>
)
}

export default ToDoList;