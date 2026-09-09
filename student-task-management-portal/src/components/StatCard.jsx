function StatCard(bunty){
    return(
        <div className="stat-card">
            <h3>{bunty.title}</h3>
            <h2>{bunty.value}</h2>
        </div>
    );
}
export default StatCard;