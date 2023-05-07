import Flex from '../Flex';
import Day from './Day';

const DetailDaily = ({ daily }) => (
  <Flex flexDirection='column' >
    {daily?.time?.map((time, i) => {
      const weathercode = daily.weathercode[i];
      const temperature_2m_min = daily.temperature_2m_min[i];
      const temperature_2m_max = daily.temperature_2m_max[i];
      const sunset = daily.sunset[i];
      const sunrise = daily.sunrise[i];

      return (
        <Day
          key={time}
          time={time}
          weathercode={weathercode}
          temperature_2m_min={temperature_2m_min}
          temperature_2m_max={temperature_2m_max}
          sunset={sunset}
          sunrise={sunrise}
        />
      );
    })}
  </Flex>
);

export default DetailDaily;
