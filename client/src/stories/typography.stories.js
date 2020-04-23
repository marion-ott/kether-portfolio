import React from 'react';
import Typography from '../components/atoms/typography';

export const Small = () => <Typography size='small' testid="small-label"><span>Small label</span></Typography>;
export const Medium = () => <Typography testid="medium-label"><span>Medium label</span></Typography>;
export const Large = () => <Typography size='large' testid="large-label"><span>Large label</span></Typography>;
export const ExtraLarge = () => <Typography size='extraLarge' testid="large-label"><span>Extra Large label</span></Typography>;