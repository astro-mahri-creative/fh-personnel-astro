import { JSDOM } from 'jsdom';
import { beforeEach, afterEach, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/dom';
import fs from 'fs';
import path from 'path';

// Load the compiled HTML of the Astro component
const html = fs.readFileSync(path.resolve(__dirname, '../dist/server/pages/personnel.html'), 'utf8');

beforeEach(() => {
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  global.window = dom.window;
  global.document = dom.window.document;
});

afterEach(() => {
  delete global.window;
  delete global.document;
});

it('should apply a random theme on initial render', () => {
  render(document.body);
  const body = document.body;
  const themes = ['phax', 'fheels', 'futurehooman'];
  const hasTheme = themes.some(theme => body.classList.contains(theme));
  expect(hasTheme).toBe(true);
});

it('should change the theme on input focus', () => {
  render(document.body);
  const body = document.body;
  const initialTheme = body.className;
  const inputs = screen.getAllByRole('textbox');
  fireEvent.focus(inputs[0]);
  expect(body.className).not.toBe(initialTheme);
});

it('should change the theme on button click', () => {
  render(document.body);
  const body = document.body;
  const initialTheme = body.className;
  const submitBtn = screen.getByText('TRANSMIT DOCUMENTATION');
  fireEvent.click(submitBtn);
  expect(body.className).not.toBe(initialTheme);
});
