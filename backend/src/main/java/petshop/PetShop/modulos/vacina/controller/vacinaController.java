package petshop.PetShop.modulos.vacina.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import petshop.PetShop.modulos.vacina.model.vacina;
import petshop.PetShop.modulos.vacina.service.vacinaService;

@RequestMapping("/api")
@Controller
public class vacinaController {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    vacinaService vacinaService;

    @PostMapping(value = "/vacina", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> criarVacina (
            @RequestParam(value = "vacina", required = false) String vacinaString
    ) throws Exception {
        vacina vacina = objectMapper.readValue( vacinaString, vacina.class);
        return new ResponseEntity<>(vacinaService.cadastrarVacina(vacina), HttpStatus.OK);
    }

    @PutMapping(value = "/vacina", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> atualizarVacina (
            @RequestParam(value = "vacina", required = false) String vacinaString) throws Exception {
        vacina vacina = objectMapper.readValue( vacinaString, vacina.class);
        return new ResponseEntity<>(vacinaService.atualizarVacina(vacina), HttpStatus.OK);
    }

    @GetMapping(value = "/vacina", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getVacina () {
        return new ResponseEntity<>(vacinaService.getVacinas(), HttpStatus.OK);
    }

}
