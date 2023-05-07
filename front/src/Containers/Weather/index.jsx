import DetailDay from '../../components/DetailDay';
import DetailToday from '../../components/DetailToday';
import { Wrapper } from './styles';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { useDebounce } from 'use-debounce';

const SEARCH_ADDRESS = gql`
  query ($query: String!) {
    searchAddress(query: $query) {
      place_id
      display_name
      lat
      lon
      type
    }
  }
`;

const CHECK_WEATHER = gql`
  query ($lat: String!, $lon: String!) {
    checkWeather(lat: $lat, lon: $lon) {
      daily {
        time
        weathercode
      }
      current_weather {
        temperature
        windspeed
      }
    }
  }
`;

const Weather = () => {
  const [search, setSearch] = useState('');
  const [itemSelected, setItemSelected] = useState('');
  const [valueSearch] = useDebounce(search, 1000);

  const [fetchAddess, { data: dataAddress, loading }] = useLazyQuery(
    SEARCH_ADDRESS,
    {
      variables: {
        query: valueSearch,
      },
    }
  );

  const [getWeather, { data: dataWeather }] = useLazyQuery(CHECK_WEATHER, {
    variables: {
      lat: itemSelected.lat,
      lon: itemSelected.lon,
    },
  });

  useEffect(() => {
    fetchAddess();
  }, [valueSearch]);

  useEffect(() => {
    if (itemSelected) {
      getWeather();
    }
  }, [itemSelected]);

  const options = useMemo(() => {
    return dataAddress?.searchAddress?.map((e) => ({
      ...e,
      value: e.place_id,
      label: e.display_name,
    }));
  }, [dataAddress]);

  return (
    <>
      <Select
        options={options}
        isLoading={loading}
        value={itemSelected}
        onChange={(val) => setItemSelected(val)}
        onInputChange={(val) => setSearch(val)}
      />

      <DetailToday city={{}} weather={{}} />
      <Wrapper>
        {dataWeather?.daily?.map((item) => (
          <DetailDay key={item.dt} item={item} />
        ))}
      </Wrapper>
    </>
  );
};

export default Weather;
