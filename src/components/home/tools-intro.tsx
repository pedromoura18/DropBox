import { Box, Heading, Text, VStack } from "@chakra-ui/react"

export default function ToolsIntro() {
  return (
    <Box as="section" bg="#f5f5f5" w="100vw" pt={20} pb={10}>
      <VStack gap={4} textAlign="center" maxW="1100px" mx="auto" px={{ base: 5, md: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl", lg: "48px" }}
          fontWeight="600"
          letterSpacing="-0.5px"
          lineHeight="1.1"
          color="#1b1919"
        >
          Todas as ferramentas que<br />você precisa em um só plano
        </Heading>
        <Text fontSize="md" color="#5f5b56" maxW="560px" lineHeight="1.6">
          Armazene e compartilhe arquivos. Assine e envie documentos. Colabore continuamente em
          mídias criativas. Tudo em um mesmo lugar.
        </Text>
      </VStack>
    </Box>
  )
}