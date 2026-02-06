import pg from 'pg';
const { Client } = pg;
const client = new Client({
   connectionString: 'postgresql://neondb_owner:npg_m84THAwUnNjy@ep-dark-morning-ag1gq36i-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require&uselibpqcompat=true'
});

async function getData() {
   await client.connect();
   const { rows } = await client.query('SELECT * from students')
   console.log("Rows => ", rows);
   await client.end()
}

getData()
