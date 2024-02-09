package Project.Login;

import Project.Users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class loginController {
  private final   LoginService loginService ;
    @Autowired
    public loginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/check-credentials")
    public ResponseEntity<String> checkUserCredentials(
            @RequestParam String username,
            @RequestParam String password
    ) {
        String validationMessage;
        try {
            validationMessage = loginService.validateUserCredentials(username, password);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }

        if (validationMessage.equals("Credentials are valid!")) {
            return ResponseEntity.ok().body("{\"message\": \"Credentials are valid!\"}");
        } else {
            return ResponseEntity.status(401).body("{\"message\": \"" + validationMessage + "\"}");
        }

    }



}
