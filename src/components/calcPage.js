import React, {useState} from 'react'
import {Grid, makeStyles, TextField} from '@material-ui/core'
import { AmortTable } from './amortTable'

const useStyles = makeStyles({
    container: {
        marginTop: "50px",
        backgroundColor: "lightestgrey",
        textAlign: "center"
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
]

export const CalcPage = () => {

    // const [loanAmt, setLoanAmt] = useState("")
    // const [interestRate, setInterestRate] = useState("")
    // const [loanTerm, setLoanTerm] = useState("")
    const [inputs, setInputs] = useState({loanAmt: "", interestRate: "", loanTerm: ""})

    const classes = useStyles()

    const handleChange = (e)=> {
        let newState ={...inputs, [e.target.name]: e.target.value}
        return setInputs(newState)

    }

    const {loanAmt, interestRate, loanTerm} = inputs

    return (

        <Grid container className={classes.container}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}> 
                <TextField className={classes.input} label="Loan Amount" type="text"
                    onChange={handleChange}
                    value={loanAmt}
                    name="loanAmt"
                    
                />
                <TextField className={classes.input} label="Interest Rate (ex.) 4.5)" type="text"
                    onChange={handleChange}
                    value={interestRate}
                    name={"interestRate"}

                />
                <TextField className={classes.input} label="Loan Term (months)" type="text"
                    onChange={handleChange}
                    value={loanTerm}
                    name={"loanTerm"}

                />
                
                <AmortTable paymentData={testData}/>

            </Grid>
            <Grid item xs={2}></Grid>

        </Grid>
    )
}