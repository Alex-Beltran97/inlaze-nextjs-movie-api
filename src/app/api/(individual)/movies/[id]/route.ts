import instance from "app/services/http";
import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.MOVIES_BASE_URL;
const path = "/movie";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

  const id = params?.id;
  const urlPath = `${ path }/${ id }`;
  
  const { data } = await instance(baseUrl!).get(urlPath);
  
  return NextResponse.json(data);
};