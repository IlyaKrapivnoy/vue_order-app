import { mount } from '@vue/test-utils';
import OrderButtons from '@/components/OrderButtons/OrderButtons.vue';

describe('OrderButtons.vue', () => {
  it('emits the "onOrderClick" event when a button is clicked', async () => {
    const wrapper = mount(OrderButtons);

    // Simulate a click on the first button
    await wrapper.findAll('button').at(0).trigger('click');

    // Assert that the "onOrderClick" event was emitted with the expected argument
    expect(wrapper.emitted('onOrderClick')).toBeTruthy();
    expect(wrapper.emitted('onOrderClick')[0]).toEqual(['location']);
  });
});
