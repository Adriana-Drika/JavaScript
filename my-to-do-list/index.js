let listaTasks = [
    {
        id: 1,
        nome: `tete`,
        status: 'emaberto'
    }
]

const incrementaId = () => {
    if(listaTasks.length > 0){
        return listaTasks[listaTasks.length - 1].id + 1
    }
    return 1
}

const adicionarTask = () => {
    let task = {
        id: incrementaId(),//funcao que incrementa Id
        nome: document.getElementById('campoTexto').value,
        status: 'emaberto'
    }
    listaTasks.push(task)

    alert('Task cadastrada com sucesso!')

    document.getElementById(`campoTexto`).value = `` //limpa input de cadastro da task

    montarHtmlTasks()
}

const alterarEstadoTask = (id) => {
    let task = listaTasks.filter(task => task.id === id)[0] // filtra uma task, filter devolve uma lista, acesso apenas a posicao [0] que seria a primeira coisa que encontrar
    if(task.status === 'emaberto'){
        task.status = 'concluido'
    }else{
        task.status = 'emaberto'
    }
    alert('Task alterada com sucesso!')
    montarHtmlTasks()
}

const excluirTask = (id) => {
    listaTasks = listaTasks.filter(task => task.id !== id) // filtra uma nova lista sem esse id
    alert('Task excluída com sucesso!')
    montarHtmlTasks()
}

//funcao que monta/apresenta as tasks dentro da div com id tasks
const montarHtmlTasks = () => {
    //garanto que tasks vai estar limpo sempre ao chamar a funcao montarHtmlTask
    document.getElementById(`tasks`).innerHTML = ``

    //percorro a listaTasks e adiciono cada task do array com o template html de uma task
    listaTasks.forEach(task => {
        document.getElementById(`tasks`).innerHTML += 
                `<div id="${task.id}" class="task status-${task.status}">
                    <div>
                        ${(task.status === 'concluido')?
                             `<button onclick="alterarEstadoTask(${task.id})"><i class="fa-solid fa-check"></i></button>` 
                           : `<button onclick="alterarEstadoTask(${task.id})"><i class="fa-solid fa-rectangle-xmark"></i></button>`}
                        <span>${task.nome}</span>
                    </div>
                    <button onclick="excluirTask(${task.id})"><i class="fa-regular fa-trash-can"></i></button>
                </div>`
    })
}

montarHtmlTasks() // monta a primeira vez o html das tasks