printjson(1);
config={_id: 'rs1', members:[{_id: 0,host:'172.17.4.41:27017'},{_id:1,host:'172.17.4.39:27017'},{_id:2,host:'172.17.4.40:27017'}]}
rs.initiate(config);