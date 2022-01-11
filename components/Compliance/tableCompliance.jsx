import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const tableCompliance = ({columns, handdleActiva}) => {
    function createData(name, count, state) {
        return { name, count, state};
    }
      
    const rows = [
        createData('Cliente 1', '1324171354', 'Activa'),
        createData('Cliente 2', '1403500365', 'Documentación Vencida'),
        createData('Cliente 3', '60483973', 'Documentación Vencida'),
        createData('Cliente 4', '327167434', 'Documentación Vencida'),
        createData('Cliente 5', '37602103', 'Activa'),
        createData('Cliente 6', '25475400', 'Documentación Vencida'),
        createData('Cliente 7', '83019200', 'Documentación Vencida'),
        createData('Cliente 8', '4857000', 'Documentación Vencida'),
        createData('Cliente 9', '126577691', 'Activa'),
        createData('Cliente 10', '126317000', 'Documentación Vencida'),
        createData('Cliente 11', '67022000', 'Documentación Vencida'),
        createData('Cliente 12', '67545757', 'Documentación Vencida'),
        createData('Cliente 13', '146793744', 'Activa'),
        createData('Cliente 14 ', '200962417', 'Documentación Vencida'),
        createData('Cliente 15', '210147125', 'Documentación Vencida'),
    ];

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop:'5px'}}>
                    <TableContainer sx={{ maxHeight: 550 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                    color: '#484964',
                                    fontSize:'14px', 
                                    fontWeight:'bold',
                                    backgroundColor: '#F9F9FC'
                                }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    if (row.state !== 'Activa' && column.id === 'state'){
                                        return(
                                            <TableCell key={column.id} align={column.align} style={{color:'red', fontSize: '12px', display:'flex', justifyContent:'space-between', lineHeight: '30px'}}>
                                                {value}
                                                <button className='btn' style={{border:'1px solid red', borderRadius:'20px', maxWidth:'100px', maxHeight:'40px'}} onClick={() => handdleActiva(row.name, row.state)}>
                                                    Actualizar
                                                </button>
                                            </TableCell>
                                        );
                                    }
                                    if (row.state === 'Activa' && column.id === 'state'){
                                        return(
                                            <TableCell key={column.id} align={column.align} style={{color:'green', fontSize: '12px', display:'flex', justifyContent:'space-between', lineHeight: '30px'}}>
                                                {value}
                                                <button className='btn' style={{border:'1px solid green', borderRadius:'20px', minWidth:'100px'}} onClick={() => handdleActiva(row.name, row.state)}>
                                                    ver
                                                </button>
                                            </TableCell>
                                        );
                                    }
                                    if(column.id === 'name') {
                                        return(
                                            <TableCell key={column.id} align={column.align} style={{color:'#3D5A6C', fontSize: '14px', fontWeight: 'bold'}}>
                                                {value}
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={column.id} align={column.align} style={{color: column.color, fontSize: '12px', fontWeight:'500'}}>
                                            {value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
    )
}

export default tableCompliance;