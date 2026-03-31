import { Box, Heading, HStack, Link as ChakraLink, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import SupportCard from "@/components/home/support-card"

export default function Support() {
  return (
    <Box as="section" bg="#f5f5f5" w="100vw" py={20}>
      <VStack gap={16} maxW="1280px" mx="auto" px={{ base: 5, md: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="600"
          letterSpacing="-0.5px"
          lineHeight="1.2"
          color="#1b1919"
          textAlign="center"
        >
          O Dropbox apoia você e sua<br />empresa em todas as etapas
        </Heading>

        <HStack gap={12} align="start" w="full" flexWrap={{ base: "wrap", lg: "nowrap" }}>
          <SupportCard
            icon={
              <Image
                src="/images/ProtectFilesLight.svg"
                alt="Ícone de cadeado"
                width={128}
                height={128}
              />
            }
            title="Armazene e proteja seus arquivos"
            description={
              <>
                Comece com 3 TB de armazenamento e backup, com recursos de segurança como recuperação
                de arquivos, proteção por senha, marca d&#39;água e histórico do visualizador{" "}
                <ChakraLink color="#0061ff" asChild>
                  <NextLink href="#"></NextLink>
                </ChakraLink>
              </>
            }
          />
          <SupportCard
            icon={
              <Image
                src="/images/SharedContentLight.svg"
                alt="Ícone de lupa"
                width={128}
                height={128}
              />
            }
            title="Compartilhe seu conteúdo"
            description="Esqueça os anexos de e-mails. Com o Dropbox, você pode enviar arquivos grandes com confiança e ficar por dentro das atividades dos arquivos sem precisar alternar de ferramenta ou dispositivo."
          />
          <SupportCard
            icon={
              <Image
                src="/images/CollaborateLight.svg"
                alt="Ícone de balões de conversa"
                width={128}
                height={128}
              />
            }
            title="Colabore em seu trabalho"
            description="Acelere a colaboração em vídeos e use o Replay para agilizar opiniões e aprovações em projetos criativos."
          />
          <SupportCard
            icon={
              <Image
                src="/images/ManageBusinessLight.svg"
                alt="Ícone de varinha em documento"
                width={128}
                height={128}
              />
            }
            title="Gerencie sua empresa"
            description="Prepare e edite PDFs, envie e assine eletronicamente seus contratos mais importantes com facilidade, tudo em um só lugar"
          />
        </HStack>
      </VStack>
    </Box>
  )
}