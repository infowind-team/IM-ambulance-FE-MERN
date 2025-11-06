import AppLayout from "@/layout/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// Routes that should NOT have the sidebar (auth pages)
const authRoutes = ['/login', '/signup', '/forgot-password'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthRoute = authRoutes.includes(router.pathname);

  // If AppLayout's props don't include `children` in its types, coerce to `any` so children can be passed.
  const Layout = AppLayout as any;

  if (isAuthRoute) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
