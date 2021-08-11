package petshop.PetShop.modulos.remedio.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class remedio implements Serializable {

    private static final long serialVersionUID = -299569408537971270L;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_remedio")
    private int id;

    private String nome;
    private String descricao;

    public remedio(int id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    public remedio(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
