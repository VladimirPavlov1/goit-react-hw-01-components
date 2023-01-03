import css from "./Statistics.module.css"
import PropTypes from "prop-types" 


export const Statistics=({title,stats})=>{ 
    console.log(stats) 

    return <section className={css.statistics}>
    <h2 className={css.title}>{title&&title}</h2>
   
     <ul className={css.statList}>
        {stats.map(({id,label,percentage})=>{
            return <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        })} 
      
      
    </ul> 
  </section>
}

Statistics.propTypes={
    title:PropTypes.string.isRequired,
   stats:PropTypes.arrayOf(PropTypes.exact({
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number
   }).isRequired,)

}