import { StyledH2, StyledSpan } from '@/components'

// MUI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'

// UTILS
import { pxToRem } from '@/utils'

// TYPES
import { AvatarsListsProps } from '@/types'

function AvatarsList(props: AvatarsListsProps) {
  return (
    <>
      {props.listData.map((item, index) => (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            padding: `${pxToRem(12)} 0`,
          }}
          key={index}
        >
          <Box>
            <Avatar
              alt={item.name}
              src={item.avatar || '/dnc-avatar.jpg'}
              sx={{
                width: pxToRem(48),
                height: pxToRem(48),
                marginRight: pxToRem(16),
              }}
            />
          </Box>
          <Box>
            <StyledH2>{item.name}</StyledH2>
            <StyledSpan>{item.subtitle}</StyledSpan>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default AvatarsList
