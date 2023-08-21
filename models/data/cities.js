import'dotenv/config.js'
import '../../config/database.js';

import City from '../City.js'

const cities = [{
    country: "Chile",
    population: 5614000,
    photo: "https://www.voydeviaje.com.ar/resizer/xfEcInh-e9_KdbGmGu2EJmQAiG4=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/3LMDUQ7NCBBJXP6TMHBQD5JJQI.jpg",
    city: "Santiago",
    ObjectId: 1
   
},{
    country: "Africa",
    population: 19473125,
    photo: "https://i.im.ge/2022/08/31/OE8GKP.victoriaFallsZambia.png",
    city: "Zambia",
    ObjectId: 2
},{
    country: "Egypt",
    population: 9540000,
    photo: "https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png",
    city: "Cairo Citadel",
    ObjectId: 3
   
},{
    country: "Cambodia",
    population: 120000,
    photo: "https://i.im.ge/2022/08/31/OE8zGY.cambodia.png",
    city: "Siem Reap",
    ObjectId: 4
   
},{
    country: "Indonesia",
    population: 4230051,
    photo: "https://i.im.ge/2022/08/31/OE8kcM.baliTemple.png",
    city: "Bali",
    ObjectId: 5
   
},{
    country: "Tahiti",
    population: 10605,
    photo: "https://i.im.ge/2022/08/31/OE8fih.boraBora.png",
    city: "Bora Bora Island",
    ObjectId: 6
   
},{
    country: "Venezuela",
    population: 407452,
    photo: "https://i.im.ge/2022/08/31/OE8VX8.canaimaBolivar.png",
    city: "Bolívar",
    ObjectId: 7
    
},{
    country: "Japan",
    population: 104000000,
    photo: "https://i.im.ge/2022/08/31/OE8ZKX.japanHonshuIsland.png",
    city: "Honshu Island",
    ObjectId: 8
   
},{
    country: "Maldives Republic",
    population: 540542,
    photo: "https://i.im.ge/2022/08/31/OE8p7D.maldives.png",
    city: "Maldives Islands",
    ObjectId: 9
},{
    country: "Argentina",
    population: 6143,
    photo: "https://i.im.ge/2022/08/31/OE8vA4.peritoMorenoCalafate.png",
    city: "El Calafate",
    ObjectId: 10
    
},{
    country: "Australia",
    population: 5312000,
    photo: "https://i.im.ge/2022/08/31/OE8JpC.sidney.png",
    city: "Sydney",
    ObjectId:  11
    
},{
    country: "Uruguay",
    population: 1381000,
    photo: "https://es.mercopress.com/data/cache/noticias/69478/0x0/mvd.jpg",
    city: "Montevideo",
    ObjectId: 12
    
},{
    country: "USA",
    population: 884832,
    photo: "https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg",
    city: "San Francisco",
    ObjectId: 13
    
},{
    country: "Canadá",
    population: 1987266,
    photo:" https://www.momondo.com.ar/rimg/dimg/0b/56/99204762-city-6966-164dcf26619.jpg?width=1366&height=768&xhint=2019&yhint=1104&crop=true",
    city: "Montreal",
    ObjectId: 14
},{
    country: "Spain",
    population: 3280782,
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6a/f5/4c/caption.jpg?w=500&h=300&s=1",
    city:"Madrid",
    ObjectId: 15
}]

City.insertMany(cities);