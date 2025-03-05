import tkinter as tk
from random import randrange

class JogoAdivinhacao:
    def __init__(self):
        self.janela = tk.Tk()
        self.janela.title("Jogo de Adivinhação")
        self.numero_secreto = randrange(1, 101)
        self.tentativas = 0
        self.rodada = 1
        self.pontos = 100

        # Configurações iniciais
        self.nivel = tk.StringVar()
        self.chute = tk.StringVar()
        self.resultado = tk.StringVar()

        # Widgets
        self.frame_principal = tk.Frame(self.janela)
        self.frame_principal.pack(padx=10, pady=10)

        self.label_bem_vindo = tk.Label(self.frame_principal, text="Bem-vindo ao jogo!", font=('Arial', 16))
        self.label_bem_vindo.pack(pady=10)

        self.label_pontos = tk.Label(self.frame_principal, text="Você começa com 100 pontos.", font=('Arial', 12))
        self.label_pontos.pack()

        self.label_faixa = tk.Label(self.frame_principal, text="O número secreto é de 1 até 100", font=('Arial', 12))
        self.label_faixa.pack()

        self.label_dificuldade = tk.Label(self.frame_principal, text="Escolha seu nível de dificuldade:", font=('Arial', 12))
        self.label_dificuldade.pack()

        self.frame_dificuldade = tk.Frame(self.frame_principal)
        self.frame_dificuldade.pack()
        self.radio_facil = tk.Radiobutton(self.frame_dificuldade, text="Fácil", variable=self.nivel, value="1")
        self.radio_facil.pack(side=tk.LEFT)
        self.radio_medio = tk.Radiobutton(self.frame_dificuldade, text="Médio", variable=self.nivel, value="2")
        self.radio_medio.pack(side=tk.LEFT)
        self.radio_dificil = tk.Radiobutton(self.frame_dificuldade, text="Difícil", variable=self.nivel, value="3")
        self.radio_dificil.pack(side=tk.LEFT)

        self.botao_definir_nivel = tk.Button(self.frame_principal, text="Definir Nível", command=self.definir_nivel)
        self.botao_definir_nivel.pack(pady=10)

        self.label_rodada = tk.Label(self.frame_principal, text="", font=('Arial', 12))
        self.label_rodada.pack()

        self.entry_chute = tk.Entry(self.frame_principal, textvariable=self.chute)
        self.entry_chute.pack()

        self.botao_chutar = tk.Button(self.frame_principal, text="Chutar", command=self.chutar)
        self.botao_chutar.pack(pady=10)

        self.label_resultado = tk.Label(self.frame_principal, textvariable=self.resultado, font=('Arial', 12))
        self.label_resultado.pack()

        self.label_pontos_restantes = tk.Label(self.frame_principal, text="Pontos restantes: 100", font=('Arial', 12))
        self.label_pontos_restantes.pack()

        self.botao_reiniciar = tk.Button(self.frame_principal, text="Reiniciar", command=self.reiniciar, state='disabled')
        self.botao_reiniciar.pack(pady=10)

    def definir_nivel(self):
        if self.nivel.get() == "1":
            self.tentativas = 15
        elif self.nivel.get() == "2":
            self.tentativas = 10
        else:
            self.tentativas = 5

        self.label_rodada['text'] = f"Tentativas: {self.tentativas}"
        self.botao_definir_nivel['state'] = 'disabled'

    def chutar(self):
        chute = int(self.chute.get())
        self.chute.set("")  # Limpa o campo de entrada

        acertou = chute == self.numero_secreto
        maior = chute > self.numero_secreto
        menor = chute < self.numero_secreto

        if acertou:
            self.resultado.set(f"Você acertou e fez {self.pontos} pontos!")
            self.botao_chutar['state'] = 'disabled'
            self.botao_reiniciar['state'] = 'normal'
        else:
            if maior:
                self.resultado.set("Você errou! Você chutou acima do número secreto!")
            elif menor:
                self.resultado.set("Você errou! Você chutou abaixo do número secreto!")

            # Desconta pontos
            pontos_perdidos = abs(self.numero_secreto - chute)
            if pontos_perdidos > 10:
                pontos_perdidos = 10  # Limite de perda de pontos por chute
            self.pontos -= pontos_perdidos
            if self.pontos < 0:
                self.pontos = 0  # Não deixa os pontos ficarem negativos

            self.label_pontos_restantes['text'] = f"Pontos restantes: {self.pontos}"

            self.rodada += 1
            self.label_rodada['text'] = f"Tentativa {self.rodada} de {self.tentativas}"

            if self.rodada > self.tentativas or self.pontos == 0:
                self.resultado.set(f"Você perdeu! O número secreto era: {self.numero_secreto}")
                self.botao_chutar['state'] = 'disabled'
                self.botao_reiniciar['state'] = 'normal'

    def reiniciar(self):
        self.numero_secreto = randrange(1, 101)
        self.tentativas = 0
        self.rodada = 1
        self.pontos = 100

        self.nivel.set("")
        self.chute.set("")
        self.resultado.set("")

        self.label_rodada['text'] = ""
        self.label_pontos_restantes['text'] = "Pontos restantes: 100"

        self.botao_definir_nivel['state'] = 'normal'
        self.botao_chutar['state'] = 'normal'
        self.botao_reiniciar['state'] = 'disabled'

    def run(self):
        self.janela.mainloop()

if __name__ == "__main__":
    jogo = JogoAdivinhacao()
    jogo.run()