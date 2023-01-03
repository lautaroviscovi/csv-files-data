import { fetchData } from '../utils'

test('fetchData should fetch data from a valid URL', async () => {
	const data = await fetchData('http://localhost:3001/files/data');
	expect(data).toBeDefined();
  });
  
  test('fetchData should return an array', async () => {
	const data = await fetchData('http://localhost:3001/files/data');
	expect(Array.isArray(data)).toBe(true);
  });
  
  test('fetchData should return an array of objects with the correct structure', async () => {
	const data = await fetchData('http://localhost:3001/files/data');
	data.forEach(item => {
	  expect(item).toHaveProperty('file');
	  expect(item).toHaveProperty('lines');
	});
  });
  

  test('fetchData should return the expected data', async () => {
	const data = await fetchData('http://localhost:3001/files/data');
	expect(data).toContainEqual({
	  file: 'test2.csv',
	  lines: [
		{
		  text: 'ETIxtijnQWptIhyaoroIEoxKwrV',
		  number: 4,
		  hex: '7b0113be7e20ce2d6bf8918c81679668'
		}
	  ]
	});
});


