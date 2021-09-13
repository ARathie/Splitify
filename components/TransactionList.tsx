import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@windmill/react-ui";

function TransactionList() {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center text-sm">
                <Avatar src="/img/avatar-1.jpg" alt="Judith" />
                <span className="font-semibold ml-2">Judith Ipsum</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">$ 534.87</span>
            </TableCell>
            <TableCell>
              <Badge type="success">success</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableFooter>
        <Pagination
          totalResults={10}
          resultsPerPage={4}
          onChange={() => {}}
          label="Table navigation"
        />
      </TableFooter>
    </TableContainer>
  );
}

export default TransactionList;
