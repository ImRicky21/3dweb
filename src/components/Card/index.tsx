type CardProps = {
  children: React.ReactNode;
  color: string;
};
export default function Card(props: CardProps) {
  const { children, color } = props;
  return (
    <div
      className={`m-4 p-4 border border-gray-300 transition-all rounded-lg hover:shadow-xl hover:border-black active:border-red-500 ${color} `}
    >
      <div>{children}</div>
    </div>
  );
}
