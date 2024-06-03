import { NextResponse } from "next/server";
import invariant from "tiny-invariant";

export async function GET() {
  try {
    const apiKey = process.env.BLOCKBERRY_API_KEY;
    invariant(!!apiKey, "Missing Blockberry env variable");

    const response = await fetch(
      "https://api.blockberry.one/sui/v1/total/values/tps?period=SEC",
      {
        headers: {
          accept: "*/*",
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      },
    );

    const res = await response.json();

    return NextResponse.json(
      { payload: res },
      { status: 200, statusText: "success" },
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
