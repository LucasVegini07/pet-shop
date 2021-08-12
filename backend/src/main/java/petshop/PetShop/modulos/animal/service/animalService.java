package petshop.PetShop.modulos.animal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.animal.model.animal;
import petshop.PetShop.modulos.animal.repository.animalRepository;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.pessoa.repository.clienteRepository;

@Service
public class animalService {

    @Autowired
    animalRepository animalRepository;

    @Autowired
    clienteRepository clienteRepository;

    public animal cadastrarAnimal(animal a, cliente c ){
        c = clienteRepository.getById(c.getId());
        a.setCliente(c);
        return animalRepository.save(a);
    }

    public animal atualiza(animal a ){
        return animalRepository.save(a);
    }

    public String teste(){
        return "TESTE";
    }



}
