import currency from 'currency.js'

/**
 * M = P[r(1+r)^n/((1+r)^n)-1)]

M = the total monthly mortgage payment
P = the principal loan amount
r = your monthly interest rate. Lenders provide you an annual 
rate so you’ll need to divide that figure by 12 (the number of months in a year) 
to get the monthly rate. 
If your interest rate is 5%, your monthly rate would be 0.004167 (0.05/12=0.004167).
n = number of payments over the loan’s lifetime. 
Multiply the number of years in your loan term by 12 
(the number of months in a year) to get the number of total payments for your loan. 
For example, a 30-year fixed mortgage would have 360 payments (30x12=360).
 */


 

    
 export const calc = ({loanAmt, interestRate, loanTerm, extraPayment = 0}) => {
    let payments = []
    let balance = currency(loanAmt).value
    let scheduledBalance = currency(loanAmt).value
    let extra = extraPayment * 1

    let r = ((interestRate/100) /12)
    // let i = (balance * r * Math.pow(1 + r, loanTerm))
    let v = r * Math.pow(1 + r, loanTerm)
    let i = currency(balance).multiply(v) 
    let j = Math.pow(1 + r,  loanTerm) - 1
    let payment = currency(i).divide(j)

    let totalInterest = 0
    let scheduledInterest = 0
    
    /**
     * calculate interest savings with extra payments
     *  - if extra payments > 0
     *  - run a base calc without extra payments and sum intrest values into a variable
     *  - compare two calcs
     *  - do same with number of months
     */
    

    const calcScheduled = (payment) => {
        let checker2 = payment.value 
        let interest
        while (scheduledBalance > 0){

            if (checker2 < scheduledBalance){
                
                interest = currency(scheduledBalance).multiply(r)
                scheduledInterest += interest.value 
                let princePayment = payment.subtract(interest)
                scheduledBalance = currency(scheduledBalance).subtract(princePayment).value
            } else {
                interest = currency(scheduledBalance).multiply(r)
                scheduledInterest += interest.value 
                payment = scheduledBalance
                scheduledBalance = 0
                
            }
            
        }
    }

    calcScheduled(payment)


    while (balance > 0){
        let checker = payment.value
        if ( checker < balance){

        let extraPayment = payment.add(extra)

        let interestPaid = currency(balance).multiply(r)
            totalInterest += interestPaid.value
        let principlePaid = extraPayment.subtract(interestPaid)
        
            balance = currency(balance).subtract(principlePaid).value

              
        let paymentObj = {
            
            ttlPayment: extraPayment.value.toLocaleString('en-US', {style: "currency", currency: "USD"}) ,
            interestPaid: interestPaid.value.toLocaleString('en-US', {style: "currency", currency: "USD"}),  
            principlePaid: principlePaid.value.toLocaleString('en-US', {style: "currency", currency: "USD"}), 
            extraPayment: extra,
            remainingPrinciple: balance.toLocaleString('en-US', {style: "currency", currency: "USD"})
        }
        payments.push(paymentObj)
    }
        else {
            let ttlPayment = balance 
            let interestPaid = currency(balance).multiply(r)
            totalInterest += interestPaid.value
            let principlePaid = ttlPayment - interestPaid
            balance = 0

            let paymentObj = {
            
            ttlPayment: ttlPayment.toLocaleString('en-US', {style: "currency", currency: "USD"}),
            interestPaid: interestPaid.value.toLocaleString('en-US', {style: "currency", currency: "USD"}),  
            principlePaid: principlePaid.toLocaleString('en-US', {style: "currency", currency: "USD"}), 
            extraPayment: extra,
            remainingPrinciple: balance.toLocaleString('en-US', {style: "currency", currency: "USD"})
        }
        payments.push(paymentObj)
        }
    }
   
    /**
     * return an object paymentsObj = {
     * paymentData: payments, scheduledInterest, totalInterest
     * }
     */
        let paymentsObj ={
            paymentData: payments, 
            scheduledInterest, 
            totalInterest
        }

    return  paymentsObj
   
}
 
