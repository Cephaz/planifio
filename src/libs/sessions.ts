import nextAppSession from "next-app-session";

type SessionData = {
  grantId?: string;
  email?: string;
};

export const session = nextAppSession<SessionData>({
  name: 'planifio_session',
  secret: process.env.SECRET as string,
});
