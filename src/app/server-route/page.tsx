import { serverSideUtil } from "@/utils/server-utils";

export default function ServerRoute() {
  const value = serverSideUtil();

  return (
    <h1>Server route {value}</h1>
  );
}
