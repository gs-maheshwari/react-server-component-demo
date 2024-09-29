export async function ServerComponent() {

    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
  
    return (
        <ul style={{ listStyle: "none"}}>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    );
  }