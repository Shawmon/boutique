import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export default class Book {
  @Field(() => ID)
  id!: string

  @Field()
  title!: string

  @Field()
  author!: string
}
