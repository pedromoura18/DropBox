import { Box, HStack } from "@chakra-ui/react"
import Image from "next/image"
import UseCaseCard from "@/components/home/use-case-card"

export default function UseCases() {
  return (
    <Box as="section" bg="#1a1a1a" w="100vw" pb={16}>
      <Box maxW="1380px" mx="auto" px={{ base: 5, md: 8 }}>
        <HStack gap={4} align="stretch" flexWrap={{ base: "wrap", lg: "nowrap" }}>
          <UseCaseCard
            visual={
              <Box position="relative" w="full" h="full">
                <Image
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/features/teams-ui-1272x424.jpg?id=46ced2be-c9ec-4e82-bd30-e334cdc6083c&output_type=jpg"
                  alt="Avatares de usuários do Dropbox para equipes"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  unoptimized
                />
              </Box>
            }
            title="Para trabalho"
            description="Trabalhe com eficiência com colegas e clientes, permaneça em sincronia nos projetos e mantenha os dados da empresa seguros — tudo em um só lugar."
            buttonLabel="Baixar o Dropbox para o trabalho"
          />
          <UseCaseCard
            visual={
              <Box position="relative" w="full" h="full">
                <Image
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/features/professionals-ui-1272x424.jpg?id=19f82ba4-3e4d-44b1-8b25-94b223e08240&output_type=jpg"
                  alt="Recursos do Dropbox para uso pessoal"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  unoptimized
                />
              </Box>
            }
            title="Para uso pessoal"
            description="Mantenha tudo o que é importante para você e sua família em um só lugar, com segurança e facilidade de compartilhamento. Faça backup de arquivos na nuvem, compartilhe fotos e vídeos e muito mais."
            buttonLabel="Baixar o Dropbox para uso pessoal"
          />
        </HStack>
      </Box>
    </Box>
  )
}
