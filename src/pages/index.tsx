// import Card from "@/components/Card";
// import Background from "@/components/Background";
import LoginView from "@/views/LoginView";

export default function Home() {
  return (
    <div className="p-10">
      <main className="flex flex-wrap justify-center ">
        {/* <Card color="bg-gradient-to-br from-bluesky from-10% to-greenlight">
          hello world
        </Card> */}
        {/* <Card>hello world</Card> */}
        {/* <Card>hello world</Card> */}
        {/* <Background /> */}
        <LoginView />
      </main>
    </div>
  );
}
