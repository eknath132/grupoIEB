import axios from 'axios'; 

export const TenenciasFetch = async () => {
    const {data} = await axios.get('https://ieb-peralesazarel-gmailcom.vercel.app/api/tenencias')
    return data
}