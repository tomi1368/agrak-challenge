import { ThemeProvider } from "styled-components";
import { main } from "./skins/main";
import { GlobalStyles } from "./globalStyles";

const Component = ({ children }: any) => {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Component;
