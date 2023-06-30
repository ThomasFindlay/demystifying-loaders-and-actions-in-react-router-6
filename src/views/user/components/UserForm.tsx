type UserFormProps = {
  className?: string;
  user: {
    id: string | number;
    firstName: string;
    lastName: string;
  } | null;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const UserForm = (props: UserFormProps) => {
  const { className, user, onSubmit } = props;
  return (
    <div className={className}>
      <form className="space-y-4" method="post" onSubmit={onSubmit}>
        <input type="hidden" name="id" defaultValue={user?.id} />
        <div className="flex flex-col items-start gap-y-2">
          <label>First Name</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
            name="firstName"
            defaultValue={user?.firstName || ""}
          />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label>Last Name</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
            name="lastName"
            defaultValue={user?.lastName || ""}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-sky-600 text-sky-50 px-4 py-3 font-semibold w-full mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
