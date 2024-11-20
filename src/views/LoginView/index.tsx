import Input from "@/components/Input";
import image from "@/pages/types/image";
import Image from "next/image";

export default function LoginView() {
  const Logo = image[0].file;

  return (
    <div className="p-10 flex flex-wrap flex-col justify-center m-10 ">
      <div className="border border-gray-300 p-10 m-10">
        <div className="flex justify-center">
          <Image src={Logo} alt="Logo" width={100} />
        </div>
        <div className="">
          <h2 className="text-2xl text-center">{`Selamat Datang Dalam Website 3D Siklus Pembentukan Bebatuan`}</h2>
        </div>
      </div>
      <div className="">
        {/* <Form onSubmit={() => {}}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </Form> */}
        <form action="submit">
          <Input type="email" id="email" title="email" name="email" />
          <Input
            type="password"
            id="password"
            title="password"
            name="password"
          />
        </form>
        <div className="flex flex-wrap justify-around">
          <button
            className=" border rounded-lg p-4 m-2"
            onClick={() => {
              alert("hola");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
