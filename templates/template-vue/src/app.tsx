import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './demo.scss'
import './style.scss'

@Component
export default class App extends tsx.Component<{}> {
	render() {
		return (
			<div class='center'>
				<div id="app">
					<h1>Hello App!</h1>
					<p>
						<router-link to="/foo">Go to Foo</router-link>
						<router-link to="/bar">Go to Bar</router-link>
					</p>
					<router-view></router-view>
				</div>
			</div>
		)
	}
}
