import { render, screen } from '@testing-library/react';
import App from './App';
import { fireEvent } from '@testing-library/react';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
})

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
})

// fireEvent api 를 사용해서 테스트를 하기도 함(테스트용 api는 다양함)
test('When the + button is pressed, the counter changes to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click('buttonElement');
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(1);
})

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  expect(buttonElement).toHaveStyle({bacakgroundColor: 'blue'});
})

test('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click('onOffButtonElement');
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
})

