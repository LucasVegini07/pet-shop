package petshop.PetShop.modulos.consulta.model;

import petshop.PetShop.modulos.animal.model.animal;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.pessoa.model.funcionario;
import petshop.PetShop.modulos.remedio.model.remedio;
import petshop.PetShop.modulos.vacina.model.vacina;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class consulta implements Serializable {

    private static final long serialVersionUID = -299569408537971270L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_consulta")
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_remedio")
    private remedio remedio;

    @ManyToOne
    @JoinColumn(name = "id_vacina")
    private vacina vacina;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private cliente cliente;

    @ManyToOne
    @JoinColumn(name = "id_animal")
    private animal animal;

    @ManyToOne
    @JoinColumn(name = "id_funcionario")
    private funcionario funcionario;

    private LocalDateTime horaInicio;
    private LocalDate data;
    private String descricao;

    public consulta() {}

    public consulta(int id, cliente cliente, animal animal, LocalDateTime horaInicio, LocalDate data) {
        this.id = id;
        this.animal = animal;
        this.cliente = cliente;
        this.horaInicio = horaInicio;
        this.data = data;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public petshop.PetShop.modulos.remedio.model.remedio getRemedio() {
        return remedio;
    }

    public void setRemedio(petshop.PetShop.modulos.remedio.model.remedio remedio) {
        this.remedio = remedio;
    }

    public petshop.PetShop.modulos.vacina.model.vacina getVacina() {
        return vacina;
    }

    public void setVacina(petshop.PetShop.modulos.vacina.model.vacina vacina) {
        this.vacina = vacina;
    }

    public petshop.PetShop.modulos.animal.model.animal getAnimal() {
        return animal;
    }

    public void setAnimal(petshop.PetShop.modulos.animal.model.animal animal) {
        this.animal = animal;
    }

    public petshop.PetShop.modulos.pessoa.model.cliente getCliente() {
        return cliente;
    }

    public void setCliente(petshop.PetShop.modulos.pessoa.model.cliente cliente) {
        this.cliente = cliente;
    }

    public petshop.PetShop.modulos.pessoa.model.funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(petshop.PetShop.modulos.pessoa.model.funcionario funcionario) {
        this.funcionario = funcionario;
    }

    public LocalDateTime getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(LocalDateTime horaInicio) {
        this.horaInicio = horaInicio;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
