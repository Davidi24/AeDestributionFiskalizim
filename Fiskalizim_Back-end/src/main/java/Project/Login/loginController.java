package Project.Login;

import Project.Users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping
public class loginController {
    private final LoginService loginService;

    @Autowired
    public loginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/check-credentials")
    public ResponseEntity<Map<String, Object>> checkUserCredentials(
            @RequestParam String username,
            @RequestParam String password
    ) {
        ArrayList<Object> validationMessage;
        try {
            validationMessage = loginService.validateUserCredentials(username, password);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(500).body(Collections.singletonMap("message", e.getMessage()));
        }

        Map<String, Object> response = new HashMap<>();
        response.put("message", validationMessage.get(0));
        response.put("container", validationMessage.get(1));

        return ResponseEntity.ok().body(response);
    }


}
