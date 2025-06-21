import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier: email, url, provider }) {
        if (process.env.NODE_ENV === "development") {
          console.log(`\n✨ Magic Link for ${email}: ${url}\n`);
          return;
        }

        const { server, from } = provider;
        const { host } = new URL(url);

        const transport = nodemailer.createTransport(server);
        await transport.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          text: `Sign in to ${host}\n\n${url}\n\n`,
          html: `<p>Sign in to <strong>${host}</strong> by clicking the link below:</p><p><a href="${url}">Sign In</a></p>`,
        });
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    verifyRequest: "/verify-request",
  },
  session: {
    strategy: "database",
  },
};
