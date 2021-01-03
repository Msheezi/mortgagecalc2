
import React from 'react'


import { Paper,makeStyles, Table, TableCell, TableContainer, TableHead, TableRow, TableBody} from '@material-ui/core'

  const useStyles = makeStyles({
          container: {
            maxWidth: "800px",
            margin: "5px auto ",
            maxHeight: "400px",
            width: "95%", 
            position: "relative"
          },
          table: {
            minWidth: 650,
          },
          pageContainer: {
            maxWidth: "800px",
            minWidth: "200px", 
            margin: "0 auto", 
            "& th": {
                backgroundColor: "#54DEFD",
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
          }, 
          footer: {
              margin: "5px auto",
              maxWidth: "800px",
              width: "95%",
            //   height: "50px",
              "& td": {
                  textAlign: "center",
                  padding: "1pt",
                  fontSize: "0.8rem"

              }, 
              "& th": {
                backgroundColor: "#54DEFD",
                color: "white", 
                fontSize: "0.8rem",
               padding: "2pt",
               textAlign: "center"
              }
              
            //   top: 1
          }
          
        });

export const AmortTable = ({paymentData, scheduledInterest, totalInterest, loanTerm, extraPayment})=>{

    const classes = useStyles()

    const summaryFooter = () => {
        if (extraPayment.length){
            let savings = (parseFloat(scheduledInterest) - parseFloat(totalInterest))
            return (
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Months Early</TableCell>
                    <TableCell>Scheduled Interest</TableCell>
                    <TableCell>Interest Paid</TableCell>
                    <TableCell>Savings</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>{loanTerm - paymentData.length}</TableCell>
                    <TableCell>{scheduledInterest.toLocaleString('en-US', {style: "currency", currency: "USD"})}</TableCell>
                    <TableCell>{totalInterest.toLocaleString('en-US', {style: "currency", currency: "USD"})}</TableCell>
                    <TableCell>{savings.toLocaleString('en-US', {style: "currency", currency: "USD"})}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
            )
        } else {
            return (
            <Table >
                <TableHead>
                <TableRow>
                    
                    <TableCell>Total Interest</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    
                    <TableCell>{totalInterest.toLocaleString('en-US', {style: "currency", currency: "USD"})}</TableCell>
                </TableRow>
            </TableBody>
            </Table>
            )
        }
    }


    const paymentDetails = paymentData.map((payment, month) =>  {
        const { ttlPayment, interestPaid, principlePaid,  remainingPrinciple} = payment
        

       

        /**
         * if condition for extra payments 
         * if extra payments foot displays:
         *  - Base Interest 
         *  - Interest paid
         *  - Money Saved
         *  - Months Eary
         */


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
        <>
        <TableContainer className={classes.container} component={Paper}>
            <Table stickyHeader="true" className={classes.pageContainer} aria-label="simple table" >
                <TableHead className={classes.root} xs={12}>
                    <TableRow  id="head">
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
            </Table>
                
        </TableContainer>
        <TableContainer component={Paper} className={classes.footer}>
        {summaryFooter()}

        </TableContainer>
            
        
        
                </>
    )

}
