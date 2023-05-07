import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class CurrentWeather {
  @Field()
  temperature: number;

  @Field()
  windspeed: number;

  @Field()
  winddirection: number;

  @Field()
  weathercode: number;

  @Field()
  time: string;
}

@ObjectType()
class DailyWeather {
  @Field(() => [String])
  time: string;

  @Field(() => [Number])
  weathercode: [number];

  @Field(() => [Number])
  temperature_2m_max: [number];

  @Field(() => [Number])
  temperature_2m_min: [number];

  @Field(() => [String])
  sunrise: [string];

  @Field(() => [String])
  sunset: [string];
}

@ObjectType()
export class Weather {
  @Field()
  latitude: string;

  @Field()
  longitude: string;

  @Field()
  timezone: string;

  @Field()
  display_name: string;

  @Field()
  current_weather: CurrentWeather;

  @Field()
  daily: DailyWeather;
}
