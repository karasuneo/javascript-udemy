import { extendTheme } from "@chakra-ui/react";

const thema = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
});

export default thema;
