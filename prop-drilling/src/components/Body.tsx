interface IBodyProps {
  num: number;
  name: string;
}

export default function Body(props: IBodyProps) {
  const { num, name } = props;

  return (
    <main>
      <h1>{num}</h1>
      <h1>{name}</h1>
    </main>
  );
}
