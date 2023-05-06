import { Arg, Query, Resolver } from 'type-graphql';
import axios from 'axios';
import { Weather } from '../models/Weather';

@Resolver()
export class WeatherResolver {
  @Query(() => Weather)
  async checkWeather(@Arg('lat') lat: string, @Arg('lon') lon: string) {
    try {
      const request = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const { data } = request;

      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
