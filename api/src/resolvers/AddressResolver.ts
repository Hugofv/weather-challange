import { Arg, Query, Resolver } from 'type-graphql';
import { Address } from '../models/Address';
import axios from 'axios';

@Resolver()
export class AddressResolver {
  @Query(() => [Address])
  async searchAddress(@Arg('query') query: string) {
    try {
      const request = await axios.get(
        `https://geocode.maps.co/search?q=${encodeURIComponent(query)}`
      );
      const { data } = request;

      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
