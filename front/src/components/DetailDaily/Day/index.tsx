import React from 'react';
import { format, parse, parseISO } from 'date-fns';
import { WEATHER_INTERPRETATION_CONDE } from '../../../config/constants';
import {
  BackgroundBlur,
  BoxMax,
  BoxMin,
  WrapperContent,
  WrapperDay,
  WrapperWeekDay,
} from './styles';
import Flex from '../../Flex';

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
    <Flex fullWidth gap='10px'>
      <BackgroundBlur />
      <WrapperContent>
        <Flex flexDirection='column'>
          <WrapperWeekDay>{format(date, 'dd')}</WrapperWeekDay>
          <WrapperDay>{format(date, 'iii')}</WrapperDay>
        </Flex>

        <p>{WEATHER_INTERPRETATION_CONDE?.[weathercode]}</p>
        <Flex flexDirection='column'>
          <BoxMax>{temperature_2m_max}º C</BoxMax>
          <BoxMin>{temperature_2m_min}º C</BoxMin>
        </Flex>

        <Flex flexDirection='column'>
          <p>{format(parseISO(sunrise), 'HH:mm')}</p>
          <p>{format(parseISO(sunset), 'HH:mm')}</p>
        </Flex>
      </WrapperContent>
    </Flex>
  );
};

export default Day;
