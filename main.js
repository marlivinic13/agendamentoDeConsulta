function validarLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById('user');
    const senha = document.getElementById('password');

    const usuarioInput = usuario.value;
    const senhaInput = senha.value;

    const mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.textContent = "";

    if (usuarioInput === "admin") {
        if (senhaInput === "12345") {
            alert('Login bem-sucedido!');
            window.location.href = 'agendamento.html';
        } else {
            mensagemErro.textContent = "Senha incorreta. Tente novamente.";
            senha.value = "";
            senha.focus();
            return

        }
    } else {
        mensagemErro.textContent = "Usuário incorreto Tente novamente.";
        usuario.value = "";
        usuario.focus();
        return
    }
}

function salvarConsulta(event) {
    event.preventDefault();

    //Extrair dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const idadeSelecionada = document.getElementById('idade').value;
    const idade = Number(idadeSelecionada)

    const dataSelecionada = document.getElementById('data').value;
    const data = new Date(dataSelecionada)//converter dataSelecionada para o objeto data 

    const hora = document.getElementById('hora').value;

    const especialidade = document.getElementById('especialidade').value;

    const conveniado = document.querySelector("input[name='conveniado']:checked")?.value;

    const servicosSelecionados = document.querySelectorAll("input[name='servico']:checked");//pegar todos os dados marcados
    const servico = Array.from(servicosSelecionados).map(x => x.value) //cria um  array com todas habilidades

    const sintomas = document.getElementById("sintomas").value;

    const medicoResponsavel = document.getElementById("medico").value;

    //Verificação de dados dos inputs
    const mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.innerHTML = ""

    if (idade < 0 || idade > 120) {
        mensagemErro.textContent = "Idade inválida, favor digitar idade entre 0 e 120 anos!"
        console.log("Idade inválida, favor digitar idade entre 0 e 120 anos!")
        
        return
    } else if (data < new Date()) {
        mensagemErro.textContent = "Favor, selecionar uma data a partir de hoje!"
        console.log("Favor, selecionar uma data a partir de hoje!")
        return
    } else {
        //criar json com os dados
        const consulta = {
            nome,
            email,
            telefone,
            idade,
            data,
            hora,
            especialidade,
            conveniado,
            servico,
            sintomas,
            medicoResponsavel

        }

        localStorage.setItem("ConsultaAgendada", JSON.stringify(consulta))
        mensagemErro.style.color = "#2ECC71";
        mensagemErro.textContent = "✅ Consulta agendada com sucesso!";
        document.getElementById("formAgendamento").reset()
    }



}

function encaminhaParaObras(event) {
    event.preventDefault();
    window.location.href = 'obras.html';
}

function encaminhaParaLogin(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso! Você será redirecionado para a página de login.');
    window.location.href = 'index.html';

}

function verificacaoSenha(event) {
    event.preventDefault();


    const orientacao = document.getElementById("mensagemOrientacao");
    const senha = document.getElementById("password1");

    orientacao.innerHTML = "A senha deve conter: <br>Ø Um mínimo de 8 caracteres <br>Ø Pelo menos uma letra maiúscula <br>Ø Pelo menos uma letra minúscula <br>Ø Pelo menos um número";


}