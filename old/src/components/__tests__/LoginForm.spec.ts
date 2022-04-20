import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LoginForm from "../layouts/LoginForm.vue";

describe("LoginForm", () => {
  it("should render form title properly", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find("h3").text()).toBe("GamePanel");
  });

  it("should render form fields", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.findAll("input").length).toBe(2);
  });

  it("should render form submit button", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find("button").text()).toBe("Sign in");
  });

  it("should render footer", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find("footer").text()).toBe("2022 • GamePanel");
  });
});

describe("login form input", () => {
  it("should render email input", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find("input[name='email']").exists()).toBe(true);
  });

  it("should render password input", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find("input[name='password']").exists()).toBe(true);
  });
});
