import Head from "next/head";

import { gql } from "@apollo/client";
import client from "../core/apollo-client";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>Ninja list | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
