import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'

@Component
export default class Bar extends tsx.Component<{}> {
	render() {
		return <div>Bar</div>
	}
}
