import { Box, Button, Flex, Link as ChakraLink, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaUser, FaUsers,FaHdd,FaMobileAlt, FaClock, FaPaperPlane, FaFilePdf, FaImage, FaLock, FaFolder, FaShareAlt, FaUserShield, FaLayerGroup, FaKey, FaCheckCircle, FaSignInAlt
} from "react-icons/fa"

function FeatureIcon({ type }: { type: string }) {
  const style = { color: "#5f5b56", fontSize: "15px", flexShrink: 0 }

  if (type === "user") return <FaUser style={style} />
  if (type === "users") return <FaUsers style={style} />
  if (type === "storage") return <FaHdd style={style} />
  if (type === "device") return <FaMobileAlt style={style} />
  if (type === "clock") return <FaClock style={style} />
  if (type === "send") return <FaPaperPlane style={style} />
  if (type === "pdf") return <FaFilePdf style={style} />
  if (type === "brand") return <FaImage style={style} />
  if (type === "lock") return <FaLock style={style} />
  if (type === "folder") return <FaFolder style={style} />
  if (type === "share") return <FaShareAlt style={style} />
  if (type === "group") return <FaUsers style={style} />
  if (type === "admin") return <FaUserShield style={style} />
  if (type === "tiered") return <FaLayerGroup style={style} />
  if (type === "e2e") return <FaLock style={style} />
  if (type === "key") return <FaKey style={style} />
  if (type === "compliance") return <FaCheckCircle style={style} />
  if (type === "sso") return <FaSignInAlt style={style} />

  return <FaClock style={style} />
}

export default function PlanCard({ audience, name, price, priceDetail, featured, primaryLabel, showSecondary, features }: any) {
  return (
    <Box
      position="relative"
      bg="white"
      borderRadius="xl"
      borderWidth={1}
      borderColor="gray.200"
      pt={featured ? 12 : 6}
      pb={8}
      px={6}
      flex={1}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      transition="box-shadow 0.2s"
    >
      {featured && (
        <Flex
          position="absolute"
          top={0} left={0} right={0}
          bg="#b8e000"
          color="#1b1919"
          fontSize="sm"
          fontWeight="600"
          px={4}
          py={1.5}
          align="center"
          justify="center"
          gap={1.5}
          borderTopRadius="xl"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          Melhor valor
        </Flex>
      )}

      <Text fontSize="xs" color="gray.500" mb={1} fontWeight="400">{audience}</Text>

      <Text fontSize="2xl" fontWeight="700" letterSpacing="-0.5px" mb={2} color="#1b1919">
        {name}
      </Text>

      <Text fontSize="lg" fontWeight="400" color="#1b1919" mb={5}>
        {price}
        <Text as="span" fontSize="sm" fontWeight="400" color="gray.500">{priceDetail}</Text>
      </Text>

      <Button
        w="full"
        bg="#0061ff"
        color="white"
        rounded="full"
        fontWeight="600"
        mb={2}
        _hover={{ bg: "#0052d9" }}
        asChild
      >
        <NextLink href="#">
          {primaryLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NextLink>
      </Button>

      {showSecondary && (
        <ChakraLink
          display="flex" alignItems="center" gap={1.5}
          fontSize="sm" fontWeight="400" color="#1b1919"
          mb={5} textDecoration="underline" asChild
        >
          <NextLink href="#">
            ou compre agora
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NextLink>
        </ChakraLink>
      )}

      <Box borderTopWidth={1} borderColor="gray.100" my={4} />

      <VStack align="start" gap={3}>
        {features?.map((feat: any, i: number) => (
          <Flex key={i} align="start" gap={2.5}>
            <Box mt={0.5} flexShrink={0}>
              <FeatureIcon type={feat.icon} />
            </Box>
            <Text fontSize="sm" color="#1b1919" lineHeight="1.4" fontWeight="400">
              {feat.text}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  )
}