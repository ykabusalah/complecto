import React from "react";

import { useHistory } from "react-router-dom";

const GoBack = () => {
    let history = useHistory();
    return (
    <button className="button button-go-back el-go-back" onClick={() => history.goBack()}>
        <span className="icon ti-back-left" />
        <span className="text">Back</span>
    </button>
    )
};

export default GoBack;
