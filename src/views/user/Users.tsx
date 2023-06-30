import { useLoaderData, Link } from "react-router-dom";
import { UsersLoaderResponse } from "./Users.loader";

type UsersProps = {
  className?: string;
};

const Users = (props: UsersProps) => {
  const { users } = useLoaderData() as UsersLoaderResponse;
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-semibold text-2xl mb-6">Users</h1>

      <ul className="space-y-2">
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link to={`/user/${user.id}`} className="hover:underline">
                {user.firstName} {user.lastName}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        to="/user/create"
        className="inline-block bg-sky-600 text-sky-50 px-4 py-3 font-semibold w-full mt-4"
      >
        Add User
      </Link>
    </div>
  );
};

export default Users;
