import axios from 'axios'; 

export const DisponiblesFetch = async () => {
        const {data} = await axios.get('http://localhost:3000/api/disponibles')
        return data
}