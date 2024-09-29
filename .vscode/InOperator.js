function gfg() {
	// Illustration of in operator 
	const array = ['geeks', 'for',
		'geeks']

	// Output of the indexed number 
	console.log(0 in array);

	// Output of the Value 
	console.log('for' in array);

	// output of the Array property 
	console.log('length' in array); 
}
gfg();
