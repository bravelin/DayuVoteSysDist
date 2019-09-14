# exp



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

#npx sequelize migration:generate --name=init-users

actId 2f3a3a70d62511e993956d615c55790b

6c84fb9012c411e1840d7b25c5ee775a

g0 a1a02d40d68e11e9962e0150aeae938b    2019-09-15 08:49:00/10  2019-08-15 08:49:00 1080  1090
g0-1  84b14490d69211e9962e0150aeae938b 2019-09-15 08:49:00/1080  2019-07-15 08:49:00 180  1260

g1 8b544e20d69511e99c189745e1756cfd
g12 ee314bb0d69511e99c189745e1756cfd  2019-09-15 08:49:00/678 2019-09-14 08:49:00/178   856
g13   1072d3b0d69611e99c189745e1756cfd 2019-09-14 08:49:00/278  278

insert into vote set id='07', actId='2f3a3a70d62511e993956d615c55790b', playerId='11', type='2', voteNum=12, diamondAmount=278, createUserId='1072d3b0d69611e99c189745e1756cfd', p0='6c84fb9012c411e1840d7b25c5ee775a', p1='8b544e20d69511e99c189745e1756cfd', createdAt='2019-09-14 08:49:00';

 
(select n.id as id, n.realName as realName from manager as n where (n.p0='8b544e20d69511e99c189745e1756cfd' or n.p1='8b544e20d69511e99c189745e1756cfd'))

select sum(v.diamondAmount) as thisDayScore, m.id as uid, m.realName as realName from vote as v, (select m.id as id, m.realName as realName from manager as m where (m.p0='8b544e20d69511e99c189745e1756cfd' or m.p1='8b544e20d69511e99c189745e1756cfd')) as m where (v.p0=m.id or v.p1=m.id or v.createUserId=m.id) and v.createdAt>='2019-09-15 00:00:00' group by m.id 

select sum(v.diamondAmount) as yesDayScore, m.id as uid, m.realName as realName from vote as v, (select m.id as id, m.realName as realName from manager as m where (m.p0='8b544e20d69511e99c189745e1756cfd' or m.p1='8b544e20d69511e99c189745e1756cfd')) as m where (v.p0=m.id or v.p1=m.id or v.createUserId=m.id) and v.createdAt<'2019-09-15 00:00:00' group by m.id
