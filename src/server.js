import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())


/// simulaçao de uma lista de alunos

const alunos = [
    {
        id:1,
        nome: "Ana sousa",
        email:"ana@email.com",
        idade:16,
        curso:"Desenvolvimento de sistemas"

    },
    {
        id:2,
        nome: "Aywola ",
        email:"Aywola@email.com",
        idade:16,
        curso:"Desenvolvimento de sistemas"

    },
    {
        id:3,
        nome: "Felipe",
        email:"Felipe@email.com",
        idade:17,
        curso:"Automoçao automotiva"

    },
    {
        id:4,
        nome: "wepinko",
        email:"wepinko@email.com",
        idade:20,
        curso:"como recuperar a virginia"

    }
]


//get - buscar os recusros
app.get("/alunos", (req,res) => {
    res.status(200).json(alunos)
})

// get por id do aluno
app.get("alunos/:id", (req,res) => {
    const id = Number(req.params.id)

    const aluno = alunos.find((a) => a.id === id)

    if(!aluno){
        return res.status(404).json({
            mensagem: "Aluno nao encontrado"
        })
    }
    res.status(200).json(aluno)

// get por curso
app.get("/alunos/curso/:curso", (req ,res) =>{
    const curso = req.params.curso.toLowreCase()

    const resultado = alunos.filter((aluno) =>
        alunocurso,toLowreCase().includes.curso
    )
    res.json(resultado)
})    
})

// post cadastrar aluno
app.post("/alunos", (req, res) => {
    const {nome, email, idade, curso } = req.body

    //validando o email
    if (
        typeof email !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ){
        return res.status(400).json({
            mensagem: "E-mail inválido"
        })
    }

    //validadndo a idade
    if(
        typeof idade !== "number" || idade < 0 || idade > 100) {
        return res.status(400).json({
            mensagem: "A idade precisa ser numérica, maior que 0 e menor que 100"
        })
    }

    // validando o nome 
    if(
        typeof nome !== "string" || nome === ""
    )
    return res.status(400).json({
        mensagem: "nome invalido"
    })

    // validando curso
    if(
        typeof curso !== "string" || curso ===""  
    )
    return res.status(400).json({
        mensagen: "curso invalido"
    })
    

    //cadastra finalmente o alunooo
    const novoAluno = {
        id: alunos.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
        curso: req.body.curso
    }

    alunos.push(novoAluno)
    res.status(201).json(novoAluno)

})

// put atualizcao por id
app.put("/alunos/:id", (req,res) => { 
    const id = Number(req.params.id)
    const  index = alunos.findIndex((a) => a.id === id)
    
    if(index === -1){
        return res.status(404).json({mensagem:"Aluno nao encontrado"})
        // se o idicw for -1 
    }
    
})
const {nome, email, idade, curso} = req.body
    if(!nome || !email || idade === undefined || !curso){
        return res.status(404)({ mensagem: "e necessario o prenchimento de todos os campos"})
    }
    alunos[index] = {id, nome, email, idade, curso}
    res.status(200).json({mensagem: " Aluno atualizado com sucesso", aluno: alunos[index]
});

// patch atualizacao de idade

app.patch("/alunos/:id/idade", (req, res) =>{
    const id = Number(req.params.id)
     // converte o id para numero
    const aluno = aluno.find((a) => a.id === id)
    // find busca
    //localiza o resgistro do aluno
    if(!aluno){
        return res.status(404).json({mensagem: "Aluno nao encontrado"})
    }
    const {idade} = req.body
    if(typeof  idade !== "number" || idade <0 || idade > 100){// typeof tipo
        return res.status(400).json({
            mensagem: "informe uma idade valida(numero entre 0 e 100"
        })
        
    }
    aluno.idade = idade
    res.status(200).json({mensagem: "aluno atualizado com sucesso"})
})

// delete remover um aluno

app.delete("/alunos/:id", (req,res) => {
    const id = Number(req.params.id)
    const index = alunos.findIndex((a) => a.id === id)
    if( index === -1){
        return res.status(404).json({mensagem:" Aluno nao encontrado"})
    }
    const alunoRemovido = alunos.splice(index , 1)[0]
    res.status(200).json({
        mensagen : "aluno removido com sucesso",
        aluno:[ alunoRemovido]
    })
});


app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})

