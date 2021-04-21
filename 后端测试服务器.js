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

app.get('/default/login', (request,response)=>{
	const data = {info:'failed'}
	if (request.query.id === '1234567' && request.query.password === '332') {
		data.info = 'hr'
		console.log('success hr')
	} else if (request.query.id === '7654321' && request.query.password === '233') {
		data.info = 'stuff'
		console.log('success stuff')
	} else if (request.query.id === 'company1' && request.query.password === '3323223') {
		data.info = 'company'
		console.log('success company')
	}
	response.send(data)
})

app.post('/register', (request,response)=> {
	console.log(request.body)
	response.send(true)
})

app.get('/default/search_user',(request,response)=>{
	const searchid = {id:'342401200001070815',username: '李大向'}//查询员工（顶栏上的功能）
	response.send(searchid)
	console.log(request.query.id)
})

app.get('/default/dossier',(request,response)=>{
	const searchid = {
		username:'李大翔',
		id:'342421199502030715',
		sex:'男',
		nationality:'中国',
		ethnicity:'汉',
		ethnicity:'本科',
		major:'工业工程',
		school:"四川大学",
		graduated_time:"2014-07-04",
		majorevents:"20XX/7---20XX/11:在浙江锦阳⼈⼒资源发展有限公司上班，先后担任项⽬部专\n" +
			"                        员职务,熟悉相关业 务流程，能独⽴操作相关业务。\n" +
			"                        20XX/10--20XX/3：爱⼼活动|⻓期辅助孤寡⽼⼈;组织“⼼灵有约”献爱⼼活动;\n" +
			"                        策划并参与了“师⽣共 建哲社林”⼤型植树活动\n" +
			"                        20XX/6--20XX/9：毕业实习|组织实施了兰州⼤学20XX级毕业⽣社会学专业毕业\n" +
			"                        实习项⽬——《社 会学视⾓下的⻄北地区⾼中⽣家庭陪读现象研究》\n" +
			"                        20XX/5--20XX/6：市场调研|策划并组织了《兰州⼤学学⽣收⼊与消费状况调查》 项⽬\n" +
			"                        2006/6--2006/8：暑期实践|申请策划并具体负责实施了兰州⼤学⼤学⽣创新创业\n" +
			"                        项⽬计划——《⻄ 北乡村家庭中⼦代夫妻关系对⽼年⼈⽣活质量影响的研究》"
	}//档案
	response.send(searchid)
})

app.post('/new',(request,response)=>{
	console.log(request.body)
	response.send("成功")
})//录入

app.get('/train',(request,response)=>{
	const dataSource= [
		{
			id: '#21332',
			from: '2020-01-07',
			to: '2020-02-07',
			result: 'A',
			detail: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			id: '#21333',
			from: '2020-03-07',
			to: '2020-04-07',
			result: 'B',
			detail: '该员工xxxxxxx'
		},
		{
			id: '#21334',
			from: '2020-08-07',
			to: '2020-09-07',
			result: 'C',
			detail: '该员工xxxxxxx'
		}
	]//培训
	response.send(dataSource)
})

app.post('/train/delete',(request,response)=>{
	const dataSource= [
		{
			id: '#21333',
			from: '2020-03-07',
			to: '2020-04-07',
			result: 'B',
			detail: '该员工xxxxxxx'
		},
		{
			id: '#21334',
			from: '2020-08-07',
			to: '2020-09-07',
			result: 'C',
			detail: '该员工xxxxxxx'
		}
	]
	console.log("成功删除id为"+request.body.id+"的培训记录")
	response.send(dataSource)
})

app.post('/train/add',(request,response)=>{
	const dataSource= [
		{
			id: '#21332',
			from: '2020-01-07',
			to: '2020-02-07',
			result: 'A',
			detail: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			id: '#21333',
			from: '2020-03-07',
			to: '2020-04-07',
			result: 'B',
			detail: '该员工xxxxxxx'
		},
		{
			id: '#21334',
			from: '2020-08-07',
			to: '2020-09-07',
			result: 'C',
			detail: '该员工xxxxxxx'
		},
		{
			id: '#21337',
			from: '2015-02-23',
			to: '2025-03-24',
			result: 'B',
			detail: '该员工xxxxxxxsssssasdasdasdasd'
		}
	]//培训
	console.log("成功添加培训记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.post('/train/edit',(request,response)=>{
	const dataSource= [
		{
			id: '#21332',
			from: '2020-01-07',
			to: '2020-02-07',
			result: 'B',
			detail: '该员工xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			id: '#21333',
			from: '2020-03-07',
			to: '2020-04-07',
			result: 'B',
			detail: '该员工xxxxxxx'
		},
		{
			id: '#21334',
			from: '2020-08-07',
			to: '2020-09-07',
			result: 'C',
			detail: '该员工xxxxxxx'
		}
	]//培训
	console.log("成功修改培训记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.get('/attending',(request,response)=>{
	const dataSource= [
		{id: '#21333', company: '钓鱼公司', employTime: '2019-01-06', lack: 8, late: 25, days: 360},
		{id: '#21334', company: '李翔企业', employTime: '2019-02-03', lack: 6, late: 10, days: 72},
		{id: '#21335', company: '阿里巴巴', employTime: '2019-03-23', lack: 4, late: 12, days: 228},
	]//考勤
	response.send(dataSource)
})

app.post('/attending/edit',(request,response)=>{
	const dataSource= [
		{id: '#21333', company: '钓鱼公司', employTime: '2019-01-06', lack: 9, late: 25, days: 360},
		{id: '#21334', company: '李翔企业', employTime: '2019-02-03', lack: 6, late: 10, days: 72},
		{id: '#21335', company: '阿里巴巴', employTime: '2019-03-23', lack: 4, late: 12, days: 228},
	]//考勤
	console.log("成功修改考勤记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.get('/default/perform_inquiry',(request,response)=>{
	const dataSource = [
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'C'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'D'},
	]//绩效
	response.send(dataSource)
})

app.post('/default/perform_add',(request,response)=>{
	const dataSource = [
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'C'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'D'},
	]//绩效
	console.log("成功添加绩效记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.post('/default/perform_delete',(request,response)=>{
	const dataSource = [
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'C'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'D'},
	]//绩效
	response.send(dataSource)
	console.log("成功删除id为"+request.body.id+"的培训记录")
})

app.post('/default/perform_edit',(request,response)=>{
	const dataSource = [
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'C'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'B'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'A'},
		{idperform: '#21333', idhr: '网大为', idcompany: '钓鱼公司', performtime: '2019-01-25', degree: 'D'},
	]//绩效
	console.log("成功修改绩效记录"+JSON.stringify(request.body))
	response.send(dataSource)
})

