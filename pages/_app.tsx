import { Windmill } from "@windmill/react-ui";
import type { AppProps } from "next/app";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Windmill>
      <Component {...pageProps} />
    </Windmill>
  );
}
export default MyApp;
