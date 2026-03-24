import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import NextLink from "next/link"

export default function FinalCTA() {
  return (
    <Box as="section" bg="#1a1a1a" w="100vw" borderTopWidth={1} borderColor="whiteAlpha.100">
      <Flex
        maxW="1100px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        py={16}
        align="center"
        justify="space-between"
        gap={10}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="700"
          color="white"
          letterSpacing="-0.5px"
          lineHeight="1.1"
        >
          Organize-se. Mãos à obra.<br />Comece com o Dropbox.
        </Heading>

        <Button
          bg="#0061ff"
          color="white"
          rounded="full"
          size="lg"
          px={8}
          fontWeight="700"
          flexShrink={0}
          _hover={{ bg: "#0052d9" }}
          asChild
        >
          <NextLink href="#planos">
            Inicie sua versão de avaliação gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NextLink>
        </Button>
      </Flex>
    </Box>
  )
}
