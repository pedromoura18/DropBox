import { Box, Text, VStack } from "@chakra-ui/react";

type SupportCardProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
};

export default function SupportCard({
  icon,
  title,
  description,
}: SupportCardProps) {
  return (
    <VStack align="start" gap={4} flex={1}>
      <Box w={32} h={32}>{icon}</Box>

      <Text fontSize="md" fontWeight="700" color="#1b1919">
        {title}
      </Text>

      <Text fontSize="sm" color="#5f5b56">
        {description}
      </Text>
    </VStack>
  );
}