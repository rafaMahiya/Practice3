import { NextPage } from "next";
import Error from "./_error";

interface Data {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Props {
  data: Data[];
}

const HomePage: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* <h1>Hello! {data.length > 0 && data[0].name}</h1> */}
      {data ? (
        data.map((item) => <p key={item.id}>{item.name}</p>)
      ) : (
        <Error statusCode={500} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  // Simulating an API request
  const res = await fetch("https://jsonplaceholder.typicode.com/user");
  if (res.ok) {
    const data = await res.json();
    console.log(data);

    return {
      props: {
        data,
      },
    };
  } else {
    return {
      props: {
        data: null,
      },
    };
  }
}

export default HomePage;
