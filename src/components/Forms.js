import React from "react";
import classes from "./Forms.module.css";
import { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

const Forms=()=> {

  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [dob, setDOB] = useState("");

  // const object ={
  //   FirstName : firstname,
  //   SecondName : secondname,
  //   Email : email,
  //   MobileNumber : mobile,
  //   DOB : dob

  // }
  // const FirstName = (value) => {
  //   setFirstName(value.target.value);
  // };
  // const SecondName = (value) => {
  //   setSecondName(value.target.value);
  // };
  // const Email = (value) => {
  //   setEmail(value.target.value);
  // };
  // const MobileNumber = (value) => {
  //   setMobileNumber(value.target.value);
  // };
  // const DOB = (value) => {
  //   setDOB(value.target.value);
  // };


  // const [createUser, { error, data, loading }] = useMutation(CREATE_USER);
  // const clicked = (e) => {
  //   e.preventDefault();
  //   createUser({
  //     variables: object,
  //   });
  // };

  return (
 
    <div className={classes.formsdiv}>
      <h1>React Form</h1>
      <form className={classes.forms}
      //  onSubmit={clicked}
       >
        <label className={classes.label}>First Name</label>
        <input
          // method={FirstName}
          className={classes.fromsinput}
          placeholder="Your First Name"
        />
        <label className={classes.label}>Last Name</label>
        <input
          // method={SecondName}
          className={classes.fromsinput}
          placeholder="Your Second Name"
        />
        <label className={classes.label}>Email</label>
        <input
          // method={Email}
          type={"email"}
          className={classes.fromsinput}
          placeholder="example@mail.com"
        />
        <div className={classes.agedobdiv}>
          <div className={classes.labeldiv}>
            <label className={classes.divlabel} >Mob.no</label>
            <input type={"number"} className={classes.ageDobinput}  
            // method={MobileNumber}
            />
          </div>

          <div className={classes.ageDob}>
            <label className={classes.divage}>DOB</label>
            <input type={"date"} className={classes.ageDobinput} 
            // method={DOB} 
             />
          </div>
        </div>
        <label className={classes.addlabel}>Address</label>
        <input className={classes.testarea} type={"text"} />

        <button className={classes.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;   
