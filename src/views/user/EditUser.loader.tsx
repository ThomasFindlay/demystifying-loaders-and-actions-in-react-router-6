import { LoaderFunctionArgs } from "react-router-dom";
import { z } from "zod";
import { userSchema } from "../../schema/user.schema";

export const editUserLoader = async ({ params }: LoaderFunctionArgs) => {
  console.log(params);
  const response = await fetch(`http://localhost:4000/users/${params.id}`);

  const user = await response.json();
  console.log(user);
  return {
    user: userSchema.parse(user),
  };
};

export type EditUserLoaderResponse = Awaited<ReturnType<typeof editUserLoader>>;
