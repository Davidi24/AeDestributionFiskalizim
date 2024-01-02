package Project.Users;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "`User`")
public class User {
    @Id
    private int id;
    private String username;
    private String password;
    private int idcompany;
    private int idcontact;
    private int resetpassword;
    private int active;
    private String role;
    private int idcompany_office;

    private int isCompanyClient;
    private String extrafields;
    private int first_login;

    // Default constructor
    public User() {
    }

    // Constructor with all attributes
    public User(int id, String username, String password, int idcompany, int idcontact,
                int resetpassword, int active, String role, int idcompany_office,
                int isCompanyClient, String extrafields, int first_login) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.idcompany = idcompany;
        this.idcontact = idcontact;
        this.resetpassword = resetpassword;
        this.active = active;
        this.role = role;
        this.idcompany_office = idcompany_office;
        this.isCompanyClient = isCompanyClient;
        this.extrafields = extrafields;
        this.first_login = first_login;
    }

    // Constructor without ID
    public User(String username, String password, int idcompany, int idcontact,
                int resetpassword, int active, String role, int idcompany_office,
                int isCompanyClient, String extrafields, int first_login) {
        this.username = username;
        this.password = password;
        this.idcompany = idcompany;
        this.idcontact = idcontact;
        this.resetpassword = resetpassword;
        this.active = active;
        this.role = role;
        this.idcompany_office = idcompany_office;
        this.isCompanyClient = isCompanyClient;
        this.extrafields = extrafields;
        this.first_login = first_login;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getIdcompany() {
        return idcompany;
    }

    public void setIdcompany(int idcompany) {
        this.idcompany = idcompany;
    }

    public int getIdcontact() {
        return idcontact;
    }

    public void setIdcontact(int idcontact) {
        this.idcontact = idcontact;
    }

    public int getResetpassword() {
        return resetpassword;
    }

    public void setResetpassword(int resetpassword) {
        this.resetpassword = resetpassword;
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getIdcompany_office() {
        return idcompany_office;
    }

    public void setIdcompany_office(int idcompany_office) {
        this.idcompany_office = idcompany_office;
    }

    public int isCompanyClient() {
        return isCompanyClient;
    }

    public void setCompanyClient(int companyClient) {
        isCompanyClient = companyClient;
    }

    public String getExtrafields() {
        return extrafields;
    }

    public void setExtrafields(String extrafields) {
        this.extrafields = extrafields;
    }

    public int getFirst_login() {
        return first_login;
    }

    public void setFirst_login(int first_login) {
        this.first_login = first_login;
    }
}
