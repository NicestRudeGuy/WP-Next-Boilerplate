import client from '../src/apollo/client';
import GET_MENUS from '../src/queries/get-menus';
import Layout from '../src/components/layout/index';
import Head from 'next/head';

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>ProSinder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout data={data}>Some data</Layout>
        </>
    );
}

export async function getStaticProps(context) {
    const { data, loading, networkStatus } = await client.query({
        query: GET_MENUS
    });

    return {
        props: {
            data: {
                menus: {
                    headerMenus: data?.headerMenus?.edges,
                    footerMenus: data?.footerMenus?.edges
                }
            }
        }
    };
}
