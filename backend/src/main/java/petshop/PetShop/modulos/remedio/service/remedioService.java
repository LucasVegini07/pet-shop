package petshop.PetShop.modulos.remedio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.remedio.model.remedio;
import petshop.PetShop.modulos.remedio.repository.remedioRepository;

@Service
public class remedioService {

    @Autowired
    remedioRepository remedioRepository;

    public remedio cadastrarRemedio(remedio r) { return remedioRepository.save(r);}
    public remedio atualizaRemedio(remedio r) { return remedioRepository.save(r);}

}
