package petshop.PetShop.modulos.animal.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import petshop.PetShop.modulos.animal.model.animal;
import petshop.PetShop.modulos.animal.service.animalService;
import petshop.PetShop.modulos.pessoa.model.cliente;

@RequestMapping("/api")
@Controller
public class animalController {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    animalService animalService;

    @PostMapping(value = "/animal", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> criarAnimal (
            @RequestParam(value = "animal", required = false) String animalString,
            @RequestParam(value = "cliente", required = false) String clienteString
    ) throws Exception {
        animal animal = objectMapper.readValue( animalString, animal.class);
        cliente cliente = objectMapper.readValue( clienteString, cliente.class );
        return new ResponseEntity<>(animalService.cadastrarAnimal(animal, cliente), HttpStatus.OK);
    }

    @GetMapping(value = "/animal/{clienteId}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getContatoByNome(
            @PathVariable String clienteId) {
        return new ResponseEntity<>(animalService.getAllByClientId(clienteId), HttpStatus.OK);
    }

    @GetMapping(value = "/animal/get/{animalId}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getContatoById(
            @PathVariable String animalId)
    {
        return new ResponseEntity<>(animalService.getById(animalId), HttpStatus.OK);
    }


    @PutMapping(value = "/animal", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> atuaizarAnimal (
            @RequestParam(value = "animal", required = false) String animalString) throws Exception {
        animal animal = objectMapper.readValue( animalString, animal.class);
        return new ResponseEntity<>(animalService.atualiza(animal), HttpStatus.OK);
    }
}
