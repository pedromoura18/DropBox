import { Box, Button, Text, VStack } from "@chakra-ui/react"

export default function UseCaseCard({ visual, title, description, buttonLabel }: any) {
  return (
    <Box
      bg="#2a2724"
      borderRadius="xl"
      overflow="hidden"
      borderWidth={1}
      borderColor="whiteAlpha.100"
      flex={1}
    >
      <Box h={44} overflow="hidden" position="relative">
        {visual}
      </Box>

      <VStack align="start" gap={3} px={7} pt={6} pb={8}>
        <Text fontSize="xl" fontWeight="700" color="white">{title}</Text>
        <Text fontSize="sm" color="whiteAlpha.600" lineHeight="tall">{description}</Text>
        <Button
          bg="blue.600"
          color="white"
          rounded="full"
          fontWeight="700"
          mt={2}
          _hover={{ bg: "blue.700" }}
        >
          {buttonLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Button>
      </VStack>
    </Box>
  )
}
