import axios from "axios";

export function getBalance(){
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/balance", {});
        // console.log("varrr", json)
        return dispatch({
            type: "GET_BALANCE",
            payload: json.data
        })
    }
}