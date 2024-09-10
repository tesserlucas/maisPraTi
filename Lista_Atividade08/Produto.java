package Lista_Atividade08;

public class Produto {
    // Atributos privados
    private String nome;
    private double preco;
    private int quantidadeEstoque;

    // Construtor
    public Produto(String nome, double preco, int quantidadeEstoque) {
        this.nome = nome;
        this.setPreco(preco); // Usa o setter para garantir validação
        this.setQuantidadeEstoque(quantidadeEstoque); // Usa o setter para garantir validação
    }

    // Métodos getters
    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public int getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    // Métodos setters (garantindo que o preço e a quantidade não sejam negativos)
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPreco(double preco) {
        if (preco >= 0) {
            this.preco = preco;
        } else {
            System.out.println("Preço não pode ser negativo. Definido como 0.");
            this.preco = 0;
        }
    }

    public void setQuantidadeEstoque(int quantidadeEstoque) {
        if (quantidadeEstoque >= 0) {
            this.quantidadeEstoque = quantidadeEstoque;
        } else {
            System.out.println("Quantidade em estoque não pode ser negativa. Definida como 0.");
            this.quantidadeEstoque = 0;
        }
    }

    // Método para exibir informações do produto
    public void exibirProduto() {
        System.out.println("Nome: " + this.nome);
        System.out.println("Preço: " + this.preco);
        System.out.println("Quantidade em estoque: " + this.quantidadeEstoque);
    }

    // Método main para testar a classe
    public static void main(String[] args) {
        Produto p1 = new Produto("Notebook", 2500.0, 10);
        p1.exibirProduto();

        // Testando a validação
        p1.setPreco(-500);
        p1.setQuantidadeEstoque(-5);
        p1.exibirProduto();
    }
}
