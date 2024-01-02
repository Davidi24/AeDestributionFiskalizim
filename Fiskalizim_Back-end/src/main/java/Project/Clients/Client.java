package Project.Clients;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "`Client`")
public class Client {
    @Id
    private int IdClient;
    private int idcompany;
    private String businessname;
    private String vatnumber;
    private int idcontact;
    private String notes;
    private int IdInternalRevenueService;
    private boolean Certification;
    private String Agency;
    private int WithoutVat;
    private String TypeOfBusiness;
    private int IdEconomicSector;
    private String TaxPayerStatus;
    private String Municipality;
    private String CertPath;
    private int IdCountry;
    private String extrafields;

    public Client() {
        // Empty constructor
    }

    public Client(int idClient, int idcompany, String businessname, String vatnumber, int idcontact,
                  String notes, int idInternalRevenueService, boolean certification, String agency,
                  int withoutVat, String typeOfBusiness, int idEconomicSector, String taxPayerStatus,
                  String municipality, String certPath, int idCountry, String extrafields) {
        // Constructor with all attributes
        this.IdClient = idClient;
        this.idcompany = idcompany;
        this.businessname = businessname;
        this.vatnumber = vatnumber;
        this.idcontact = idcontact;
        this.notes = notes;
        this.IdInternalRevenueService = idInternalRevenueService;
        this.Certification = certification;
        this.Agency = agency;
        this.WithoutVat = withoutVat;
        this.TypeOfBusiness = typeOfBusiness;
        this.IdEconomicSector = idEconomicSector;
        this.TaxPayerStatus = taxPayerStatus;
        this.Municipality = municipality;
        this.CertPath = certPath;
        this.IdCountry = idCountry;
        this.extrafields = extrafields;
    }

    public Client( int idcompany, String businessname, String vatnumber, int idcontact,
                  String notes, int idInternalRevenueService, boolean certification, String agency,
                  int withoutVat, String typeOfBusiness, int idEconomicSector, String taxPayerStatus,
                  String municipality, String certPath, int idCountry, String extrafields) {
        this.idcompany = idcompany;
        this.businessname = businessname;
        this.vatnumber = vatnumber;
        this.idcontact = idcontact;
        this.notes = notes;
        this.IdInternalRevenueService = idInternalRevenueService;
        this.Certification = certification;
        this.Agency = agency;
        this.WithoutVat = withoutVat;
        this.TypeOfBusiness = typeOfBusiness;
        this.IdEconomicSector = idEconomicSector;
        this.TaxPayerStatus = taxPayerStatus;
        this.Municipality = municipality;
        this.CertPath = certPath;
        this.IdCountry = idCountry;
        this.extrafields = extrafields;
    }

    public int getIdClient() {
        return IdClient;
    }

    public void setIdClient(int idClient) {
        IdClient = idClient;
    }

    public int getIdcompany() {
        return idcompany;
    }

    public void setIdcompany(int idcompany) {
        this.idcompany = idcompany;
    }

    public String getBusinessname() {
        return businessname;
    }

    public void setBusinessname(String businessname) {
        this.businessname = businessname;
    }

    public String getVatnumber() {
        return vatnumber;
    }

    public void setVatnumber(String vatnumber) {
        this.vatnumber = vatnumber;
    }

    public int getIdcontact() {
        return idcontact;
    }

    public void setIdcontact(int idcontact) {
        this.idcontact = idcontact;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public int getIdInternalRevenueService() {
        return IdInternalRevenueService;
    }

    public void setIdInternalRevenueService(int idInternalRevenueService) {
        IdInternalRevenueService = idInternalRevenueService;
    }

    public boolean isCertification() {
        return Certification;
    }

    public void setCertification(boolean certification) {
        Certification = certification;
    }

    public String getAgency() {
        return Agency;
    }

    public void setAgency(String agency) {
        Agency = agency;
    }

    public int getWithoutVat() {
        return WithoutVat;
    }

    public void setWithoutVat(int withoutVat) {
        WithoutVat = withoutVat;
    }

    public String getTypeOfBusiness() {
        return TypeOfBusiness;
    }

    public void setTypeOfBusiness(String typeOfBusiness) {
        TypeOfBusiness = typeOfBusiness;
    }

    public int getIdEconomicSector() {
        return IdEconomicSector;
    }

    public void setIdEconomicSector(int idEconomicSector) {
        IdEconomicSector = idEconomicSector;
    }

    public String getTaxPayerStatus() {
        return TaxPayerStatus;
    }

    public void setTaxPayerStatus(String taxPayerStatus) {
        TaxPayerStatus = taxPayerStatus;
    }

    public String getMunicipality() {
        return Municipality;
    }

    public void setMunicipality(String municipality) {
        Municipality = municipality;
    }

    public String getCertPath() {
        return CertPath;
    }

    public void setCertPath(String certPath) {
        CertPath = certPath;
    }

    public int getIdCountry() {
        return IdCountry;
    }

    public void setIdCountry(int idCountry) {
        IdCountry = idCountry;
    }

    public String getExtrafields() {
        return extrafields;
    }
    public void setExtrafields(String extrafields) {
        this.extrafields = extrafields;
    }

    @Override
    public String toString() {
        return "Client{" +
                "IdClient=" + IdClient +
                ", idcompany=" + idcompany +
                ", businessname='" + businessname + '\'' +
                ", vatnumber='" + vatnumber + '\'' +
                ", idcontact=" + idcontact +
                ", notes='" + notes + '\'' +
                ", IdInternalRevenueService=" + IdInternalRevenueService +
                ", Certification=" + Certification +
                ", Agency='" + Agency + '\'' +
                ", WithoutVat=" + WithoutVat +
                ", TypeOfBusiness='" + TypeOfBusiness + '\'' +
                ", IdEconomicSector=" + IdEconomicSector +
                ", TaxPayerStatus='" + TaxPayerStatus + '\'' +
                ", Municipality='" + Municipality + '\'' +
                ", CertPath='" + CertPath + '\'' +
                ", IdCountry=" + IdCountry +
                ", extrafields='" + extrafields + '\'' +
                '}';
    }


}
