import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    
    axiosWithAuth()
        .get('/colors')
        .then(res => {
            console.log(res.data)
            return res.data
        })   
}

export default fetchColorService;