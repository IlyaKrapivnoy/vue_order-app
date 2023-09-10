import { mount } from '@vue/test-utils';
import JobList from '../JobsList.vue';
import jobs from '@/data/jobs';

describe('JobList.vue', () => {
  it('renders ordered job list', async () => {
    // Mount the component with props
    const wrapper = mount(JobList, {
      props: {
        jobs,
        order: 'title',
      },
    });

    // Wait for Vue to update the component
    await wrapper.vm.$nextTick();

    // Assert that the ordered job list is displayed correctly
    const jobTitles = wrapper.findAll('.job-list h2');
    expect(jobTitles.length).toBe(3);
    expect(jobTitles[0].text()).toBe(
      'JavaScript Developer in Lisbon, Portugal',
    );
    expect(jobTitles[1].text()).toBe('React Developer in Berlin, Germany');
    expect(jobTitles[2].text()).toBe('Vue Developer in Porto, Portugal');

    // Use Jest's toMatchSnapshot to create a snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
