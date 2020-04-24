import React from 'react';
import Typography from '../components/atoms/typography';

export const H1 = () =>
    <Typography size='h1' testid="h1-typo"><span>h1-typo</span></Typography>;

export const H2 = () =>
    <Typography size="h2" testid="h2-typo"><span>h2-typo</span></Typography>;

export const H3 = () =>
    <Typography size='h3' testid="h3-typo"><span>h3-typo</span></Typography>;

export const H4 = () =>
    <Typography size='h4' testid="h4-typo"><span>h4-typo</span></Typography>;

export const BodyLarge = () =>
    <Typography size='bodyLarge' testid="bodyLarge-typo"><span>bodyLarge-</span></Typography>;

export const Body = () =>
    <Typography testid="body-typo"><span>body-typo</span></Typography>;

export const Label = () =>
    <Typography size='label' testid="label-typo" testid="label-typo"><span>label-typo</span></Typography>;
