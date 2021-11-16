import filtersView from './filters';

let targetElement;

const TEMPLATE = /*html*/`
	<ul class="filters">
		<li>
			<a href="#/">All</a>
		</li>
		<li>
			<a href="#/active">Active</a>
		</li>
		<li>
			<a href="#/completed">Completed</a>
		</li>
	</ul> 
`
describe('filters view', () => {
	beforeEach(()=>{
		const tempElement = document.createElement('div');
		tempElement.innerHTML = TEMPLATE;
		targetElement = tempElement.childNodes[0];	
	})

	test('should add the class "selected" to the anchor with the same text of the current filter ', () => {
		const newCounter = filtersView(targetElement, {
			currentFilter: 'Active'
		})

		const selectedItem= newCounter.querySelector('li a.selected');
		expect(selectedItem.textContent).toBe('Active')
	})
	
})

