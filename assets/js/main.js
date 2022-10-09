function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
    


        inicia() {
            this.cliqueBotoes();
            this.apertaEnter();
        },

        realizaConta () {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) =>{ //quando utilizamos a palavra function o THIS fica direcionada para o document, quando utilizamos a arrow function => o this nao muda o comportamento ele fica travado em quem criou o elemento.
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.display.value = ''
                }

                if (el.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1);
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },

        apertaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();