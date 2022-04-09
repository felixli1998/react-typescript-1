import React, { useState } from "react";
import Model from "../Model";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./style.css";

// Props will be expecting a function type and all the others from Model as well
interface Props extends Model {
  updateStatus: (index: number) => void;
  deleteHandle: (index: number) => void;
  editHandle : (index: number, newTodo:string)  => void;
}

const SingleTask = ({
  index,
  todo,
  status,
  updateStatus,
  deleteHandle,
  editHandle
}: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo);

  return (
    <div key={index} style={{ display: "flex", alignItems: "center" }}>
      {/* Text block */}
      <div>
        {editMode ? (
          // Edit Mode : On
          <div>
              
            <input
              type="text"
              value={editText}
              onChange={(e) => {
                setEditText(e.target.value);
              }}
            ></input>

            <button onClick={
                () => {
                    // Pass index and new description to the parent component
                    editHandle(index,editText);
                    // Change edit mode to false 
                    setEditMode(false);
                }
            }>
                Confirm
            </button>

            <h2> Status : {status === true ? "complete" : "incomplete"} </h2>
          </div>
        ) : (
          // Edit Mode : Off
          <div>
            <h1
              style={{
                textDecoration: status === true ? "line-through" : "None",
              }}
            >
              {todo}
            </h1>
            <h2> Status : {status === true ? "complete" : "incomplete"} </h2>
          </div>
        )}
      </div>

      {/* Action block */}
      <div style={{ paddingLeft: "30px" }}>
        {/* Update status */}
        {status === true ? (
          <CloseOutlined
            onClick={() => {
              console.log(" -- triggered from Singletask.tsx --");
              updateStatus(index);
            }}
          />
        ) : (
          <CheckOutlined
            onClick={() => {
              console.log(" -- triggered from Singletask.tsx --");
              updateStatus(index);
            }}
          />
        )}
        {/* Delete item */}
        <DeleteOutlined
          style={{ paddingLeft: "10px" }}
          onClick={() => {
            deleteHandle(index);
          }}
        />

        {/* Edit item */}
        <EditOutlined
          style={{ paddingLeft: "10px" }}
          onClick={() => {
            if (editMode === false && status !== true) {
              setEditMode(true);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SingleTask;
