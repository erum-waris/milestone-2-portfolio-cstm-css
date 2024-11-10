import React from "react";
import { NavlinksProps } from "../../../types/componentTypes";
import Link from "next/link";




function Navlinks(props:NavlinksProps){

    return(

   <div> <Link className="navlinks" href={props.href}> {props.title} </Link></div>
    
   

    )
}

export default Navlinks;