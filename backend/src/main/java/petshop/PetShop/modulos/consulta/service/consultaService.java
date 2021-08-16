package petshop.PetShop.modulos.consulta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.animal.model.animal;

import petshop.PetShop.modulos.consulta.model.consulta;
import petshop.PetShop.modulos.consulta.repository.consultaRepository;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.pessoa.repository.clienteRepository;
import petshop.PetShop.modulos.animal.repository.animalRepository;
import petshop.PetShop.modulos.remedio.repository.remedioRepository;
import petshop.PetShop.modulos.vacina.repository.vacinaRepository;
import petshop.PetShop.modulos.remedio.model.remedio;
import petshop.PetShop.modulos.vacina.model.vacina;
import java.util.List;
import java.util.List;

@Service
public class consultaService {

    @Autowired
    consultaRepository consultaRepository;

    @Autowired
    clienteRepository clienteRepository;

    @Autowired
    animalRepository animalRepository;

    @Autowired
    remedioRepository remedioRepository;

    @Autowired
    vacinaRepository vacinaRepository;

    public consulta cadastrarConsulta(consulta c, cliente cli, animal a){

        cli = clienteRepository.getById(cli.getId());
        a = animalRepository.getById(a.getId());
        c.setCliente(cli);
        c.setAnimal(a);

        return consultaRepository.save(c);
    }

    public List getAllByAnimalId(String animalId){
        return consultaRepository.getByAnimal_Id(Integer.parseInt(animalId));
    }

    public List getAll(){
        return consultaRepository.findAllByOrderByDataAsc();
    }

    public consulta finaliza(String remedio, String vacina, String descricao, String idConsulta){

        System.out.println(remedio);

        consulta c = consultaRepository.getById(Integer.parseInt(idConsulta));
        if(!remedio.equals("")){
            System.out.println("Entrou");
            remedio r = remedioRepository.getByNome(remedio);
            System.out.println(r.getNome());
            c.setRemedio(r);
        }
        if(!vacina.equals("")){
            vacina v = vacinaRepository.getByNome(vacina);
            c.setVacina(v);
        }
        c.setDescricao(descricao);
        c.setFinalizada(true);

        return consultaRepository.save(c);
    }

}
