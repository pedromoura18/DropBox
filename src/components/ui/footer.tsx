import { Box, Grid, GridItem, HStack, Icon, Link as ChakraLink, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"

const footerLinks = {
  Dropbox: [
    "Aplicativo para desktop", "Aplicativos móveis", "Integrações", "Recursos",
    "Soluções", "Segurança", "Acesso antecipado", "Modelos", "Ferramentas gratuitas",
  ],
  Produtos: [
    "Plus", "Professional", "Business", "Enterprise", "Dash", "DocSend",
    "Dropbox Sign", "Reclaim.ai", "Planos", "Atualizações sobre produtos",
  ],
  Recursos: [
    "Enviar arquivos grandes", "Enviar vídeos longos", "Armazenamento de fotos na nuvem",
    "Transferência segura de arquivos", "Backup em nuvem", "Editar PDFs",
    "Assinaturas eletrônicas", "Converter em PDF",
  ],
  Atendimento: [
    "Central de ajuda", "Fale conosco", "Privacidade e termos de uso",
    "Política de cookies", "Preferências de cookies e CCPA",
    "Princípios da IA", "Mapa do site", "Recursos de aprendizagem",
  ],
  "Recursos ": [
    "Blog", "Eventos", "Histórias de clientes", "Biblioteca de recursos",
    "Desenvolvedores", "Fóruns da comunidade", "Indicações",
    "Parceiros revendedores", "Parceiros de integração", "Encontre um parceiro",
  ],
  Empresa: [
    "Quem somos", "Trabalhe conosco", "Relações com investidores",
    "Responsabilidade corporativa",
  ],
}

export default function Footer() {
  return (
    <Box as="footer" bg="black" pt={16} pb={12}>
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }}>
        <Grid
          templateColumns={{ base: "1fr 1fr", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }}
          gap={8}
          mb={12}
        >
          {Object.entries(footerLinks).map(([col, links]) => (
            <GridItem key={col}>
              <Text fontSize="sm" fontWeight="700" color="white" mb={5}>
                {col.trim()}
              </Text>
              <VStack align="start" gap={2.5}>
                {links.map((link) => (
                  <ChakraLink
                    key={link}
                    fontSize="sm"
                    color="whiteAlpha.600"
                    _hover={{ color: "white" }}
                    asChild
                  >
                    <NextLink href="#">{link}</NextLink>
                  </ChakraLink>
                ))}
              </VStack>
            </GridItem>
          ))}
        </Grid>

        <HStack gap={4} mb={8}>
          <ChakraLink color="whiteAlpha.600" _hover={{ color: "white" }} asChild>
            <NextLink href="#">
              <Icon w={5} h={5}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </Icon>
            </NextLink>
          </ChakraLink>
          <ChakraLink color="whiteAlpha.600" _hover={{ color: "white" }} asChild>
            <NextLink href="#">
              <Icon w={5} h={5}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Icon>
            </NextLink>
          </ChakraLink>
          <ChakraLink color="whiteAlpha.600" _hover={{ color: "white" }} asChild>
            <NextLink href="#">
              <Icon w={5} h={5}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Icon>
            </NextLink>
          </ChakraLink>
        </HStack>

        <Box borderTopWidth={1} borderColor="whiteAlpha.200" mb={6} />

        <HStack gap={1.5} color="whiteAlpha.500" cursor="pointer" _hover={{ color: "whiteAlpha.800" }} w="fit-content">
          <Icon w={4} h={4}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </Icon>
          <Text fontSize="sm">Português (Brasil)</Text>
          <Icon w={3.5} h={3.5}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Icon>
        </HStack>
      </Box>
    </Box>
  )
}