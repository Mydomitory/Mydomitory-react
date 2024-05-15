import React from "react";
import Nav from "../components/common/Nav";
import Laundry from "../components/Laundry/Laundry";
import LaundryHeader from "../components/Laundry/LaundryHeader";


export default function LaundryPage(){

  return(
    <div>
      <LaundryHeader/>
      <Laundry/>
      <Nav/>
    </div>
  )
}