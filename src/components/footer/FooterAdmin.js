/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "50px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text as='span' fontWeight='500' ms='4px'>
          <Link
            fontWeight='500'
            color={linkColor}
            href='https://twitter.com/home'>
            Twitter
          </Link>
        </Text>
      </Text>
      <List display='flex'>
      <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={textColor}
            target='_blank'
            href='https://github.com/app-generator/react-horizon-ui-chakra'>
            Source Code
          </Link>
        </ListItem>        
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            color={textColor}
            target='_blank'
            href='https://t.me/RyoLin/'>
            Telegram
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
