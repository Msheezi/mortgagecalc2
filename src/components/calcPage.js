import React, {useState} from 'react'
import {Grid, makeStyles, TextField, Button} from '@material-ui/core'
import { AmortTable } from './amortTable'

const useStyles = makeStyles({
    container: {
        marginTop: "30px",
        backgroundColor: "lightestgrey",
        textAlign: "center",
        height: "100%"
    },
    input: {
        margin: "5px"
    }
})

const testData = [
    {month: 0, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 100000},
    {month: 1, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 90000},
    {month: 2, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 80000},
    {month: 3, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 70000},
    {month: 4, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 60000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
    {month: 5, ttlPayment: 1000 , interestPaid: 90, principlePaid: 910, extraPayment: 0, remainingPrinciple: 50000},
]

export const CalcPage = () => {

    // const [loanAmt, setLoanAmt] = useState("")
    // const [interestRate, setInterestRate] = useState("")
    // const [loanTerm, setLoanTerm] = useState("")
    const [inputs, setInputs] = useState({loanAmt: "", interestRate: "", loanTerm: "", extraPayment: ""})

    const classes = useStyles()

    const handleChange = (e)=> {
        let newState ={...inputs, [e.target.name]: e.target.value}
        return setInputs(newState)

    }

    const {loanAmt, interestRate, loanTerm, extraPayment} = inputs

    return (

        <Grid container className={classes.container}>
            <Grid item xs={false} sm={2}></Grid>
            <Grid item xs={12} sm={8}> 
            <Grid container>
            <Grid item xs={12} sm={6}>
                <TextField className={classes.input} label="Loan Amount" type="text"
                    onChange={handleChange}
                    value={loanAmt}
                    name="loanAmt"
                    placeholder="No Commas or Periods"
                    
                    />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField className={classes.input} label="Interest Rate" type="text"
                    onChange={handleChange}
                    value={interestRate}
                    name={"interestRate"}
                    placeholder="ex.) 4.5"
                    
                    />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField className={classes.input} label="Loan Term" type="text"
                    onChange={handleChange}
                    value={loanTerm}
                    name={"loanTerm"}
                    placeholder="Enter Term in Months"
                    
                    />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField className={classes.input} label="Extra Payment" type="text"
                    onChange={handleChange}
                    value={extraPayment}
                    name={"extraPayment"}
                    placeholder="No Commas or Periods"
                    
                    />
            </Grid>
            <Grid item xs={false} sm={4}/>
            
            <Grid item xs={false} sm={4}/>
                <AmortTable paymentData={testData}/>
            </Grid>

            </Grid>
            <Grid item xs={false} sm={2}></Grid>
            <Grid style={{margin: "8px auto", }} item xs={12} sm={4}>
                <Button  variant="outlined" color="primary">Calculate</Button>
            </Grid>
        </Grid>
    )
}