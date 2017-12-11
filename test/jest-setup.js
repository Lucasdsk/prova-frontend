import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount

// Pula as mensagens de aviso do 'createElement'
// Mas retorna um erro para qualquer outra
console.error = message => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};