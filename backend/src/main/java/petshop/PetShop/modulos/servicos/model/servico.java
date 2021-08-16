package petshop.PetShop.modulos.servicos.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class servico implements Serializable {

    private static final long serialVersionUID = -299569408537971270L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_servico")
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private petshop.PetShop.modulos.pessoa.model.cliente cliente;

    @ManyToOne
    @JoinColumn(name = "id_animal")
    private petshop.PetShop.modulos.animal.model.animal animal;

    private LocalDateTime data;

    public servico(){}

    public servico(int id, petshop.PetShop.modulos.pessoa.model.cliente cliente, petshop.PetShop.modulos.animal.model.animal animal, LocalDateTime data) {
        this.id = id;
        this.cliente = cliente;
        this.animal = animal;
        this.data = data;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public petshop.PetShop.modulos.pessoa.model.cliente getCliente() {
        return cliente;
    }

    public void setCliente(petshop.PetShop.modulos.pessoa.model.cliente cliente) {
        this.cliente = cliente;
    }

    public petshop.PetShop.modulos.animal.model.animal getAnimal() {
        return animal;
    }

    public void setAnimal(petshop.PetShop.modulos.animal.model.animal animal) {
        this.animal = animal;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }
}
