package Project.Faturat;

import Project.Users.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface FaturaRepository extends JpaRepository<Fatura, Long> {
    List<Fatura> findByvatNumber(@Param("vatNumber") String vatnumber);
}
