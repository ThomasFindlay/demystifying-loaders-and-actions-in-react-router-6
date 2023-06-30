import { useSubmit } from "react-router-dom";
import UserForm from "./components/UserForm";

type CreateUserProps = {
  className?: string;
};

const CreateUser = (props: CreateUserProps) => {
  const submit = useSubmit();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    submit(formData, {
      method: "post",
      action: "/user/create",
    });
  };
  return (
    <div className="py-24 max-w-sm mx-auto">
      <UserForm user={null} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateUser;
