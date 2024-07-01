import React from 'react'

export default function Alert(props) {
    if(props.alert != null){
        return (
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">
                <strong>{props.alert.type}</strong> {props.alert.massage} 
            </div>
          )
    }
}
