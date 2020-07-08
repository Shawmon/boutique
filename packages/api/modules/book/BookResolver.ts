import {Resolver, Query, Arg} from 'type-graphql';
import Book from './BookEntity';

@Resolver(Book)
export default class BookResolver {
  constructor() {}

  @Query((returns) => Book)
  async book(@Arg('id') id: string) {
    return {
      id: 'id',
      title: 'title',
      author: 'author',
    };
  }

  @Query((returns) => [Book])
  books() {
    return [
      {
        id: 'id',
        title: 'title',
        author: 'author',
      },
    ];
  }

  // @Mutation(returns => Book)
  // @Authorized()
  // addRecipe(
  //   @Arg("newRecipeData") newRecipeData: NewRecipeInput,
  //   @Ctx("user") user: User,
  // ): Promise<Recipe> {
  //   return this.recipeService.addNew({ data: newRecipeData, user });
  // }

  // @Mutation(returns => Boolean)
  // @Authorized(Roles.Admin)
  // async removeRecipe(@Arg("id") id: string) {
  //   try {
  //     await this.recipeService.removeById(id);
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }
}
