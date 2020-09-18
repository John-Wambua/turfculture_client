import React, {useEffect} from "react";
import {connect} from "react-redux"
import {fetchFacility} from "../../actions";

const FacilityDetails = (props)=>{
    const {id} =props.match.params;
    useEffect(()=>{
     props.fetchFacility(id)
    },[props.fetchFacility,id])
    console.log(props)
    if (!props.facility) return <div>Loading...</div>
    return (
        <div>
            {props.facility.name}
        </div>
    )
}
const mapStateToProps = (state,ownProps)=>{
    return {facility: state.facilities[ownProps.match.params.id]}
}
export default connect(
    mapStateToProps,
    {fetchFacility}
)(FacilityDetails);
