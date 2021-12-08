import React from 'react';
import { render } from '@testing-library/react';
import { BasicTypography } from './typography.composition'

describe('typography', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<BasicTypography />)
        const rendered = getByText('Basic example of using Typography')
        expect(rendered).toBeTruthy()
    });
});