import React from 'react'
import Typography from './index'
import { Box } from '@material-ui/core'

export const BasicTypography = () => {
    return <Typography align='center'>Basic example of using Typography</Typography>
}

export const TypographyWithTooltip = () => {
    return <Typography align='center' tooltip='Tooltip option'>Typography with tooltip</Typography>
}

export const TypographyWithVariants = () => {
    return <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" component="div" gutterBottom align='center'>
            h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom component="div" align='center'>
            h2. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" align='center'>
            subtitle1.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" align='center' emphasis={['italic', 'bold']}>
            Subtitle1 variant with italic and bold emphasis.
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div" align='center'>
            subtitle2.
        </Typography>
        <Typography variant="body1" gutterBottom align='center'>
            body1.
        </Typography>
        <Typography variant="button" display="block" gutterBottom align='center' color='error'>
            Button variant with error color
        </Typography>
        <Typography variant="caption" display="block" gutterBottom emphasis='bold' align='center'>
            Caption variant with bold emphasis
        </Typography>
        <Typography variant="overline" display="block" gutterBottom align='center' emphasis='italic' color='secondary'>
            Overline variant with italic emphasis and color secondary
        </Typography>
    </Box>
}