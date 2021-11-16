export default (targetElement:any, { currentFilter }:any) => {
	const newCounter = targetElement.cloneNode(true)
	Array
	  .from(newCounter.querySelectorAll('li a'))
	  .forEach((a:any) => {
		if (a.textContent === currentFilter) {
		  a.classList.add('selected')
		} else {
		  a.classList.remove('selected')
		}
	  })
	return newCounter
  }