import axios from 'axios'; 

export const DisponiblesFetch = async () => {
        const {data} = await axios.get('http://localhost:3000/api/disponibles')
        return data
}

export const ProductoresFetch = async () => {
        const {data} = await axios.get('http://localhost:3000/api/productores')
        return data
}

export const ComitentesFetch = async () => {
        const {data} = await axios.get('http://localhost:3000/api/clientes')
        return data
}
