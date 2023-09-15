import { mount } from '@vue/test-utils';
import HeaderView from '@/components/Header/HeaderView.vue';
import OrderButtons from '@/components/OrderButtons/OrderButtons.vue';

describe('HeaderView.vue', () => {
  it('renders the site logo', () => {
    const wrapper = mount(HeaderView);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('renders the OrderButtons component', () => {
    const wrapper = mount(HeaderView, {
      global: {
        components: {
          OrderButtons,
        },
      },
    });
    expect(wrapper.findComponent(OrderButtons).exists()).toBe(true);
  });
});
