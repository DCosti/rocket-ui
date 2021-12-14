import React from 'react'
import ExpandingText from './index'
import { Box } from '@material-ui/core'

export const ExpandingTextExample = () => {
    return <Box sx={{ width: '100%', maxWidth: 500 }} style={{ padding: '15px 25px' }}>
        <ExpandingText minLength={48} text='Basic example of using ExpandingText component. To see what else can do, check the properties section' />
    </Box>
}