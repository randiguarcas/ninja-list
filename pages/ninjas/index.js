import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
      props: {
        ninjas: data,
      },
    };
  } catch (e) {
    console.log(e);
  }
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((n) => {
        return (
          <div key={n.id}>
            <Link href={"/ninjas/" + n.id}>
            <h3>{n.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Ninjas;
