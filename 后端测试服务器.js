const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	console.log('请求来自于',request.get('Host'));
	console.log('请求的地址',request.url);
	next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/default/login', (request,response)=>{
	let data = 'failed'
	if (request.query.id === '510108111122223333' && request.query.password === '332') {
		data = 'hr'
		console.log('success hr')
	} else if (request.query.id === '510108222233334444' && request.query.password === '223') {
		data = 'stuff'
		console.log('success stuff')
	} else if (request.query.id === '556677' && request.query.password === '1234') {
		data = 'company'
		console.log('success company')
	}
	response.send(data)
})

app.post('/register', (request,response)=> {
	console.log(request.body)
	response.send(true)
})

app.get('/default/search_user',(request,response)=>{
	const searchid = {id:'510108222233334444',username: '张三'}//查询员工（顶栏上的功能）
	response.send(searchid)
	console.log(request.query.id)
})

app.get('/default/dossier',(request,response)=>{
	const searchid = {
		username:'张三',
		id:'510108222233334444',
		sex:'男',
		nationality:'中国',
		ethnicity:'汉',
		education:'本科',
		major:'工业工程',
		school:"四川大学",
		graduated_time:"2014-07-04",
		majorevents:"西安XXX公司 Java工程师 — 2016.2月-2017.2月\n1、MOGU推荐架构数据与缓存层设计开发\nMOGU是一款时尚资讯app,负责推荐页面资讯feed流的展示及用户历史的展示\n" +
			"负责数据层,处理前端逻辑整个开发工作,分布式rpc服务搭建\n" +
			"负责进行压测监测、缓存处理,对接又进行改进优化,主用redis缓存\n" +
			"2、基于JAVA的电商爬虫开发\n使用java搭建爬虫server平台,进行配置和开发,进行网页改版监测功能开发\n爬取淘宝时尚品牌与其他电商网站商品品牌与详情等通过频率、ip池、匿名代理等应对一些网站的反爬\n3、同图搜索Solr服务开发 基于算法组的同图策略,使用solr做java接又实现rpc服务搭建,进行索引构建和solr实现\n"
	}//档案
	response.send(searchid)
})

app.post('/default/register',(request,response)=>{
	console.log(request.body)
	response.send("成功")
})//录入

