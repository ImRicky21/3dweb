type PropsTypes = {
  children?: React.ReactNode;
  title: string;
  type: string;
  id: string;
  name: string;
  active?: string;
};
export default function Input(props: PropsTypes) {
  const { title, type, id } = props;
  return (
    <div className="border flex flex-col text-center ">
      <label className="capitalize font-bold" htmlFor={title}>
        {title}
      </label>
      <input
        className={`border rounded-md p-1 m-2 active:border-blue-300`}
        type={type}
        id={id}
      />
    </div>
  );
}
