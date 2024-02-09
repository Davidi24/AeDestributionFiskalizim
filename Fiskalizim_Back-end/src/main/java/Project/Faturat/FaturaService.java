package Project.Faturat;

import Project.Faturat.Fatura;
import Project.Faturat.FaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class FaturaService {

    @Autowired
    private FaturaRepository faturaRepository;

    public Page<Fatura> getFaturat(String vatNumber, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return faturaRepository.findByVatNumber(vatNumber, pageRequest);
    }
}
