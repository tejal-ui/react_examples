import UserProfile from './UserProfile';

export default function UserList() {
  const users = [
    {
      id: '1',
      firstname: 'Rohit',
      lastname: 'Sharma',
      age: 40,
      gender: 'Male',
      isAdmin: true,
    },
    {
      id: '2',
      firstname: 'Hardik',
      lastname: 'Pandya',
      age: 35,
      gender: 'Male',
      isAdmin: false,
    },
    {
      id: '3',
      firstname: 'Priyanka',
      lastname: 'Pandya',
      age: 35,
      gender: 'Female',
      isAdmin: true,
    },
  ];
  return (
    <div>
      {/* <UserProfile
        firstname="Priyanka"
        lastname="pandya"
        age={35}
        gender="female"
        isAdmin={true}
      ></UserProfile>
      <hr></hr>
      <UserProfile
        firstname="Hardik"
        lastname="pandya"
        age={40}
        gender="Male"
        isAdmin={false}
      ></UserProfile> */}

      {users.map((user) => {
        return (
          <div key={user.id}>
            <UserProfile
              firstname={user.firstname}
              lastname={user.lastname}
              age={user.age}
              gender={user.gender}
              isAdmin={user.isAdmin}
            ></UserProfile>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
