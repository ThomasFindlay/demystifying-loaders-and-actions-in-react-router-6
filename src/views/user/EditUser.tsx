import { useLoaderData, useSubmit } from "react-router-dom";
import { EditUserLoaderResponse } from "./EditUser.loader";
import UserForm from "./components/UserForm";

type EditUserProps = {
  className?: string;
};

const EditUser = (props: EditUserProps) => {
  const { user } = useLoaderData() as EditUserLoaderResponse;
  const submit = useSubmit();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    submit(formData, {
      method: "PATCH",
      action: `/user/${user.id}`,
    });
  };

  return (
    <div className="py-24 max-w-sm mx-auto">
      <UserForm user={user} onSubmit={onSubmit} />
    </div>
  );
};

export default EditUser;