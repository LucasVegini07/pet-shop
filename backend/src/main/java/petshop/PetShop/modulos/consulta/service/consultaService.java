package petshop.PetShop.modulos.consulta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.animal.model.animal;
import petshop.PetShop.modulos.consulta.model.consulta;
import petshop.PetShop.modulos.consulta.repository.consultaRepository;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.pessoa.repository.clienteRepository;
import petshop.PetShop.modulos.animal.repository.animalRepository;

@Service
public class consultaService {

    @Autowired
    consultaRepository consultaRepository;

    @Autowired
    clienteRepository clienteRepository;

    @Autowired
    animalRepository animalRepository;

    public consulta cadastrarConsulta(consulta c, cliente cli, animal a){

        cli = clienteRepository.getById(cli.getId());
        a = animalRepository.getById(a.getId());
        c.setCliente(cli);
        c.setAnimal(a);

        return consultaRepository.save(c);
    }
}
