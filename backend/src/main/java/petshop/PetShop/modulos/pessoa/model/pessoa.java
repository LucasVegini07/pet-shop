package petshop.PetShop.modulos.pessoa.model;


import javax.persistence.*;
import java.io.Serializable;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class pessoa implements Serializable {

    private static final long serialVersionUID = -299569408537971270L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_pessoa")
    private Integer id;

    private String nome;
    @Column(name = "cpf", unique = true, columnDefinition = "CHAR(11)")
    private String cpf;
    @Column(name = "email", unique = true)
    private String email;
    private String apelido;
    private String escopo;
    private String senha;


    public pessoa(Integer id, String nome, String cpf, String email, String apelido, String escopo, String senha) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.apelido = apelido;
        this.escopo = escopo;
        this.senha = senha;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getEscopo() {
        return escopo;
    }

    public void setEscopo(String escopo) {
        this.escopo = escopo;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public pessoa(){}

}