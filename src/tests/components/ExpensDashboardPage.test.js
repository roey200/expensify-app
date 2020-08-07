import React from 'react';
import { shallow } from 'enzyme';
import ExpensDashboardPage from '../../components/ExpenseListItem';

test('should render ExpensDashboardPage correctly', () => {
  const wrapper = shallow(<ExpensDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
