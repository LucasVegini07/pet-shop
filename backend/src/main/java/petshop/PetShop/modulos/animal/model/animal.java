package petshop.PetShop.modulos.animal.model;

import petshop.PetShop.modulos.pessoa.model.cliente;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class animal implements Serializable {

    private static final long serialVersionUID = -299569408537971270L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_animal")
    private int id;

    private String nome;
    private String sexo;
    private String especie;
    private String raca;
    private String temperamento;
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private cliente cliente;

    public animal(){}

    public animal(int id, String nome, String sexo, String especie, String raca, String temperamento, LocalDate data, petshop.PetShop.modulos.pessoa.model.cliente cliente) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.especie = especie;
        this.raca = raca;
        this.temperamento = temperamento;
        this.data = data;
        this.cliente = cliente;
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

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public String getTemperamento() {
        return temperamento;
    }

    public void setTemperamento(String temperamento) {
        this.temperamento = temperamento;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public petshop.PetShop.modulos.pessoa.model.cliente getCliente() {
        return cliente;
    }

    public void setCliente(petshop.PetShop.modulos.pessoa.model.cliente cliente) {
        this.cliente = cliente;
    }
}
