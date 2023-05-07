import { WiThermometer, WiWindy } from 'weather-icons-react';

import {
  BoxContent,
  BoxTemperature,
  BoxTitle,
  BoxCondition,
  BoxDate,
} from './styles';
import { WEATHER_INTERPRETATION_CONDE } from '../../config/constants';

const DetailToday = ({ address, currentWeather }) => {
  //   const date = DateTime.fromMillis(weather?.dt * 1000);

  console.log(currentWeather);
  return (
    <BoxContent>
      <div>
        <BoxTitle>{address?.display_name}</BoxTitle>
        <BoxTemperature>
          <WiThermometer />
          {Math.round(currentWeather?.temperature || 0)}º C
        </BoxTemperature>

        {!!currentWeather ? (
          <div>
            <BoxCondition>
              {WEATHER_INTERPRETATION_CONDE?.[currentWeather.weathercode]}
            </BoxCondition>
            <BoxDate>{currentWeather.time}</BoxDate>

            <div>
              <span>
                <WiWindy /> Velocidade do vento: {currentWeather?.windspeed}{' '}
                Km/h
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </BoxContent>
  );
};

export default DetailToday;
