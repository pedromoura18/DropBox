import { Box, Text, VStack } from "@chakra-ui/react"

export default function SupportCard({ icon, title, description }: any) {
  return (
    <VStack align="start" gap={4} flex={1}>
      <Box w={32} h={32}>{icon}</Box>
      <Text fontSize="md" fontWeight="700" color="#1b1919" lineHeight="short">
        {title}
      </Text>
      <Text fontSize="sm" color="#5f5b56" lineHeight="tall">
        {description}
      </Text>
    </VStack>
  )
}