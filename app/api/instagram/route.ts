import { NextResponse } from "next/server";

type IgItem = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
};

export async function GET() {
  try {
    const token = process.env.IG_ACCESS_TOKEN;
    const userId = process.env.IG_USER_ID;

    // If env vars are missing, return empty array (safe fallback)
    if (!token || !userId) {
      return NextResponse.json([], { status: 200 });
    }

    const fields =
      "id,media_url,permalink,caption,media_type,thumbnail_url";
    const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${token}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json([], { status: 200 });
    }

    const json = await res.json();

    const items: IgItem[] = (json?.data || [])
      .map((m: any) => {
        const mediaUrl =
          m.media_type === "VIDEO"
            ? m.thumbnail_url || m.media_url
            : m.media_url;

        return {
          id: String(m.id),
          media_url: String(mediaUrl),
          permalink: String(m.permalink),
          caption: m.caption ? String(m.caption) : undefined,
        };
      })
      .filter(
        (x: IgItem) =>
          typeof x.media_url === "string" &&
          typeof x.permalink === "string"
      );

    return NextResponse.json(items, { status: 200 });
  } catch (err) {
    console.error("Instagram API error:", err);
    return NextResponse.json([], { status: 200 });
  }
}
