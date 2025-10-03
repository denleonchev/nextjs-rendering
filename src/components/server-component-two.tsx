import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  console.log('ServerComponentTwo render');
  return (
    <h1>Server component two</h1>
  );
}