import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { H1, H2, H3, H4, BodyLarge, Body, Label } from '../stories/typography.stories';

describe('Renders Typography component', () => {
  test('with a size at h1', () => {
    const { container, getByTestId } = render(<H1 />);
    expect(container).toBeTruthy();
    const typo = getByTestId('h1-typo')
    expect(typo).toHaveStyleRule('font-size', '64px');
  });

  test('with a size at h2', () => {
    const { container, getByTestId } = render(<H2 />);
    expect(container).toBeTruthy();
    const typo = getByTestId('h2-typo')
    expect(typo).toHaveStyleRule('font-size', '32px');
  });

  test('with a size at h3', () => {
    const { container, getByTestId } = render(<H3 />);
    expect(container).toBeTruthy();
    const typo = getByTestId('h3-typo')
    expect(typo).toHaveStyleRule('font-size', '24px');
  });

  test('with a size at h4', () => {
    const { container, getByTestId } = render(<H4 />);
    expect(container).toBeTruthy();
    const typo = getByTestId('h4-typo')
    expect(typo).toHaveStyleRule('font-size', '18px');
  });

  test('with a size at bodyLarge', () => {
    const { container, getByTestId } = render(<BodyLarge />);
    expect(container).toBeTruthy();
    const typo = getByTestId('bodyLarge-typo')
    expect(typo).toHaveStyleRule('font-size', '24px');
  });

  test('with a size at body', () => {
    const { container, getByTestId } = render(<Body />);
    expect(container).toBeTruthy();
    const typo = getByTestId('body-typo')
    expect(typo).toHaveStyleRule('font-size', '14px');
  });

  test('with a size at label', () => {
    const { container, getByTestId } = render(<Label />);
    expect(container).toBeTruthy();
    const typo = getByTestId('label-typo')
    expect(typo).toHaveStyleRule('font-size', '14px');
  });
});