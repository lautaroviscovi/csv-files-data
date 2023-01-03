import { render, waitFor } from '@testing-library/react';
import { FilesDataTable } from '../components/FilesDataTable/FilesDataTable'

test('FilesDataTable should render correctly', () => {
	const { getByText } = render(<FilesDataTable />);
	expect(getByText('File Name')).toBeInTheDocument();
	expect(getByText('Text')).toBeInTheDocument();
	expect(getByText('Number')).toBeInTheDocument();
	expect(getByText('Hex')).toBeInTheDocument();
  });

test('FilesDataTable should render the expected data', async () => {
	const { getByText } = render(<FilesDataTable />);
	await waitFor(() => {
	  expect(getByText('test2.csv')).toBeInTheDocument();
	  expect(getByText('ETIxtijnQWptIhyaoroIEoxKwrV')).toBeInTheDocument();
	  expect(getByText('4')).toBeInTheDocument();
	  expect(getByText('7b0113be7e20ce2d6bf8918c81679668')).toBeInTheDocument();
	});
  });