
import React from 'react'


import { Paper,makeStyles, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, TableFooter} from '@material-ui/core'

  const useStyles = makeStyles({
          root: {
            maxWidth: "800px",
            minWidth: "200px", 
            margin: "0 auto"
          },
          table: {
            minWidth: 650,
          },
          pageContainer: {
            // width: "100vw",
            maxWidth: "800px",
            minWidth: "200px", 
            margin: "0 auto"
          }
        });

export const AmortTable = ({paymentData})=>{

    const classes = useStyles()
    const paymentDetails = paymentData.map(payment =>  {
        const {month, ttlPayment, interestPaid, principlePaid, extraPayment, remainingPrinciple} = payment
        
        return(
            <TableRow key={month}>
                <TableCell>{month + 1}</TableCell>
                <TableCell>{ttlPayment}</TableCell>
                <TableCell>{interestPaid}</TableCell>
                <TableCell>{principlePaid}</TableCell>
                <TableCell>{extraPayment}</TableCell>
                <TableCell>{remainingPrinciple}</TableCell>
            </TableRow>
        )
    })

    return (
        <TableContainer className={classes.root} component={Paper}>
            <Table className={classes.pageContainer} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Month</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell>Interest Paid</TableCell>
                        <TableCell>Principle Paid</TableCell>
                        <TableCell>Extra Payment</TableCell>
                        <TableCell>Remaining Principle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paymentDetails}
                </TableBody>
            </Table>
        </TableContainer>
    )

}
