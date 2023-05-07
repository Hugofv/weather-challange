import { gql, useLazyQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { useDebounce } from 'use-debounce';
import { DetailDaily, DetailToday } from '../../components';
import { WrapperSelect } from './styles';

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
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
      }
      current_weather {
        temperature
        windspeed
        time
        weathercode
        winddirection
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
      <WrapperSelect>
        <Select
          options={options}
          placeholder='Pesquise uma Cidade'
          loadingMessage={() => 'Procurando...'}
          noOptionsMessage={() => 'Sem Opções, informe uma cidade válida'}
          isLoading={loading}
          value={itemSelected}
          onChange={(val) => setItemSelected(val)}
          onInputChange={(val) => setSearch(val)}
        />
      </WrapperSelect>

      <DetailToday
        address={itemSelected}
        currentWeather={dataWeather?.checkWeather?.current_weather}
      />
      <DetailDaily daily={dataWeather?.checkWeather?.daily} />
    </>
  );
};

export default Weather;
