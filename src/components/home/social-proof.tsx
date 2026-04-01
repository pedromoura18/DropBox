"use client"

import { Box, Flex, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const testimonials = [
  {
    photo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/Tyler-Deb-walking-small-1350x900.png?id=dc1fa2a9-4838-4f5c-8f7f-03b24fa2aa1a",
    logo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/westchester-logo.png?id=bf1aa9e7-e91c-46b5-8fe3-018381d59e77&output_type=png",
    logoAlt: "Westchester Publishing",
    quote: '"Sabemos que é seguro para compartilhar e hospedar nossos arquivos, e nossos clientes confiam. O mais importante é que tanto a propriedade intelectual quanto os materiais armazenados permanecem em segurança. Eles ficam tranquilos porque o Dropbox é confiável".',
    name: "Deb Taylor",
    role: "Presidente e COO, Westchester Publishing",
    link: "https://www.dropbox.com/customers/westchester-publishing",
  },
  {
    photo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/Stanley-Ferguson-Headshot.png?id=92ee3db3-f394-4a85-bc6c-387be513a447",
    logo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/HuishOutdoorlogo.jpg?id=aa489d42-691e-469c-908b-e03e86a4268a&output_type=jpg",
    logoAlt: "Huish Outdoors",
    quote: '"O Dropbox e o Dropbox Dash poupam tempo e esforços preciosos para mim e minha equipe, tornando as informações acessíveis de modo mais rápido e simples. Isso torna mais fácil e produtivo o trabalho de todos, desde TI até Engenharia e Contabilidade".',
    name: "Stanley Ferguson",
    role: "Diretor de TI da Huish Outdoors",
    link: "https://www.dropbox.com/customers/huish-outdoors",
  },
  {
    photo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/MattSCoSi.png?id=ff8e3c9f-0ccf-4172-9bec-e9903a91477f",
    logo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/CoSi_Logo.png?id=f012834f-eb3e-41b3-a9fd-8a3c66332fb9&output_type=png",
    logoAlt: "Co.Si",
    quote: '"A quantidade de tempo que o Dropbox Sign e o Dropbox pouparam para nossa empresa é incrível. Conseguimos liberar centenas de horas gastas com papelada e gerenciamento de arquivos, permitindo à equipe agilizar as criações".',
    name: "Matt Seigel",
    role: "Presidente, Collier.Simon",
    link: "https://www.dropbox.com/customers/collier-simon",
  },
  {
    photo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/Elias-Eldayrie-UFL.jpg?id=76ffe661-4aa1-4753-aec5-b48c1ced3cdb&output_type=jpg",
    logo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/uf-university-of-florida-logowik.png?id=1244a0e8-ce88-481a-8a13-688f75beda92&output_type=png",
    logoAlt: "University of Florida",
    quote: '"Nossos usuários realizaram grandes trabalhos no Dropbox sem qualquer ajuda. A implantação de uma conta central permitiu que o trabalho continuasse, sem interrupções e da maneira mais segura possível."',
    name: "Elias Eldayrie",
    role: "Vice-presidente e diretor de TI",
    link: "https://www.dropbox.com/customers/university-of-florida",
  },
  {
    photo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/Zach-Yokum-Headshot.jpg?id=a241354a-9345-4eda-8f82-159c4aeef944&output_type=jpg",
    logo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/MKO-2023Logo_icon-square-color-white-11.png?id=e494af18-6029-4aa5-919a-f65fe53db214&output_type=png",
    logoAlt: "Mileshko Creative",
    quote: '"Graças à velocidade, conveniência e simplicidade do Dropbox, nosso volume de projetos cresceu 230% em oito anos, uma média anual de 16%, e reduzimos o tempo de edição de vídeos e fotos em 75%".',
    name: "Zach Yokum",
    role: "Diretor de criação da Mileshko Creative",
    link: "https://www.dropbox.com/customers/mileshko-creative",
  },
  {
    photo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/CHRIS-GRUBISA-HEAD-SHOT-01.jpg?id=0e8dc6dd-b9c7-43b8-b0ce-0ce22e8de88d&width=3840&output_type=jpg",
    logo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/LETS-COOK-EDITING-SERVICES-LOGO-01.png?id=95c7eaec-7d07-480b-9c75-aa16a1e5c087&width=1920&output_type=png",
    logoAlt: "Let's Cook",
    quote: '"Com o Dropbox, nossa eficiência aumentou consideravelmente. Isso foi crucial diante da demanda por conteúdo e o grande volume de projetos e colaboradores".',
    name: "Chris Grubisa",
    role: "Fundador e CEO da Let's Cook Video Editing Services",
    link: "https://www.dropbox.com/customers/lets-cook-editing-services",
  },
  {
    photo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/shane-nashville-PBS.jpg?id=54c43180-ea45-499b-a0a8-4e2a150a10c1&output_type=jpg",
    logo: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/Nashville-PBS-logo.png?id=a0f0a515-b522-4dbc-b41c-f043017894f2&output_type=png",
    logoAlt: "Nashville PBS",
    quote: '"O Dropbox está cada vez melhor e com mais recursos inovadores. Está sempre resolvendo problemas. É uma empresa de software em constante evolução, que não oferece sempre o mesmo produto — isso é incrível".',
    name: "Shane Burkeen",
    role: "Diretor sênior de marca, digital e marketing da Nashville PBS",
    link: "https://www.dropbox.com/customers/nashville-pbs",
  },
]

export default function SocialProof() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  const total = testimonials.length

  const prev = () => setCurrent((current - 1 + total) % total)
  const next = () => setCurrent((current + 1) % total)

  return (
    <VStack as="section" bg="#1a1a1a" w="100vw" pt={16} pb={0} gap={8} textAlign="center">

      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="700"
        color="white"
        letterSpacing="-0.5px"
        px={{ base: 5, md: 20 }}
      >
        Mais de 500 mil equipes usam o Dropbox
      </Heading>

       <a
        href="#"
        style={{ textDecoration: "none" }}
      >
       <HStack
        gap="6px"
        fontSize="sm"
        fontWeight="700"
        color="white"
        textDecoration="underline"
        whiteSpace="nowrap"
      >
      Saiba mais sobre nossos clientes
       <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        style={{ flexShrink: 0 }}
         >  
         <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
       </HStack>
      </a>

      <Box w="100%" maxW="1400px" mx="auto" px={{ base: 5, md: 10 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={16}
          alignItems="center"
          minH="520px"
        >
          <Box
            display={{ base: "none", lg: "block" }}
            position="relative"
            h="460px"
            borderRadius="md"
            overflow="hidden"
          >
            <Image
              src={t.photo}
              alt={t.name}
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              unoptimized
            />
          </Box>

          <VStack align="start" gap={6} textAlign="left">
            <Text fontSize={{ base: "lg", md: "xl" }} color="white" lineHeight="1.6" fontWeight="400">
              {t.quote}
            </Text>

           <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
             >
          <HStack
             gap="6px"
             fontSize="sm"
             fontWeight="700"
             color="white"
             textDecoration="underline"
             whiteSpace="nowrap"
             >
              Leia a história completa
            <svg
             width="14"
             height="14"
             viewBox="0 0 24 24"
             fill="none"
             stroke="white"
             strokeWidth="2.5"
             style={{ flexShrink: 0 }}
             >
           <path d="M5 12h14M12 5l7 7-7 7" />
           </svg>
          </HStack>
           </a>

            <Box
              position="relative"
              w="72px"
              h="72px"
              borderRadius="md"
              overflow="hidden"
              bg="white"
              flexShrink={0}
            >
              <Image
                src={t.logo}
                alt={t.logoAlt}
                fill
                style={{ objectFit: "contain", padding: "6px" }}
                unoptimized
              />
            </Box>

            <VStack align="start" gap={0}>
              <Text fontSize="sm" fontWeight="700" color="white">{t.name}</Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.5)">{t.role}</Text>
            </VStack>
          </VStack>
        </Grid>

        <Flex
          align="center"
          justify="center"
          gap={4}
          py={8}
          borderTopWidth={1}
          borderColor="whiteAlpha.100"
          mt={8}
        >
          <Box
            as="button"
            w={8}
            h={8}
            borderWidth={1}
            borderColor="whiteAlpha.400"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            color="white"
            opacity={current === 0 ? 0 : 1}
            pointerEvents={current === 0 ? "none" : "auto"}
            _hover={{ borderColor: "white" }}
            onClick={prev}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Box>

          <Text fontSize="sm" color="rgba(255,255,255,0.5)" fontWeight="500" minW="60px" textAlign="center">
            {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </Text>

          <Box
            as="button"
            w={8}
            h={8}
            borderWidth={1}
            borderColor="whiteAlpha.400"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            color="white"
            _hover={{ borderColor: "white" }}
            onClick={next}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Box>
        </Flex>
      </Box>
    </VStack>
  )
}
