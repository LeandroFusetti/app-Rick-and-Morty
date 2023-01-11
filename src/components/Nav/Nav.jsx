import React from "react";
import SearchBar from "../SeachBar/SearchBar";

export default function Nav(props){
    
    return(
        <div>
            <SearchBar backHome={props.backHome} goToFavorites={props.goToFavorites} logOut={props.logOut} onCloseAll={props.onCloseAll} onSearch={props.onSearch}/>
        </div>
    )
}