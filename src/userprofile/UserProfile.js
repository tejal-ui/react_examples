export default function UserProfile() {
  const user = {
    firstname: 'Rohit',
    lastname: 'Sharma',
    age: 40,
    gender: 'Male',
    isAdmin: true,
  };
  return (
    <div>
      <p>
        Name:
        {user.firstname} {user.lastname}
      </p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      {user.isAdmin ? <p>I'm an admin</p> : <p>Im not an admin</p>}
    </div>
  );
}