app.get('/hrFeed',(request,response)=>{
	const dataSource = {data:[
		{stuff_name:"茗栋",stuff_id:"135",judge_id:"123",content:"我认为，该评价中xxxxxxxxxxx不符实际",},
		{stuff_name:"翔",stuff_id:"425",judge_id:"125",content:"我认为，该评价中xxxasddasd不符实际",},
		{stuff_name:"方舟",stuff_id:"235",judge_id:"433",content:"我认为，该评价中xxv32424xxx不符实际"}
	],rate:0.025}//hr收到的申诉
	response.send(dataSource)
})

app.get('/StuffFeed',(request,response)=>{
	const dataSource = [
		{hr_id:"#321",judge_id:"123",content:"我认为，该评价中xxxxxxxxxxx不符实际，我xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",},
		{hr_id:"#322",judge_id:"125",content:"我认为，该评价中xxxasddasd不符实际，我xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",},
	]//员工发起的申诉
	response.send(dataSource)
})

app.get('/account',(request,response)=>{
	const hrInfo = {
		name: "李大翔",
		sex: "男",
		idCard: "342401200001070815",
		company: "肯特牛",
		number: "13966306031",
		id: "12138",
		email: "412344324@xx.com",
		password: "1234567",
		isVIP: true,
		searchTimes: 20,
		score: 64
	}
	response.send(hrInfo)
})

app.get('/companyInfo',(request,response)=>{
	const companyInfo = {
		name: "钓鱼公司",
		id: "#1233222",
		foundTime: "2014-02-07",
		intro: "中国建筑集团有限公司（简称中建集团），正式组建于1982年，是我国专业化发展最久、市场化经营最早、一体化程度最高、全球规模最大的投资建设集团之一。\n" +
			"\n" +
			"中建集团主要以上市企业中国建筑股份有限公司（股票简称：中国建筑，股票代码601668.SH）为平台开展经营管理活动，拥有上市公司7家，二级控股子公司100余家。",
		location: "四川省成都市川大路二段，江安校区",
		password: "123123",
		hrAccount:3,
		score: 64
	}//公司信息
	response.send(companyInfo)
})

app.get('/default/evaluation_inquiry',(request,response)=>{
	const judge = [
		{idevaluation:"#1231",hrscore:'23', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'123', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'43', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	response.send(judge)
})

app.post('/default/evaluation_add',(request,response)=>{
	const judge = [
		{idevaluation:"#1231",hrscore:'53', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'64', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'23', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'43', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	console.log("成功添加评价"+JSON.stringify(request.body))
	response.send(judge)
})

app.post('/default/evaluation_delete',(request,response)=>{
	const judge = [
		{idevaluation:"#1231",hrscore:'45', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'64', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	console.log("成功删除id为"+request.body.idevaluation+"的评价")
	response.send(judge)
})

app.post('/default/evaluation_edit',(request,response)=>{
	const judge = [
		{idevaluation:"#1231",hrscore:'64', idhr:"#3323",evaluationinclusion:"事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'32', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
		{idevaluation:"#1231",hrscore:'71', idhr:"#3323",evaluationinclusion:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
	]//评价
	console.log("成功修改评价信息"+JSON.stringify(request.body))
	response.send(judge)
})

app.get('/stuff/searchid',(request,response)=>{
	const searchid = {id:request.query.id,name: '李四'} //查询员工（顶栏上的功能）
	response.send(searchid)
	console.log(request.query.id)
})

app.get('/company/searchid',(request,response)=>{
	const searchid = {id:request.query.id,name: '钓鱼公司'} //查询公司（顶栏上的功能）
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

app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求信息地址为：http://localhost:5000');
})
