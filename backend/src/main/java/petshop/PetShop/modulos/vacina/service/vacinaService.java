package petshop.PetShop.modulos.vacina.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.remedio.model.remedio;
import petshop.PetShop.modulos.vacina.model.vacina;
import petshop.PetShop.modulos.vacina.repository.vacinaRepository;

import java.util.List;

@Service

public class vacinaService {

    @Autowired
    vacinaRepository vacinaRepository;

    public vacina cadastrarVacina(vacina v) { return vacinaRepository.save(v);}
    public vacina atualizarVacina(vacina v) { return vacinaRepository.save(v);}

    public List<vacina> getVacinas() { return vacinaRepository.findAllByOrderByIdAsc() ;}

}