app.get('/default/train_inquiry',(request,response)=>{
	const dataSource= [
		{
			idtrain: '#21332',
			begin: '2020-01-07',
			end: '2020-02-07',
			grade: 'A',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21333',
			begin: '2018-01-07',
			end: '2018-02-07',
			grade: 'B',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21334',
			begin: '2019-01-07',
			end: '2019-02-07',
			grade: 'C',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
	]//培训
	response.send(dataSource)
})

app.post('/default/train_delete',(request,response)=>{
	const dataSource= [
		{
			idtrain: '#21332',
			begin: '2020-01-07',
			end: '2020-02-07',
			grade: 'A',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21333',
			begin: '2018-01-07',
			end: '2018-02-07',
			grade: 'B',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21334',
			begin: '2019-01-07',
			end: '2019-02-07',
			grade: 'C',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
	]
	console.log("成功删除id为"+request.body.id+"的培训记录")
	response.send(dataSource)
})

app.post('/default/train_add',(request,response)=>{
	const dataSource= [
		{
			idtrain: '#21335',
			begin: '2021-01-07',
			end: '2021-02-07',
			grade: 'B',
			content: '培训测试'
		},
		{
			idtrain: '#21332',
			begin: '2020-01-07',
			end: '2020-02-07',
			grade: 'A',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21333',
			begin: '2018-01-07',
			end: '2018-02-07',
			grade: 'B',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21334',
			begin: '2019-01-07',
			end: '2019-02-07',
			grade: 'C',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
	]//培训
	console.log("成功添加培训记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.post('/default/train_modify',(request,response)=>{
	const dataSource= [
		{
			idtrain: '#21332',
			begin: '2020-01-07',
			end: '2020-02-07',
			grade: 'B',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21333',
			begin: '2018-01-07',
			end: '2018-02-07',
			grade: 'B',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			idtrain: '#21334',
			begin: '2019-01-07',
			end: '2019-02-07',
			grade: 'C',
			content: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
	]//培训
	console.log("成功修改培训记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.get('/default/attendance_inquiry',(request,response)=>{
	const dataSource= [
		{idcompany: '#21333', induction: '2019-01-06', absence: 8, late: 25, days: 360},
		{idcompany: '#21334', induction: '2019-02-03', absence: 6, late: 10, days: 72},
		{idcompany: '#21335', induction: '2019-03-23', absence: 4, late: 12, days: 228},
	]//考勤
	response.send(dataSource)
})

app.post('/default/attendance_modify',(request,response)=>{
	const dataSource= [
		{idcompany: '#21333', induction: '2019-01-06', absence: 9, late: 25, days: 360},
		{idcompany: '#21334', induction: '2019-02-03', absence: 6, late: 10, days: 72},
		{idcompany: '#21335', induction: '2019-03-23', absence: 4, late: 12, days: 228},
	]//考勤
	console.log("成功修改考勤记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.get('/default/perform_inquiry',(request,response)=>{
	const dataSource = [
		{idperform: '#21333', idhr: '李四', idcompany: '#23132', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21334', idhr: '李翔', idcompany: '#23132', performtime: '2019-02-25', degree: 'B'},
		{idperform: '#21335', idhr: '户名动', idcompany: '#23132', performtime: '2019-03-25', degree: 'C'},
		{idperform: '#21336', idhr: '吴雪药', idcompany: '#23132', performtime: '2019-04-25', degree: 'B'},
		{idperform: '#21337', idhr: '阿克曼', idcompany: '#23132', performtime: '2019-05-25', degree: 'A'},
		{idperform: '#21338', idhr: '大司马', idcompany: '#23132', performtime: '2019-06-25', degree: 'D'},
		{idperform: '#21339', idhr: '网大为', idcompany: '#23132', performtime: '2020-01-25', degree: 'A'},
		{idperform: '#21340', idhr: '李翔', idcompany: '#23132', performtime: '2020-02-25', degree: 'B'},
		{idperform: '#21341', idhr: '户名动', idcompany: '#23132', performtime: '2020-03-25', degree: 'C'},
		{idperform: '#21342', idhr: '吴雪药', idcompany: '#23132', performtime: '2020-04-25', degree: 'B'},
		{idperform: '#21343', idhr: '阿克曼', idcompany: '#23132', performtime: '2020-05-25', degree: 'A'},
		{idperform: '#21344', idhr: '大司马', idcompany: '#23132', performtime: '2020-06-25', degree: 'D'},
	]//绩效
	response.send(dataSource)
})

app.post('/default/perform_add',(request,response)=>{
	const dataSource = [
		{idperform: '#21343', idhr: '李四', idcompany: '#23132', performtime: '2020-05-25', degree: 'A'},
		{idperform: '#21333', idhr: '李四', idcompany: '#23132', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21334', idhr: '李翔', idcompany: '#23132', performtime: '2019-02-25', degree: 'B'},
		{idperform: '#21335', idhr: '户名动', idcompany: '#23132', performtime: '2019-03-25', degree: 'C'},
		{idperform: '#21336', idhr: '吴雪药', idcompany: '#23132', performtime: '2019-04-25', degree: 'B'},
		{idperform: '#21337', idhr: '阿克曼', idcompany: '#23132', performtime: '2019-05-25', degree: 'A'},
		{idperform: '#21338', idhr: '大司马', idcompany: '#23132', performtime: '2019-06-25', degree: 'D'},
		{idperform: '#21339', idhr: '网大为', idcompany: '#23132', performtime: '2020-01-25', degree: 'A'},
		{idperform: '#21340', idhr: '李翔', idcompany: '#23132', performtime: '2020-02-25', degree: 'B'},
		{idperform: '#21341', idhr: '户名动', idcompany: '#23132', performtime: '2020-03-25', degree: 'C'},
		{idperform: '#21342', idhr: '吴雪药', idcompany: '#23132', performtime: '2020-04-25', degree: 'B'},
		{idperform: '#21343', idhr: '阿克曼', idcompany: '#23132', performtime: '2020-05-25', degree: 'A'},
		{idperform: '#21344', idhr: '大司马', idcompany: '#23132', performtime: '2020-06-25', degree: 'D'},
	]//绩效
	console.log("成功添加绩效记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.post('/default/perform_delete',(request,response)=>{
	const dataSource = [
		{idperform: '#21333', idhr: '李四', idcompany: '#23132', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21334', idhr: '李翔', idcompany: '#23132', performtime: '2019-02-25', degree: 'B'},
		{idperform: '#21335', idhr: '户名动', idcompany: '#23132', performtime: '2019-03-25', degree: 'C'},
		{idperform: '#21336', idhr: '吴雪药', idcompany: '#23132', performtime: '2019-04-25', degree: 'B'},
		{idperform: '#21337', idhr: '阿克曼', idcompany: '#23132', performtime: '2019-05-25', degree: 'A'},
		{idperform: '#21338', idhr: '大司马', idcompany: '#23132', performtime: '2019-06-25', degree: 'D'},
		{idperform: '#21339', idhr: '网大为', idcompany: '#23132', performtime: '2020-01-25', degree: 'A'},
		{idperform: '#21340', idhr: '李翔', idcompany: '#23132', performtime: '2020-02-25', degree: 'B'},
		{idperform: '#21341', idhr: '户名动', idcompany: '#23132', performtime: '2020-03-25', degree: 'C'},
		{idperform: '#21342', idhr: '吴雪药', idcompany: '#23132', performtime: '2020-04-25', degree: 'B'},
		{idperform: '#21343', idhr: '阿克曼', idcompany: '#23132', performtime: '2020-05-25', degree: 'A'},
		{idperform: '#21344', idhr: '大司马', idcompany: '#23132', performtime: '2020-06-25', degree: 'D'},
	]//绩效
	response.send(dataSource)
	console.log("成功删除id为"+request.body.id+"的培训记录")
})

app.post('/default/perform_modify',(request,response)=>{
	const dataSource = [
		{idperform: '#21333', idhr: '李四', idcompany: '#23132', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21334', idhr: '李翔', idcompany: '#23132', performtime: '2019-02-25', degree: 'B'},
		{idperform: '#21335', idhr: '户名动', idcompany: '#23132', performtime: '2019-03-25', degree: 'C'},
		{idperform: '#21336', idhr: '吴雪药', idcompany: '#23132', performtime: '2019-04-25', degree: 'B'},
		{idperform: '#21337', idhr: '阿克曼', idcompany: '#23132', performtime: '2019-05-25', degree: 'A'},
		{idperform: '#21338', idhr: '大司马', idcompany: '#23132', performtime: '2019-06-25', degree: 'D'},
		{idperform: '#21339', idhr: '网大为', idcompany: '#23132', performtime: '2020-01-25', degree: 'A'},
		{idperform: '#21340', idhr: '李翔', idcompany: '#23132', performtime: '2020-02-25', degree: 'B'},
		{idperform: '#21341', idhr: '户名动', idcompany: '#23132', performtime: '2020-03-25', degree: 'C'},
		{idperform: '#21342', idhr: '吴雪药', idcompany: '#23132', performtime: '2020-04-25', degree: 'B'},
		{idperform: '#21343', idhr: '阿克曼', idcompany: '#23132', performtime: '2020-05-25', degree: 'A'},
		{idperform: '#21344', idhr: '大司马', idcompany: '#23132', performtime: '2020-06-25', degree: 'D'},
	]//绩效
	console.log("成功修改绩效记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.get('/default/hr_recieve_appeal',(request,response)=>{
	const dataSource = {data:[
		{id:"茗栋",idevaluation:"123",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。",},
		{id:"翔",idevaluation:"125",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。",},
		{id:"张三",idevaluation:"433",evaluationinclusion:"测试111"}
	],rate:0.025}//hr收到的申诉
	response.send(dataSource)
})

app.get('/StuffFeed',(request,response)=>{
	const dataSource = [
		{idevaluation:" #1231",score:4.5,evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。",},
		{idevaluation:" #1232",score:4.0,evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。",},
	]//员工发起的申诉
	response.send(dataSource)
})

app.get('/default/search_hr',(request,response)=>{
	const hrInfo = {
		hrname: "李四",
		sex: "男",
		idCard: "510108111122223333",
		idcompany: "#1123",
		number: "139******31",
		email: "41*******24@xx.com",
		password: "1234567",
		vip: true,
		searchtimes: 20,
		score: 64
	}
	response.send(hrInfo)
})

app.get('/default/search_stuff',(request,response)=>{
	const hrInfo = {
		hrname: "张三",
		sex: "男",
		idCard: "510108222233334444",
		idcompany: "#1123",
		number: "189******73",
		email: "13*******24@xx.com",
		password: "********",
	}
	response.send(hrInfo)
})

app.get('/companyInfo',(request,response)=>{
	const companyInfo = {
		name: "建筑公司",
		id: "55667788",
		foundTime: "2014-02-07",
		intro: "建筑公司集团有限公司（简称中建集团），正式组建于1982年，是我国专业化发展最久、市场化经营最早、一体化程度最高、全球规模最大的投资建设集团之一。\n" +
			"\n" +
			"中建集团主要以上市企业中国建筑股份有限公司（股票简称：中国建筑，股票代码601668.SH）为平台开展经营管理活动，拥有上市公司7家，二级控股子公司100余家。xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		location: "四川省成都市川大路二段，江安校区",
		password: "123123",
		hrAccount:3,
		score: 64
	}//公司信息
	response.send(companyInfo)
})

app.get('/default/search_evaluation',(request,response)=>{
	const judge = [
		{idevaluation:"#1231",hrscore:'4.8', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1232",hrscore:'4.5', idhr:"#3324",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1233",hrscore:'3.9', idhr:"#3325",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	response.send(judge)
})

app.post('/default/evaluation_add',(request,response)=>{
	const judge = [
		{idevaluation:"#1234",hrscore:'4.8', idhr:"#3323",evaluationinclusion:"测试111"},
		{idevaluation:"#1231",hrscore:'4.8', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1232",hrscore:'4.5', idhr:"#3324",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1233",hrscore:'3.9', idhr:"#3325",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	console.log("成功添加评价"+JSON.stringify(request.body))
	response.send(judge)
})

app.post('/default/evaluation_delete',(request,response)=>{
	const judge = [
		{idevaluation:"#1231",hrscore:'4.8', idhr:"#3323",evaluationinclusion:"测试222"},
		{idevaluation:"#1232",hrscore:'4.5', idhr:"#3324",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1233",hrscore:'3.9', idhr:"#3325",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	console.log("成功删除id为"+request.body.idevaluation+"的评价")
	response.send(judge)
})

app.post('/default/evaluation_modify',(request,response)=>{
	const judge = [
		{idevaluation:"#1234",hrscore:'4.8', idhr:"#3323",evaluationinclusion:"测试111"},
		{idevaluation:"#1231",hrscore:'4.8', idhr:"#3323",evaluationinclusion:"测试222"},
		{idevaluation:"#1232",hrscore:'4.5', idhr:"#3324",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1233",hrscore:'3.9', idhr:"#3325",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	console.log("成功修改评价信息"+JSON.stringify(request.body))
	response.send(judge)
})

app.get('/stuff/searchid',(request,response)=>{
	const searchid = {id:request.query.id,name: '张三'} //查询员工（顶栏上的功能）
	response.send(searchid)
	console.log(request.query.id)
})

app.get('/company/searchid',(request,response)=>{
	const searchid = {id:request.query.id,name: '建筑公司'} //查询公司（顶栏上的功能）
	response.send(searchid)
	console.log(request.query.id)
})

app.get('/hrAccount',(request,response)=>{
	const dataSource= [
		{
			id: '#21332',
			name:'阳智',
			score: '63'
		},
		{
			id: '#21333',
			name:'李响',
			score: '12'
		},
		{
			id: '#22136',
			name:'武学要',
			score: '43'
		}
	]//hr列表
	response.send(dataSource)
})

app.post('/hrAccount/add',(request,response)=>{
	const dataSource= [
		{
			id: '#21337',
			name:'张五',
			score: '0'
		},
		{
			id: '#21332',
			name:'阳智',
			score: '63'
		},
		{
			id: '#21333',
			name:'李响',
			score: '12'
		},
		{
			id: '#22136',
			name:'武学要',
			score: '43'
		}
	]//hr列表
	response.send(dataSource)
})

app.post('/hrAccount/delete',(request,response)=>{
	const dataSource= [
		{
			id: '#21337',
			name:'张五',
			score: '0'
		},
		{
			id: '#21332',
			name:'阳智',
			score: '63'
		},
		{
			id: '#22136',
			name:'武学要',
			score: '43'
		}
	]//hr列表
	response.send(dataSource)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求信息地址为：http://localhost:5000');
})
