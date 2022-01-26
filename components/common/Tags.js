import { Tag , Text } from "@chakra-ui/react"

const Tags = ({ colorScheme, size, tagName, ...props }) => {
  return (
    <Tag colorScheme={colorScheme} size={size} {...props}>
      <Text whiteSpace="nowrap" casing="upperCase">{tagName}</Text>
    </Tag>
  )
}

export default Tags;