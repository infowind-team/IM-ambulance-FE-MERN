import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import AppLayout from "@/components/AppLayout";

// Routes that should NOT have the sidebar (auth pages)
const authRoutes = ['/login', '/signUp', '/forgot-password'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthRoute = authRoutes.includes(router.pathname);

  if (isAuthRoute) {
    return <Component {...pageProps} />;
  }

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
