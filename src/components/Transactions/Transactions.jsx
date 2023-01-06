import {PropTypes} from "prop-types"
import{Table, TableCell, TitleTable} from "./Transactions.styled"



export const Transactions =({trans})=>{
   return <section>
         <Table>
            <thead>
              <tr>
                <TitleTable>Type</TitleTable>
                <TitleTable>Amount</TitleTable>
                <TitleTable>Currency</TitleTable>
              </tr>
            </thead>
        {trans.map(({id,type,amount,currency})=>{
         
           return <tbody key={id}>
              <tr>
                <TableCell>{type}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{currency}</TableCell>
              </tr>
                             
            </tbody>
            
          
        })}
        </Table>
   </section>
   
    
}

Transactions.propTypes={
  id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}