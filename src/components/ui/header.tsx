import { Button, HStack, Text, Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

export default function Header() {
  return (
    <HStack
      as="header"
      position="fixed"
      left={0}
      right={0}
      top={0}
      zIndex={50}
      bg="white"
      borderBottomWidth={1}
      borderColor="gray.200"
      h="68px"
      px={10}
      justify="space-between"
    >
      <ChakraLink asChild _hover={{ textDecoration: "none" }}>
        <NextLink href="/">
          <HStack gap={2.5}>
            <HStack
              bg="#0061ff"
              w="34px"
              h="34px"
              borderRadius="6px"
              align="center"
              justify="center"
              flexShrink={0}
            >
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                <path d="M10 6L20 12.5L10 19L0 12.5Z" fill="white" />
                <path d="M30 6L40 12.5L30 19L20 12.5Z" fill="white" />
                <path d="M0 25.5L10 19L20 25.5L10 32Z" fill="white" />
                <path d="M40 25.5L30 32L20 25.5L30 19Z" fill="white" />
                <path d="M10 33.5L20 27L30 33.5L20 40Z" fill="white" />
              </svg>
            </HStack>
            <Text fontSize="22px" fontWeight="600" color="#1b1919" letterSpacing="-0.3px">
              Dropbox
            </Text>
          </HStack>
        </NextLink>
      </ChakraLink>

      <HStack gap={7} alignItems="center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5f5b56" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>

        <ChakraLink fontSize="15px" fontWeight="500" color="#1b1919" _hover={{ color: "gray.600" }} asChild>
          <NextLink href="#">Fale com o setor de vendas</NextLink>
        </ChakraLink>
        <ChakraLink fontSize="15px" fontWeight="500" color="#1b1919" _hover={{ color: "gray.600" }} asChild>
          <NextLink href="#">Assinar</NextLink>
        </ChakraLink>
        <ChakraLink fontSize="15px" fontWeight="500" color="#1b1919" _hover={{ color: "gray.600" }} asChild>
          <NextLink href="#">Entrar</NextLink>
        </ChakraLink>

        <Button
          bg="#0061ff"
          color="white"
          rounded="lg"
          h="40px"
          px={5}
          fontSize="15px"
          fontWeight="600"
          _hover={{ bg: "#0052d9" }}
          asChild
        >
          <NextLink href="#planos">
            Começar agora
          </NextLink>
        </Button>
      </HStack>
    </HStack>
  )
}