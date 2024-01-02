package Project.Faturat;

import jakarta.persistence.*;


import java.util.Date;

@Entity
@Table(name = "fatura_fiskalizim")
public class Fatura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String request;
    private String response;
    private int type;
    private String vatNumber;
    private String businessUnit;
    private String tcr;
    private String aedId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    private int status;

    @Temporal(TemporalType.TIMESTAMP)
    private Date lastRetry;
    private int retrynr;
    private String extraFields;

    // Empty Constructor
    public Fatura() {
    }

    // Constructor with all fields
    public Fatura(int id, String request, String response, int type, String vatNumber, String businessUnit,
                  String tcr, String aedId, Date createdAt, int status, Date lastRetry,
                  int retrynr, String extraFields) {
        this.id = id;
        this.request = request;
        this.response = response;
        this.type = type;
        this.vatNumber = vatNumber;
        this.businessUnit = businessUnit;
        this.tcr = tcr;
        this.aedId = aedId;
        this.createdAt = createdAt;
        this.status = status;
        this.lastRetry = lastRetry;
        this.retrynr = retrynr;
        this.extraFields = extraFields;
    }

    // Constructor without ID
    public Fatura(String request, String response, int type, String vatNumber, String businessUnit,
                  String tcr, String aedId, Date createdAt, int status, Date lastRetry,
                  int retrynr, String extraFields) {
        this.request = request;
        this.response = response;
        this.type = type;
        this.vatNumber = vatNumber;
        this.businessUnit = businessUnit;
        this.tcr = tcr;
        this.aedId = aedId;
        this.createdAt = createdAt;
        this.status = status;
        this.lastRetry = lastRetry;
        this.retrynr = retrynr;
        this.extraFields = extraFields;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getVatNumber() {
        return vatNumber;
    }

    public void setVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
    }

    public String getBusinessUnit() {
        return businessUnit;
    }

    public void setBusinessUnit(String businessUnit) {
        this.businessUnit = businessUnit;
    }

    public String getTcr() {
        return tcr;
    }

    public void setTcr(String tcr) {
        this.tcr = tcr;
    }

    public String getAedId() {
        return aedId;
    }

    public void setAedId(String aedId) {
        this.aedId = aedId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getLastRetry() {
        return lastRetry;
    }

    public void setLastRetry(Date lastRetry) {
        this.lastRetry = lastRetry;
    }

    public int getRetryNumber() {
        return retrynr;
    }

    public void setRetryNumber(int retrynr) {
        this.retrynr = retrynr;
    }

    public String getExtraFields() {
        return extraFields;
    }

    public void setExtraFields(String extraFields) {
        this.extraFields = extraFields;
    }

    @Override
    public String toString() {
        return "Fatura{" +
                "id=" + id +
                ", request='" + request + '\'' +
                ", response='" + response + '\'' +
                ", type=" + type +
                ", vatNumber='" + vatNumber + '\'' +
                ", businessUnit='" + businessUnit + '\'' +
                ", tcr='" + tcr + '\'' +
                ", aedId='" + aedId + '\'' +
                ", createdAt=" + createdAt +
                ", status=" + status +
                ", lastRetry=" + lastRetry +
                ", retryNumber=" + retrynr +
                ", extraFields='" + extraFields + '\'' +
                '}';
    }
}
