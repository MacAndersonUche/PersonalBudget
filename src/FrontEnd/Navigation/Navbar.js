import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const Navabar = () => {
	return (
		<Breadcrumb spacing='8px' separator={<BreadcrumbSeparator/>} fontSize={{ base: "15px", md: "15px", lg: "20px" }}>
			<BreadcrumbItem>
				<BreadcrumbLink href='#'>Home</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href='#'>Envelopes</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href='#'>Demo</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};


export default Navabar