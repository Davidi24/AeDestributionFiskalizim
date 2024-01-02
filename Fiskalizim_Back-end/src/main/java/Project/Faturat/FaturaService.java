package Project.Faturat;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaturaService {

    private final FaturaRepository faturaRepository;
    @Autowired
    public FaturaService(FaturaRepository faturaRepository) {
        this.faturaRepository = faturaRepository;
    }

    public List<Fatura> getAllFaturat(String vatnumber){
        List<Fatura> clients = faturaRepository.findByvatNumber(vatnumber);
        return clients;
    }
}
