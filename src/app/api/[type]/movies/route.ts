import instance from "app/services/http";
import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.MOVIES_BASE_URL;
const path = "/movie?query=";

export const GET = async (req: NextRequest, { params }: { params: { type: string } }) => {

  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query") !== null ? searchParams.get("query") : "";
  const page = searchParams.get("page") !== null ? searchParams.get("page") : "";

  const type = params?.type;
  const urlPath = `/${ type }${ path }`;
  
  const { data } = await instance(baseUrl!).get(urlPath+query+"&page="+page) || [];
  const movies = data.results || [];
  
  return NextResponse.json(movies);
};