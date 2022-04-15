import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navabar = () => {
	return (
		<Breadcrumb
			spacing='8px'
			separator={<BreadcrumbSeparator />}
			fontSize={{ base: "15px", md: "15px", lg: "20px" }}
			
		>
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} to='/'>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink as={Link} to='/demo'>
					Demo
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
			<BreadcrumbLink as={Link} to='/envelope'>
					Envelope
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default Navabar;
