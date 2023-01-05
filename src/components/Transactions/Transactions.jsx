import{Table} from "./Transactions.styled"

export const Transactions =({trans})=>{
   
    return <Table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>
        {trans.map(({id,type,amount,currency})=>{
         
           return <tbody key={id}>
              <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
              <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </tbody>
            
          
        })}
        </Table>
    
}