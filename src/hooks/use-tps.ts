import useSWR from "swr";

export const useTps = () =>
  useSWR(useTps.name, async () => {
    const res = await fetch("/api/v1/tps", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!res.ok) throw new Error("Failed to fetch TPS");

    return res.json();
  });
