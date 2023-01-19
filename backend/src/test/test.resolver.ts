
import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class testResolver {
    @Query(() => Boolean)
    isTest(){
        return true;
    }
}
