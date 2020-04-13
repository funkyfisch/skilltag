import { shallowMount } from "@vue/test-utils";
import ProfileTile from "@/components/ProfileTile.vue";

describe("ProfileTile.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "";
    const wrapper = shallowMount(ProfileTile, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
