import { type SendVerificationRequestParams } from "next-auth/providers/email";
import { resend } from "../mailing";

export async function emailAuthentication({
  url,
  identifier,
  provider,
  theme: _,
}: SendVerificationRequestParams) {
  await resend.emails.send({
    from: provider.from,
    to: identifier,
    subject: "Hello",
    text: `To sign in in Communities click in the following link: ${url}`,
  });
}
