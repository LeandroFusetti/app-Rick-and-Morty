import React from "react";
import SearchBar from "../SeachBar/SearchBar";

export default function Nav(props){
    
    return(
        <div>
            <SearchBar logOut={props.logOut} onCloseAll={props.onCloseAll} onSearch={props.onSearch}/>
        </div>
    )
}