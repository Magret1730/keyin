const users = [
  { id: 1, name: "Alan Smith", age: 20, email: "alan@gmail.com" },
  { id: 2, name: "Bob Smith", age: 21, email: "bob@gmail.com" },
  { id: 3, name: "Chrisitina Lee", age: 24, email: "christina@gmail.com" },
];

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div className="profile" key={user.id}>
          <h2>ID: {user.id}</h2>
          <h3>Name:{user.name.toUpperCase()}. </h3>
          <h3>Age: {user.age}</h3>
          <p>Email: {user.email.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};
export default Users;
