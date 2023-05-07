import { WiThermometer, WiWindy } from 'weather-icons-react';

import {
  BoxContent,
  BoxTemperature,
  BoxTitle,
  BoxCondition,
  BoxDate,
} from './styles';
import { WEATHER_INTERPRETATION_CONDE } from '../../config/constants';
import Flex from '../Flex';
import { format, parseISO } from 'date-fns';

const DetailToday = ({ address, currentWeather }) => {
  return (
    <BoxContent>
      {address ? (
        <Flex
          fullWidth
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <BoxTitle>{address?.display_name}</BoxTitle>
          <BoxTemperature>
            <WiThermometer />
            {Math.round(currentWeather?.temperature || 0)}º C
          </BoxTemperature>

          {!!currentWeather ? (
            <Flex alignItems='center' flexDirection='column'>
              <BoxCondition>
                {WEATHER_INTERPRETATION_CONDE?.[currentWeather.weathercode]}
              </BoxCondition>
              <BoxDate>
                {format(parseISO(currentWeather.time), 'dd/MM/yyyy HH:mm')}
              </BoxDate>

              <Flex alignItems='center' gap='10px'>
                <WiWindy size={40} /> Velocidade do vento:{' '}
                {currentWeather?.windspeed} Km/h
              </Flex>
            </Flex>
          ) : null}
        </Flex>
      ) : (
        <Flex fullWidth justifyContent='center'>
          <BoxTitle>Escolha uma cidade</BoxTitle>
        </Flex>
      )}
    </BoxContent>
  );
};

export default DetailToday;
