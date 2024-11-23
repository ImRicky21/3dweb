import Navbar from "@/components/Navbar";
import Head from "next/head";

type PropsTypes = {
  children: React.ReactNode;
};

export default function HomeLayout(props: PropsTypes) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>{"Home"}</title>
      </Head>
      <section className="flex p-3 m-4 flex-col flex-wrap">
        <Navbar />
        <main>{children}</main>
      </section>
    </>
  );
}
