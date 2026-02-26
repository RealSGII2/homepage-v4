import { NextRequest, NextResponse } from "next/server";
import servers from './app/(homepage)/servers.json'

export function middleware(request: NextRequest) {
  const serverId = request.nextUrl.pathname.slice(1) + request.nextUrl.search.slice(1, -1);

  console.log(serverId);

  if (servers[serverId as keyof typeof servers]) {
    return NextResponse.redirect(new URL("/?s=" + serverId, request.url));
  }
}
