package petshop.PetShop.modulos.pessoa.model;

import javax.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name = "id_pessoa")

public class funcionario extends pessoa {

    private boolean ativo;
    private String CRMV;

    public funcionario(Integer id, String nome, String cpf, String email, String apelido, String escopo, String senha, boolean ativo, String CRMV) {
        super(id, nome, cpf, email, apelido, escopo, senha);
        this.ativo = ativo;
        this.CRMV = CRMV;
    }

    public funcionario() {}

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public String getCRMV() {
        return CRMV;
    }

    public void setCRMV(String CRMV) {
        this.CRMV = CRMV;
    }
}
