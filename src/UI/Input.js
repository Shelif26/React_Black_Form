import classes from "./Input.module.css"
import React from "react"

const Input =(props)=>{
    return(
        <>
        <div className={classes.Inputdiv}>
          <label className={classes.label}>{props.name}</label>
          <input
            onInput={props.method}
            type={props.type ? props.type : ""}
            className={!props.valid ? classes.input: classes.redinput}
          />
        </div>
      </>
    )
}

export default Input