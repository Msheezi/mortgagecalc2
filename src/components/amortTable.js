
import React from 'react'


import { Paper,makeStyles, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, TableFooter} from '@material-ui/core'

  const useStyles = makeStyles({
          container: {
            maxWidth: "800px",
            // minWidth: "200px", 
            margin: "5px auto ",
            // boxSizing: "border-box",
            width: "95%"
          },
          table: {
            minWidth: 650,
          },
          pageContainer: {
            // width: "100vw",
            maxWidth: "800px",
            minWidth: "200px", 
            margin: "0 auto", 
            "& th": {
                padding: "2pt"

            } 
          }, 
          root: {
              backgroundColor: "#54DEFD",
              color: "white", 
              "& th": {
                  color: "white",
                  fontSize: "0.8rem"
                 
              }
          },
          body: {
              "& td":{
                  padding: "1pt", 
                  fontSize: "0.8rem"
              }
          }
          
        });

export const AmortTable = ({paymentData})=>{

    const classes = useStyles()
    const paymentDetails = paymentData.map(payment =>  {
        const {month, ttlPayment, interestPaid, principlePaid, extraPayment, remainingPrinciple} = payment
        
        return(
            <TableRow hover key={month}>
                <TableCell align="center">{month + 1}</TableCell>
                <TableCell align="center">{ttlPayment}</TableCell>
                <TableCell align="center">{interestPaid}</TableCell>
                <TableCell align="center">{principlePaid}</TableCell>
                
                <TableCell align="center">{remainingPrinciple}</TableCell>
            </TableRow>
        )
    })

    return (
        <TableContainer className={classes.container} component={Paper}>
            <Table className={classes.pageContainer} aria-label="simple table" >
                <TableHead className={classes.root} xs={12}>
                    <TableRow  >
                        <TableCell align="center">Month</TableCell>
                        <TableCell align="center">Payment</TableCell>
                        <TableCell align="center">Interest</TableCell>
                        <TableCell align="center">Principle</TableCell>
                        
                        <TableCell align="center">Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.body} xs={12}>
                    {paymentDetails}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell align="center">Total Months 10</TableCell>
                        <TableCell align="center">Total Payments 1000000</TableCell>
                        <TableCell align="center">Total Interest 11000</TableCell>
                        <TableCell align="center"></TableCell>
                        
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )

}
