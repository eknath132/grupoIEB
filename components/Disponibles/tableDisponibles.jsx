/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { makeStyles } from '@mui/styles';
import Icon from '@mui/material/Icon';


const useStyles = makeStyles((theme) => ({
    root: {
      "&::-webkit-scrollbar": {
        width: 5,
        color: '#D2CBCF',
        borderRadius: '10px',
        height:'5px'
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: `1px solid slategrey`,
      },
    },
  }));

const tableDisponibles = ({columns, data, handdleClickModal}) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    return (
        <>
            <TableContainer sx={{ maxHeight: 650, paddingLeft:'0 !important'}} className={classes.root}>
                <Table stickyHeader aria-label="sticky table" style={{}}>
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                color: '#484964',
                                fontSize:'12px', 
                                fontWeight:'bold',
                                backgroundColor: '#F9F9FC',
                                minWidth: column.minWidth
                                }}
                            >
                            
                                {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <StyledTableRow tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                if(column.id === 'comitente') {
                                    return(
                                        <TableCell key={column.id} align={column.align} style={{fontSize: '11px', fontWeight: 'normal', borderRight: '1px solid rgba(34,34,34,0.2)'}}>
                                            <div  style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                                <Icon style={{root: {textAlign:'center'}, fontSize:'25px',padding:'10px', cursor:'pointer'}} onClick={() => handdleClickModal(row.nombre)}>
                                                    <img style={{height:'600%', marginTop:'-35px', marginLeft:'-14px'}} src="/launch.svg"/>
                                                </Icon>
                                                {value}
                                            </div>
                                        </TableCell>
                                    )
                                }
                                if(column.id === 'nombre') {
                                    return(
                                        <TableCell key={column.id} align={column.align} style={{fontSize: '11px', fontWeight: 'normal', borderRight: '1px solid rgba(34,34,34,0.2)'}}>
                                            {value}
                                        </TableCell>
                                    )
                                }
                                if(column.id === 'vencido' && row.vencido < 0) {
                                    return(
                                        <TableCell key={column.id} align={column.align} style={{color:'#FF0000', fontSize: '11px', fontWeight: 'bold', borderRight: '1px solid rgba(34,34,34,0.2)'}}>
                                            {value}
                                        </TableCell>
                                    )
                                }
                                if(column.id === 'vencido' && row.vencido > 0) {
                                    return(
                                        <TableCell key={column.id} align={column.align} style={{color:'#5FE96D', fontSize: '11px', fontWeight: 'bold', borderRight: '1px solid rgba(34,34,34,0.2)'}}>
                                            {value}
                                        </TableCell>
                                    )
                                }
                                return (
                                    <TableCell key={column.id} align={column.align} style={{color: column.color, fontSize: '11px', fontWeight:'normal', borderRight: '1px solid rgba(34,34,34,0.2)'}}>
                                        {value}
                                    </TableCell>
                                );
                                })}
                            </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage='Paginas'
            />
        </>
    )
}

export default tableDisponibles;
