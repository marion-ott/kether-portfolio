import React from 'react';
import Typography from "../components/atoms/typography";

export default {
  title: 'Typography',
  component: Typography,
};

const text = "The quick brown fox jumps over the lazy dog";

export const H1 = () =>
  <Typography color="primary" size='h1' testid="h1-typo"><span>{text}</span></Typography>;

export const H2 = () =>
  <Typography color="primary" size="h2" testid="h2-typo"><span>{text}</span></Typography>;

export const H3 = () =>
  <Typography color="primary" size='h3' testid="h3-typo"><span>{text}</span></Typography>;

export const H4 = () =>
  <Typography color="primary" size='h4' testid="h4-typo"><span>{text}</span></Typography>;

export const BodyLarge = () =>
  <Typography color="primary" size='bodyLarge' testid="bodyLarge-typo"><span>{text}-</span></Typography>;

export const Body = () =>
  <Typography color="primary" size='body' testid="body-typo"><span>{text}</span></Typography>;

export const Label = () =>
  <Typography color="primary" size='label' testid="label-typo" testid="label-typo"><span>{text}</span></Typography>;
