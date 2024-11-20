import Navbar from "@/components/Navbar";

type PropsTypes = {
  children: React.ReactNode;
};

export default function HomeLayout(props: PropsTypes) {
  const { children } = props;
  return (
    <section className="flex p-3 m-4 flex-col flex-wrap">
      <Navbar />
      <main>{children}</main>
    </section>
  );
}
