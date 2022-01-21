import Koa from 'koa'
import axios from 'axios';

const app = new Koa();

app.use(async ctx => {
  const res = await axios.get(`https://k1pool.com/api/miner/eth/${process.env.eth}`);
  // https://k1ppoool.com/api/miner/eth/0x4c8ee30c603c903241e1840ab721b3b358d3c2af
  ctx.body = `workers_online ${res.data.miner.workersOnline}
avgHashrate ${res.data.miner.avgHashrate}
curHashrate ${res.data.miner.curHashrate}
`;
});


app.listen(3000);
