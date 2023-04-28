import React from "react";

interface IHeaderProps {
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header(props: IHeaderProps) {
  const { setNum } = props;

  return (
    <header>
      <button onClick={() => setNum((p) => p + 1)}>Increase Num</button>
      <button onClick={() => setNum((p) => p - 1)}>Decrease Num</button>
    </header>
  );
}
