import axios from 'axios'; 

export const DisponiblesFetch = async () => {
        const {data} = await axios.get('https://ieb-peralesazarel-gmailcom.vercel.app/api/disponibles')
        return data
}

export const ProductoresFetch = async () => {
        const {data} = await axios.get('https://ieb-peralesazarel-gmailcom.vercel.app/api/productores')
        return data
}

export const ComitentesFetch = async () => {
        const {data} = await axios.get('https://ieb-peralesazarel-gmailcom.vercel.app/api/clientes')
        return data
}
