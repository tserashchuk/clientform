import React, {useState} from 'react';
import {RatingUsView} from "./RatingUsView";


export const RatingUsNegative = (props) => {
    let id = props.match.params.id;
    return (<RatingUsWorker storeID={id}/>)
}

const RatingUsWorker = (props) => {

    let [formView, setFormView] = useState(false)

    const detailedFormViewHandler = () => {
        setFormView(!formView)
    }

    return (
        <>
            <RatingUsView
                storeID={props.storeID}
                detailedFormViewHandler={detailedFormViewHandler}
                detailedForm={formView}
            />
        </>
    )
}
