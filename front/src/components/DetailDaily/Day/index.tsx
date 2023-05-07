import React from 'react';
import { format, parse, parseISO } from 'date-fns';
import { WEATHER_INTERPRETATION_CONDE } from '../../../config/constants';
import {
  BackgroundBlur,
  BoxDay,
  BoxMax,
  BoxMin,
  TextDescription,
  WrapperContent,
  WrapperDay,
  WrapperWeekDay,
} from './styles';
import Flex from '../../Flex';
import ptBR from 'date-fns/locale/pt-BR';
import {
  WiDirectionDown,
  WiDirectionUp,
  WiSunrise,
  WiSunset,
} from 'weather-icons-react';

const Day = ({
  time,
  weathercode,
  temperature_2m_min,
  temperature_2m_max,
  sunset,
  sunrise,
}) => {
  const date = parse(time, 'yyyy-MM-dd', new Date());

  return (
    <BoxDay>
      <BackgroundBlur />
      <WrapperContent>
        <Flex alignItems='center' flexDirection='column'>
          <WrapperWeekDay>{format(date, 'dd')}</WrapperWeekDay>
          <WrapperDay>
            {format(date, 'iii', {
              locale: ptBR,
            })}
          </WrapperDay>
        </Flex>

        <TextDescription>
          {WEATHER_INTERPRETATION_CONDE?.[weathercode]}
        </TextDescription>
        <Flex flexDirection='column'>
          <BoxMax>
            <WiDirectionUp />
            {temperature_2m_max}º C
          </BoxMax>
          <BoxMin>
            <WiDirectionDown />
            {temperature_2m_min}º C
          </BoxMin>
        </Flex>

        <Flex flexDirection='column'>
          <BoxMax>
            <WiSunrise />
            {format(parseISO(sunrise), 'HH:mm')}
          </BoxMax>
          <BoxMin>
            <WiSunset /> {format(parseISO(sunset), 'HH:mm')}
          </BoxMin>
        </Flex>
      </WrapperContent>
    </BoxDay>
  );
};

export default Day;
