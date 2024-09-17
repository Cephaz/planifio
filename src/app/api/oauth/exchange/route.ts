import { nylas, nylasConfig } from "@/libs/nylas";
import { session } from "@/libs/sessions";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url as string);
  const code = url.searchParams.get('code');

  if (!code) {
    return Response.json('No authorization code returned from Nylas', {status: 400})
  }

  const codeExchangePayload = {
    clientSecret: nylasConfig.apiKey,
    clientId: nylasConfig.clientId,
    code,
    redirectUri: nylasConfig.callbackUri,
  }

  const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload)
  const { grantId, email } = response 

  await session().set('grantId', grantId);
  await session().set('email', email);
  
  redirect('/');
}
