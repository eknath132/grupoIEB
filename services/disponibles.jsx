import axios from 'axios'; 

export const DisponiblesFetch = async () => {
        const {data} = await axios.get('https://ieb-peralesazarel-gmailcom.vercel.app/api/hello')
        return data
}