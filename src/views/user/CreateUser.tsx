import { useSubmit } from "react-router-dom";
import UserForm from "./components/UserForm";

const CreateUser = () => {
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
    <div className="max-w-sm py-24 mx-auto">
      <UserForm user={null} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateUser;
