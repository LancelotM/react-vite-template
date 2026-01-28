import { Flex, Spinner } from "@radix-ui/themes";

export default function Loading() {
  return <Flex align='center' justify='center'>
    <h2>🌀 Loading...</h2>
    <Spinner size="3" />
  </Flex>
}