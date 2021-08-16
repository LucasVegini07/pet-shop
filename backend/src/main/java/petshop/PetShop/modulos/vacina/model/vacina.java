package petshop.PetShop.modulos.vacina.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
public class vacina implements Serializable {

    private static final long serialVersionUID = -299569408537971270L;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_vacina")
    private int id;

    private String nome;
    private String descricao;

    public vacina(){}

    public vacina(int id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

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
