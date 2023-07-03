import { ActionFunctionArgs, redirect } from "react-router-dom";

export const editUserAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  await fetch(`http://localhost:4000/users/${payload.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/");
};
