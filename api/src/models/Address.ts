import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Address {
  @Field()
  lat: string;

  @Field()
  lon: string;

  @Field()
  place_id: number;

  @Field()
  display_name: string;

  @Field()
  class: string;

  @Field()
  type: string;
}
