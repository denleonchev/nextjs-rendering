import fs from "fs";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  console.log('ServerComponentOne render');
  return (
    <>
      <h1>Server component one</h1>
    </>
  );
}