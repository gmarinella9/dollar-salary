import Head from 'next/head'
import styles from '../styles/Home.module.css'


function Box({data}){
   return (
     <div className={styles.box}>
       <p className={styles.description}>{data.currency}</p>
       <h3 className={styles.values}>${data.unico}</h3>
     </div>
   )
}

function Home({dollars}) {
  return (
    <div className={styles.content}>
      <div className={[styles.grid] }>
        {
          dollars.items.map((coin)=>{
            if (coin.tag != '' && coin.tag != 'riesgo-pais') {
              return <Box key={coin.tag} data={coin}/>
            }
          })
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://dollar-salary.vercel.app/api/dollar')
  const dollars = await res.json()
  console.log(dollars)
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      dollars,
    },
  }
}

export default Home
