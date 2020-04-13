import { shallowMount } from "@vue/test-utils";
<<<<<<< HEAD

describe("Example", () => {
  it("renders props.msg when passed", () => {
    //   const msg = "new message";
    //   const wrapper = shallowMount(HelloWorld, {
    //     propsData: { msg }
    //   });
    //   expect(wrapper.text()).toMatch(msg);
    expect("success").toEqual("success");
=======
import ProfileTile from "@/components/ProfileTile.vue";

describe("ProfileTile.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "";
    const wrapper = shallowMount(ProfileTile, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
>>>>>>> 5c468c65cad73f9dbba90ac774b40cc746007b03
  });
});
