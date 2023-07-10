// 1) Crie um servidor HTTP que responda a uma requisição GET na rota '/info'. O
// servidor deve retornar as seguintes informações em formato JSON:
// ● O nome do sistema operacional do servidor.
// ● O total de memória disponível no servidor.
// ● O diretório de trabalho atual do servidor.

// const http = require('http')
// const url = require('url')
// const port = 5005
// const os =require('os')
// const fs = require('fs')
// const server = http.createServer((req,res)=>{
// const urlInfo = require('url').parse(req.url, true)

//    if(urlInfo === '/info'){
// const sP = os.arch()
// const memori = os.freemem()
// const memorie = memori /1024
// const dAtual = os.homedir()

// const objeto =[{
//     sitesmaOperacional:`${sP}`
// },{
// memorie:`${memorie}`
// },{
//     diretorioAtual:`${dAtual}`
// }]
// const json = JSON.stringify(objeto)
// // console.log(json)
//     res.setHeader('Content-Type','application/json')
// fs.writeFile('index.json' ,`${json}`)
//    }
// })
// server.listen(port,()=>{
//     console.log(`${port}`)
// })


//--------------------------------------------------
// 2) Crie um programa que após receber o caminho
// “https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pd
// f”, execute as seguintes ações:
// a) Extraia o nome do diretório e exiba no console;
// b) Extraia a extensão do caminho e exiba no console;
// c) A partir do caminho relativo “/planodecurso.pdf”, obtenha o caminho
// absoluto e exiba no console.
// d) Por fim, crie um objeto contendo os segmentos que compõem o caminho
// fornecido
// const path = require('path')

// const url = require('url')

// const address = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'
// const infoUrl = new url.URL(address)

// const nam = path.basename('planodecurso.pdf', '.pdf')
// const ext = path.extname(address)
// const name = path.basename('https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf')
// const nameB = path.dirname(address)


// const objeto = [{
//    root: '',
//    dir:`${nameB}`,
//    base:`${ext}`,
//    name:`${nam}`
// }]
// console.log(objeto)

//----------------------------------------------------
// 3) Crie um programa que construa uma Url baseada no objeto da imagem
// abaixo e exiba no console.

// const { prototype } = require('events');
// const path = require('path')
// const url = require('url')
// const urlN = url.format({
//     protocol: 'https',
//     slashes: true,
//     auth:null,
//     host: 'nodejs.org',
//     hostname: 'nodejs.org',
//     hash:'#url_new_url_input_base',
//     search:null,
//     query: [Object, null ,prototype],
//     pathname: '/api/url.html',
//     path:'/api/url.html',
    
//   })
// const urlinfo = new url.URL(urlN)
// const prot = urlinfo.protocol
// const host = urlinfo.host
// const hash = urlinfo.hash
// const search = urlinfo.search

// const pathname = urlinfo.pathname
// const href = urlinfo.href

// const objeto =[{
//     protocol: `${prot}`,
//     slashes: true,
//     auth:null,
//     host: `${host}`,
//     hostname: `${host}`,
//     hash:`${hash}`,
//     search:null,
//     query: [Object, null ,prototype,{}],
//     pathname: `${pathname}`,
//     path:`${pathname}`,
//      href:`${href}`
// }]
// console.log(objeto)
//---------------------------------------------------
// 4)Crie um programa utilizando o core module File System, que faça
// com que o arquivo seja renomeado.
// const fs = require('fs')

// fs.rename('aqvNovo.txt','newArq.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Arquivo renomeado')
//     }
// })
//----------------------------------------------
//5) Crie um programa utilizando o core module OS, que retorne as
// informações contidas sobre cada núcleo lógico da CPU, como
// representado na imagem abaixo
// const os = require('os')
// const info = os.cpus()
// console.log(info)