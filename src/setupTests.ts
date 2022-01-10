// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme needs to be installed with a configured adapter that
// corresponds to the React version we're using for unit tests to work.
Enzyme.configure({ adapter: new Adapter() });

/**
 * == GLOBAL MOCKS ==
 *
 * Global mocks for every test case. Run for every test suite in every test file.
 * Use this in order to mock implementation details of module dependencies which
 * don't need to be tested.
 */

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn()
    };
  };

// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => ({
    pathname: '/'
  })
}));
