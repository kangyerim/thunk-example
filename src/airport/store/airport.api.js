import axios from 'axios'
import airportReducer, { getAirports } from './airport.reducer'

const airportSearch = () => (dispatch, getState) => {
    axios.get(``)
        .then(response => {
            dispatch(getAirports(response.data))
        })
        .catch(error => {throw (error)})
}


export { airportSearch }