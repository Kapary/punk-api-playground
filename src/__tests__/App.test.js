/* import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); */


import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('checks the equality', () => {
  expect(1 + 2).toEqual(3);
})

it('should render "New App" as page title ', () => {
  const wrapper = shallow(<App pageTitle="New App"/>);

  // We should use instance when checking props that are not used at the top component level
  expect(wrapper.instance().props.pageTitle).toEqual('New App');
});


it('should check the euqality', () => {
  expect(10+3).toEqual(13);
});

// This style will only work for the props used at the root level like "small" or sth alike
it('should render "New App" as page title ', () => {
  const wrapper = shallow(<App rootProp="WTF"/>);
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.prop('rootProp')).toEqual('WTF');
});






