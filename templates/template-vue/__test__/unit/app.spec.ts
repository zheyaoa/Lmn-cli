import { mount } from '@vue/test-utils'
import App from '../../src/app'

describe('Component', () => {
	test('app component', () => {
		const wapoper = mount(App)
		expect(wapoper.isVueInstance()).toBeTruthy()
	})
})
