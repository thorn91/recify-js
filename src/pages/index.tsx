import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    const { data: session, status } = useSession();
    
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'unauthenticated' || !session) {
        return <button onClick={() => signIn('discord')}>Sign in</button>;
    }

    return (
        <>
            <Head>
                <title>Recify</title>
                <meta name="description" content="Recipes!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
            <button onClick={() => signOut()}>Sign Out</button>
            </main>
        </>
    );
};

export default Home;
