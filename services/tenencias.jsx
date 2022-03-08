import axios from 'axios'; 

export const TenenciasFetch = async () => {
    const {data} = await axios.get('http://localhost:3000/api/tenencias')
    return data
}