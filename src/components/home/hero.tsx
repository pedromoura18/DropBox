"use client"

import { Box, Button, Grid, Heading, HStack, Text, Link as ChakraLink, VStack
} from "@chakra-ui/react"
import NextLink from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function Hero() {
  return (
    <Grid
      as="section"
      templateColumns={{ base: "1fr", lg: "1fr 1.6fr" }}
      w="100vw"
      minH="600px"
      bg="#1b1919"
    >
      <VStack
        align="start"
        justify="center"
        px={{ base: 6, lg: 9}}
        py={20}
        gap={1}
        maxW="650px"
        bg="#2b2929"
        h="100%"
        justifyContent="center"
      >
        <Heading
          as="h1"
          fontSize={{ base: "32px", md: "42px", lg: "52px" }}
          fontWeight="630"
          color="white"
          lineHeight="1.0"
          letterSpacing="-0.5px"
          mb={4}
          ml={"-0.5"}
          maxW="520px"
        >
          Tudo o que sua empresa precisa 
          para trabalhar com eficiência,
          em um só lugar
        </Heading>

        <Text
          fontSize="15px"
          color="whiteAlpha.800"
          lineHeight="1.6"
          mb={3}
          maxW="480px"
        >
          Colabore continuamente e entregue o trabalho com mais rapidez usando o Dropbox.
          Armazene seu conteúdo com segurança, edite PDFs, compartilhe vídeos, assine documentos
          e revise as ações da equipe, tudo isso sem sair do Dropbox.
        </Text>

        <Text
          fontSize="14px"
          color="whiteAlpha.800"
          mb={9}
          maxW="480px"
        >
          Precisa de um plano feito sob medida para você?{" "}
          <ChakraLink color="white" textDecoration="underline" asChild>
            <NextLink href="#">
              Veja nossos planos para pessoas físicas.
            </NextLink>
          </ChakraLink>
        </Text>

        <Button
          bg="#0061ff"
          color="white"
          rounded="full"
          size="lg"
          fontWeight="600"
          px={8}
          py={6}
          _hover={{ bg: "#0050d4" }}
          mb={4}
          display="flex"
          alignItems="center"
          gap="8px"
        >
          Comece sua versão de avaliação gratuita do Teams
          <FaArrowRight />
        </Button>

        <HStack
          as="a"
          href="#planos"
          gap="6px"
          fontSize="14px"
          fontWeight="semibold"
          color="white"
          style={{ textDecoration: "underline", whiteSpace: "nowrap" }}
        >
          <Text>ou compre agora</Text>
          <FaArrowRight />
        </HStack>
      </VStack>

      <Box
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
        p={2}
         >
      <Box position="relative" w="full"  ml={-40}> 
       <video
        src="/video/dropboxvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
         style={{
          width: "100%",
          height: "480px", 
          borderRadius: "16px",
          objectFit: "cover"
      }}
    />
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="blackAlpha.200"
        borderRadius="16px"
        />
      </Box>
     </Box>
    </Grid>
  )
}