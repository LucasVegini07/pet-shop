package petshop.PetShop.modulos.pessoa.model;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
@PrimaryKeyJoinColumn(name = "id_pessoa")

public class cliente extends pessoa {

    private int pontos;

    public cliente(){}

    public cliente(Integer id, String nome, String cpf, String email, String apelido, String escopo, String senha, int pontos) {
        super(id, nome, cpf, email, apelido, escopo, senha);
        this.pontos = pontos;
    }

    public int getPontos() {
        return pontos;
    }

    public void setPontos(int pontos) {
        this.pontos = pontos;
    }
}
