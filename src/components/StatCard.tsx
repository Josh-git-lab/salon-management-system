type StatCardType = {
    title: string;
    value: string;
}

function StatCard({ title, value}: StatCardType){
    return(
        <div className= "Card">
            <h3>{title}</h3>
            <strong>{value}</strong>
        </div>
    )
}

export default StatCard;
