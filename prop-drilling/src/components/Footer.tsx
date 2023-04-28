import React from "react";

interface IFooterProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function Footer(props: IFooterProps) {
  const { name, setName } = props;

  return (
    <footer>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </footer>
  );
}
