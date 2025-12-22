import App from "../App"
import Card from "./Card"
function Dashboard({name,occ,nameChange}){
    return(
     
         <Card fullName={name}occ={occ}nameChange={nameChange}></Card>

  )
}

export default Dashboard;
