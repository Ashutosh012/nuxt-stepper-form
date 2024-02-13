import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexPage from '~/pages/index.vue';
import Title from '~/components/Title.vue';
import Button from '~/components/Button.vue';

describe('Index Page test suite', () => {
    let [wrapper, shallowMountOpts] = [];
    
    beforeEach(() => {
        shallowMountOpts = {
            global:{
                stubs:{
                    Title,
                }
            }
        };
    })

    beforeAll(async() => {
        mockNuxtImport('useHead', () => {
            return () => {
                return{
                    title: vi.fn(),
                    meta: vi.fn(),
                    bodyAttrs: vi.fn(),
                }
            }
        });
        mockNuxtImport('useRouter', () => {
            return () => {
                return{
                    push:vi.fn()
                }
            }
        })
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('render title and button component', async() => {
        wrapper = mount(IndexPage, shallowMountOpts);
        expect(wrapper.findComponent(Title).exists()).toBe(true);
        expect(wrapper.findComponent(Button).exists()).toBe(true);
    });

    it('Verify correct value of Title component Props', async() => {
        wrapper = mount(IndexPage, shallowMountOpts);
        const titleWrapper = wrapper.findComponent(Title);
        expect(titleWrapper.exists()).toBe(true);
        expect(titleWrapper.props('tag')).toBe('h1');
        expect(titleWrapper.props('title')).toBe('Employee Management System');
    });

    it('Verify correct value of Button component Props', async() => {
        wrapper = mount(IndexPage, shallowMountOpts);
        const buttonWrapper = wrapper.findComponent(Button);
        expect(buttonWrapper.exists()).toBe(true);
        expect(buttonWrapper.props('tag')).toBe('button');
        expect(buttonWrapper.props('types')).toBe('button');
        expect(buttonWrapper.props('title')).toBe('Add Employee');
    });
});