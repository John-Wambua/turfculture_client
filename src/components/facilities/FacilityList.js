import React, {useEffect} from "react";
import {connect} from "react-redux"
import {fetchFacilities} from "../../actions";


const FacilityList=({fetchFacilities, facilities})=>{

    useEffect(()=>{
        fetchFacilities()
    },[fetchFacilities])
    console.log(facilities)

    if (!facilities) return <div>Loading...</div>
    return (
        <div>
            {facilities.length}
        </div>
    )
}

const mapStateToProps=state=>{
    console.log(state)
    return {facilities: Object.values(state.facilities)} //insert values from an object into an array
}


export default connect(
    mapStateToProps,
    {fetchFacilities}
)(FacilityList)