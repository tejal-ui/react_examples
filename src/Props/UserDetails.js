export default function UserDetails(userDetails) {
  return (
    <div>
      Props Examples
      <p>
        {userDetails.greeting} {userDetails.name}
      </p>
      {/* We can write in one line using tempate variable => ` ` */}
      {/* <p>{` ${userDetails.greeting} ${userDetails.name}`}</p> */}
    </div>
  );
}
