import React, {useState} from 'react'
import {Grid, makeStyles, TextField, Button} from '@material-ui/core'
import { AmortTable } from './amortTable'
import {calc} from './calculatorFunc'

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

const initialState = {loanAmt: "", interestRate: "", loanTerm: "", extraPayment: ""}

export const CalcPage = () => {
    const [inputs, setInputs] = useState(initialState)
    const [paymentData, setPaymentData] = useState([])
    const [scheduledInterest, setScheduledInterest] = useState()
    const [totalInterest, setTotalInterest] = useState()
    const [displayTable, setDisplayTable] = useState(false)
    
    
    /**Calculations
     *  - set a state variable as array to store individual payments
     *  - if extra payments is blank run calcs
     *  - if extrapayments run base calc to get total interest paid amount
     *      - run extra calc to incorporate extrapayments
     */

    const classes = useStyles()

    const handleChange = (e)=> {
        let newState ={...inputs, [e.target.name]: e.target.value}
        return setInputs(newState)

    }

    const runCalcs = (e) =>  {
        
        let results = calc(inputs)
        
       
        setPaymentData(results.paymentData)
        setScheduledInterest(results.scheduledInterest)
        setTotalInterest(results.totalInterest)
        setDisplayTable(true)

    }

    const clearCalcs = () => {
        setInputs(initialState)
        setPaymentData([])
        setScheduledInterest("")
        setTotalInterest("")
        setDisplayTable(false)
    }

    const table = displayTable ? ( <AmortTable paymentData={paymentData} 
                    loanTerm={inputs.loanTerm}
                    scheduledInterest={scheduledInterest}
                    totalInterest={totalInterest}
                    extraPayment={inputs.extraPayment}
                    /> ) : ""

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
                    placeholder="No Special Characters"
                    
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
                    placeholder="No Special Characters"
                    
                    />
            </Grid>
            <Grid item xs={false} sm={4}/>
            
            <Grid item xs={false} sm={4}/>
                {table}
               
            </Grid>

            </Grid>
            <Grid item xs={false} sm={2}></Grid>
            <Grid style={{margin: "8px auto", }} item xs={12} sm={4} >
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button style={{margin: "5px"}} variant="outlined" color="secondary" onClick={()=>clearCalcs()}>New Calc</Button>
                    <Button style={{margin: "5px"}} variant="outlined" color="primary" onClick={(e)=>runCalcs(e)}>Calculate</Button>

                </div>
            </Grid>
            
        </Grid>
    )
}