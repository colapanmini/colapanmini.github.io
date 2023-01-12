import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

function PaginationComponent(props) {
    const pageNumbers = Math.ceil(props.totalProd / props.prodPerPage);

    const theme = createTheme({
        palette: {
          primary: {
            main: grey[900],
          }
        },
    });

    function handleChange(e, p) {
        props.setCurrentPage(p);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    

    return (
        <ThemeProvider theme={theme}>
        <Stack direction="row" justifyContent="center" spacing={2}>
        <Pagination page={props.currentPage} count={pageNumbers} shape="rounded" color="primary" onChange={handleChange} />
        </Stack>
        </ThemeProvider>
    )
}

export default PaginationComponent;