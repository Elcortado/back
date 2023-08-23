import'dotenv/config.js'
import { connect } from 'mongoose'
import User from '../User.js'
import City from '../City.js'

const cities = [{
    country: "Cambodia",
    fundation: "1113-01-01",
    population: 120000,
    photo: "https://i.im.ge/2022/08/31/OE8zGY.cambodia.png",
    city: "Siem Reap",
    admin_id: "igna@mh.com"
},{
    country: "Indonesia",
    fundation: "1945-08-17",
    population: 4230051,
    photo: "https://i.im.ge/2022/08/31/OE8kcM.baliTemple.png",
    city: "Bali",
    admin_id: "igna@mh.com"
},{
    country: "Tahiti",
    fundation: "1722-01-01",
    population: 10605,
    photo: "https://i.im.ge/2022/08/31/OE8fih.boraBora.png",
    city: "Bora Bora Island",
    admin_id: "igna@mh.com"
},{
    country: "Venezuela",
    fundation: "1764-05-22",
    population: 407452,
    photo: "https://i.im.ge/2022/08/31/OE8VX8.canaimaBolivar.png",
    city: "Bolívar",
    admin_id: "cin@mh.com"
},{
    country: "Japan",
    fundation: "1952-01-01",
    population: 104000000,
    photo: "https://i.im.ge/2022/08/31/OE8ZKX.japanHonshuIsland.png",
    city: "Honshu Island",
    admin_id: "cin@mh.com"
},{
    country: "Maldives Republic",
    fundation: "1965-07-26",
    population: 540542,
    photo: "https://i.im.ge/2022/08/31/OE8p7D.maldives.png",
    city: "Maldives Islands",
    admin_id: "cin@mh.com"
},{
    country: "Argentina",
    fundation: "1927-12-07",
    population: 6143,
    photo: "https://i.im.ge/2022/08/31/OE8vA4.peritoMorenoCalafate.png",
    city: "El Calafate",
    admin_id: "cin@mh.com"
},{
    country: "Australia",
    fundation: "1788-01-26",
    population: 5312000,
    photo: "https://i.im.ge/2022/08/31/OE8JpC.sidney.png",
    city: "Sydney",
    admin_id: "fran@mh.com"
},{
    country: "Mexico",
    fundation: "1325-06-20",
    population: 212500,
    photo: "https://i.im.ge/2022/08/31/OE842q.tenochtitlan.png",
    city: "Tenochtitlan",
    admin_id: "fran@mh.com"
},{
    country: "Chile",
    fundation: "1928-01-01",
    population: 165593,
    photo: "https://i.im.ge/2022/08/31/OE8Bwp.torresDelPaineMagallanesRegion.png",
    city: "Magallanes Region",
    admin_id: "fran@mh.com"
},{
    country: "Africa",
    fundation: "1964-10-24",
    population: 19473125,
    photo: "https://i.im.ge/2022/08/31/OE8GKP.victoriaFallsZambia.png",
    city: "Zambia",
    admin_id: "cin@mh.com"
},{
    country: "Egypt",
    fundation: "0969-01-01",
    population: 9540000,
    photo: "https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png",
    city: "Cairo Citadel",
    admin_id: "cin@mh.com"
}]

async function createCities(arrayCities) {
    try {
        await connect(process.env.MONGO)
        for (let city of arrayCities) {
            let user = await User.findOne({ mail:city.admin_id })  
            let admin_id = await null                           
            city.admin_id = admin_id                               
            await City.create(city)
        }
        console.log('done!');
    } catch (error) {
        console.log(error);
    }
}

createCities(cities)