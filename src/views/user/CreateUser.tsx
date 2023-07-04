import UserForm from "./components/UserForm";

const CreateUser = () => {
  return (
    <div className="max-w-sm py-24 mx-auto">
      <UserForm action="/user/create" />
    </div>
  );
};

export default CreateUser;
