"use client"

<<<<<<< HEAD
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"
=======
import { Box, Flex, HStack, Text, } from "@chakra-ui/react"
>>>>>>> origin/main
import { useState } from "react"
import PlanCard from "@/components/home/plan-card"

const planData = {
  annual: [
    {
      audience: "Para uma pessoa",
      name: "Plus",
      price: "US$ 9,99",
      priceDetail: "/mês",
      featured: false,
      primaryLabel: "Compre agora",
      showSecondary: false,
      features: [
        { icon: "user",    text: "Para uma pessoa" },
        { icon: "storage", text: "2 TB de armazenamento" },
        { icon: "device",  text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",   text: "30 dias para restaurar arquivos excluídos" },
        { icon: "send",    text: "Transfira arquivos de até 50 GB" },
        { icon: "pdf",     text: "Edite PDFs e obtenha assinaturas" },
      ],
    },
    {
      audience: "Para profissionais autônomos",
      name: "Professional",
      price: "US$ 16,58",
      priceDetail: "/mês",
      featured: false,
      primaryLabel: "Avaliação grátis",
      showSecondary: true,
      features: [
        { icon: "user",    text: "Para uma pessoa" },
        { icon: "storage", text: "3 TB de armazenamento" },
        { icon: "device",  text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",   text: "180 dias para restaurar arquivos excluídos" },
        { icon: "send",    text: "Transfira arquivos de até 100 GB" },
        { icon: "pdf",     text: "Edite PDFs e obtenha assinaturas" },
        { icon: "brand",   text: "Personalize os arquivos com a sua marca antes de compartilhar" },
        { icon: "lock",    text: "Proteja os arquivos com senha" },
      ],
    },
    {
      audience: "Para equipes",
      name: "Standard",
      price: "US$ 15",
      priceDetail: "/mês por usuário",
      featured: true,
      primaryLabel: "Avaliação grátis",
      showSecondary: true,
      features: [
        { icon: "users",   text: "Para 3 pessoas ou mais" },
        { icon: "storage", text: "5 TB de armazenamento para a equipe" },
        { icon: "device",  text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",   text: "180 dias para restaurar arquivos excluídos" },
        { icon: "send",    text: "Transfira arquivos de até 100 GB" },
        { icon: "pdf",     text: "Edite PDFs e obtenha assinaturas" },
        { icon: "brand",   text: "Personalize os arquivos com a sua marca antes de compartilhar" },
        { icon: "lock",    text: "Proteja os arquivos com senha" },
        { icon: "folder",  text: "Use pastas de equipe para organização" },
        { icon: "share",   text: "Gerencie o compartilhamento de equipe" },
        { icon: "group",   text: "Crie grupos e funções" },
        { icon: "admin",   text: "Controle administrativo" },
      ],
    },
    {
      audience: "Para empresas",
      name: "Advanced",
      price: "US$ 24",
      priceDetail: "/mês por usuário",
      featured: false,
      primaryLabel: "Avaliação grátis",
      showSecondary: true,
      features: [
        { icon: "users",    text: "Para 3 pessoas ou mais" },
        { icon: "storage",  text: "A partir de 15 TB para a equipe" },
        { icon: "device",   text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",    text: "1 ano para restaurar arquivos excluídos" },
        { icon: "send",     text: "Transfira arquivos de até 100 GB" },
        { icon: "pdf",      text: "Edite PDFs e obtenha assinaturas" },
        { icon: "brand",    text: "Personalize os arquivos com a sua marca antes de compartilhar" },
        { icon: "lock",     text: "Proteja os arquivos com senha" },
        { icon: "folder",   text: "Use pastas de equipe para organização" },
        { icon: "share",    text: "Gerencie o compartilhamento de equipe" },
        { icon: "group",    text: "Crie grupos e funções" },
        { icon: "tiered",   text: "Gerenciamento de administração em níveis" },
        { icon: "e2e",      text: "Criptografia de ponta a ponta" },
        { icon: "key",      text: "Gerenciamento avançado de chaves" },
        { icon: "compliance", text: "Acompanhamento da conformidade" },
        { icon: "sso",      text: "Login único (SSO)" },
      ],
    },
  ],
  monthly: [
    {
      audience: "Para uma pessoa",
      name: "Plus",
      price: "US$ 11,99",
      priceDetail: "/mês",
      featured: false,
      primaryLabel: "Compre agora",
      showSecondary: false,
      features: [
        { icon: "user",    text: "Para uma pessoa" },
        { icon: "storage", text: "2 TB de armazenamento" },
        { icon: "device",  text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",   text: "30 dias para restaurar arquivos excluídos" },
        { icon: "send",    text: "Transfira arquivos de até 50 GB" },
        { icon: "pdf",     text: "Edite PDFs e obtenha assinaturas" },
      ],
    },
    {
      audience: "Para profissionais autônomos",
      name: "Professional",
      price: "US$ 19,99",
      priceDetail: "/mês",
      featured: false,
      primaryLabel: "Avaliação grátis",
      showSecondary: true,
      features: [
        { icon: "user",    text: "Para uma pessoa" },
        { icon: "storage", text: "3 TB de armazenamento" },
        { icon: "device",  text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",   text: "180 dias para restaurar arquivos excluídos" },
        { icon: "send",    text: "Transfira arquivos de até 100 GB" },
        { icon: "pdf",     text: "Edite PDFs e obtenha assinaturas" },
        { icon: "brand",   text: "Personalize os arquivos com a sua marca antes de compartilhar" },
        { icon: "lock",    text: "Proteja os arquivos com senha" },
      ],
    },
    {
      audience: "Para equipes",
      name: "Standard",
      price: "US$ 18",
      priceDetail: "/mês por usuário",
      featured: true,
      primaryLabel: "Avaliação grátis",
      showSecondary: true,
      features: [
        { icon: "users",   text: "Para 3 pessoas ou mais" },
        { icon: "storage", text: "5 TB de armazenamento para a equipe" },
        { icon: "device",  text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",   text: "180 dias para restaurar arquivos excluídos" },
        { icon: "send",    text: "Transfira arquivos de até 100 GB" },
        { icon: "pdf",     text: "Edite PDFs e obtenha assinaturas" },
        { icon: "brand",   text: "Personalize os arquivos com a sua marca antes de compartilhar" },
        { icon: "lock",    text: "Proteja os arquivos com senha" },
        { icon: "folder",  text: "Use pastas de equipe para organização" },
        { icon: "share",   text: "Gerencie o compartilhamento de equipe" },
        { icon: "group",   text: "Crie grupos e funções" },
        { icon: "admin",   text: "Controle administrativo" },
      ],
    },
    {
      audience: "Para empresas",
      name: "Advanced",
      price: "US$ 30",
      priceDetail: "/mês por usuário",
      featured: false,
      primaryLabel: "Avaliação grátis",
      showSecondary: true,
      features: [
        { icon: "users",    text: "Para 3 pessoas ou mais" },
        { icon: "storage",  text: "A partir de 15 TB para a equipe" },
        { icon: "device",   text: "Mantenha-se conectado em todos os dispositivos" },
        { icon: "clock",    text: "1 ano para restaurar arquivos excluídos" },
        { icon: "send",     text: "Transfira arquivos de até 100 GB" },
        { icon: "pdf",      text: "Edite PDFs e obtenha assinaturas" },
        { icon: "brand",    text: "Personalize os arquivos com a sua marca antes de compartilhar" },
        { icon: "lock",     text: "Proteja os arquivos com senha" },
        { icon: "folder",   text: "Use pastas de equipe para organização" },
        { icon: "share",    text: "Gerencie o compartilhamento de equipe" },
        { icon: "group",    text: "Crie grupos e funções" },
        { icon: "tiered",   text: "Gerenciamento de administração em níveis" },
        { icon: "e2e",      text: "Criptografia de ponta a ponta" },
        { icon: "key",      text: "Gerenciamento avançado de chaves" },
        { icon: "compliance", text: "Acompanhamento da conformidade" },
        { icon: "sso",      text: "Login único (SSO)" },
      ],
    },
  ],
}

export default function Plans() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual")
  const plans = planData[billing]

  return (
    <Box as="section" id="planos" bg="#f5f5f5" w="100vw" pb={20}>
      <Box maxW="1400px" mx="auto" px={{ base: 5, md: 8 }}>

        <HStack gap={6} mb={8}>
          <HStack gap={2} cursor="pointer" onClick={() => setBilling("monthly")}>
            <Box
              w={4} h={4} borderRadius="full" borderWidth={2}
              borderColor={billing === "monthly" ? "#1b1919" : "gray.400"}
              display="flex" alignItems="center" justifyContent="center"
              flexShrink={0}
            >
              {billing === "monthly" && <Box w={2} h={2} borderRadius="full" bg="#1b1919" />}
            </Box>
            <Text fontSize="sm" fontWeight="400" color="#1b1919">Faturado mensalmente</Text>
          </HStack>

          <HStack gap={2} cursor="pointer" onClick={() => setBilling("annual")}>
            <Box
              w={4} h={4} borderRadius="full" borderWidth={2}
              borderColor={billing === "annual" ? "#1b1919" : "gray.400"}
              display="flex" alignItems="center" justifyContent="center"
              flexShrink={0}
            >
              {billing === "annual" && <Box w={2} h={2} borderRadius="full" bg="#1b1919" />}
            </Box>
            <Text fontSize="sm" fontWeight="400" color="#1b1919">Faturado anualmente</Text>
          </HStack>
        </HStack>

        <Flex direction={{ base: "column", lg: "row" }} gap={4} w="full">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </Flex>

      </Box>
    </Box>
  )
}