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
  time: number;
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
}
