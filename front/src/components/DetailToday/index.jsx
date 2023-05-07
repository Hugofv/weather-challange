import {
  BoxContent,
  BoxTemperature,
  BoxTitle,
  BoxCondition,
  BoxDate,
} from './styles';

const DetailToday = ({ city, weather, refetch }) => {
  //   const date = DateTime.fromMillis(weather?.dt * 1000);

  return (
    <BoxContent>
      <div
        minWidth='10rem'
        position='relative'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <BoxTitle>
          {city?.city}, {city?.principalSubdivision} - {city?.countryName}
        </BoxTitle>
        <div display='flex' alignItems='center'>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather?.[0].icon}@4x.png`}
            // alt={capitalizeFirstLetter(weather?.weather[0].main)}
          />
          <BoxTemperature>{Math.round(weather?.temp || 0)}º C</BoxTemperature>
        </div>

        {!!weather ? (
          <div textAlign='center'>
            <BoxCondition>
              {/* {capitalizeFirstLetter(weather?.weather[0].description)} */}
            </BoxCondition>
            <BoxDate>{/* {date.toFormat('dd/MM/yyyy HH:mm')} */}</BoxDate>

            <div>
              <span>
                Sensação Térmica: {Math.round(weather?.feels_like || 0)}º C{' '}
              </span>
              <span>Umidade: {weather?.humidity}% </span>
              <span>Pressão: {weather?.pressure}hPa </span>
              <span>UV: {weather?.uvi} UV </span>
            </div>
          </div>
        ) : null}
      </div>
    </BoxContent>
  );
};

export default DetailToday;
