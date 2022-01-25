import Koa from 'koa'
import axios from 'axios';

const app = new Koa();
let res = { data: {} };
const fetchData = async () => await axios.get(`https://k1pool.com/api/miner/eth/${process.env.eth}`);
fetchData();
setInterval(fetchData, 60000);

app.use(async ctx => {
  ctx.body = `workers_online ${res.data?.miner?.workersOnline}
avgHashrate ${res.data?.miner?.avgHashrate}
curHashrate ${res.data?.miner?.curHashrate}
`;
});


app.listen(3000);
