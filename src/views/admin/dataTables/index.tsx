
import { Box, SimpleGrid } from '@chakra-ui/react';
import DevelopmentTable from './components/DevelopmentTable';
import CheckTable from './components/CheckTable';
import ColumnsTable from './components/ColumnsTable';
import ComplexTable from './components/ComplexTable'; 
import tableDataDevelopment from './variables/tableDataDevelopment';
import tableDataCheck from './variables/tableDataCheck';
import tableDataColumns from './variables/tableDataColumns';
import tableDataComplex from './variables/tableDataComplex';

export default function Settings() {
	// Chakra Color Mode
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' columns={{ sm: 1, md: 2 }} spacing={{ base: '20px', xl: '20px' }}>
				<DevelopmentTable   tableData={tableDataDevelopment} />
				<CheckTable tableData={tableDataCheck} />
				<ColumnsTable  tableData={tableDataColumns} />
				<ComplexTable tableData={tableDataComplex} />
			</SimpleGrid>
		</Box>
	);
}
