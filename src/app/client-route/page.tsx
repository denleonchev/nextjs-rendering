"use client";

import { useAlert } from "@/components/alert";
import { useTheme } from "@/components/theme-provider";

export default function ClientRoute() {
  const theme = useTheme();
  useAlert('hello');
  return (
    <h1 style={{
      color: theme.colors.primary
    }}>Client route themed</h1>
  );
}
