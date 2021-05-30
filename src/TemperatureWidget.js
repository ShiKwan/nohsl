import { useEffect, useState} from 'react';
import { Grid } from 'semantic-ui-react'
import axios from 'axios';

var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";

export default function TemperatureWidget(props){
    const [weather, setWeather] = useState([]);
    const loadWeather = async () => {
        const weather = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=466c254f32974d1489221629211603&q=44070&days=5&aqi=no&alerts=no');
        setWeather(weather.data.forecast.forecastday);
    }
    useEffect( () => {
        loadWeather();
    }, [])

    console.log(weather);
    
    return(
        <Grid centered verticalAlign='middle'>
            <Grid.Column width={16} ><h3>Three Days Forecast</h3></Grid.Column>
            {
                weather.map(item => {
                    const day = weekday[new Date(item.date).getDay()];
                    return(
                        <Grid.Column width={4} textAlign='center'>
                            <Grid>{day} {item.date}</Grid>
                            <Grid><img src={item.day.condition.icon} /></Grid>
                            <Grid>High : {Math.round(item.day.maxtemp_f)}</Grid>
                            <Grid>Low : {Math.round(item.day.mintemp_f)}</Grid>
                            <Grid>Average : {Math.round(item.day.avgtemp_f)}</Grid>
                            <Grid>Max wind (mph) : {item.day.maxwind_mph}</Grid>
                        </Grid.Column>
                    )
                })
            }
        </Grid>
        
    )
}
