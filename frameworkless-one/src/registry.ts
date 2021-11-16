import { State } from "./models/todo";

const registry: any = { }

const renderWrapper = (component: any) => {
	return (targetElement: any, state: State, events: any) => {
		const element = component(targetElement, state, events)

		const childComponents = element
			.querySelectorAll('[data-component]')

		Array
			.from(childComponents)
			.forEach((target: any) => {
				const name = target
					.dataset
					.component

				const child = registry[name]
				if (!child) {
					return
				}

				target.replaceWith(child(target, state, events))
			})

		return element
	}

}

const add = (name: string, component: any) => {
	registry[name] = renderWrapper(component)
}

const renderRoot = (root: any, state: State, events: any) => {
	const cloneComponent = (root: any) => {
		return root.cloneNode(true)
	}

	return renderWrapper(cloneComponent)(root, state, events)
}

export default {
	add,
	renderRoot
}