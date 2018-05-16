package entity;

import javax.persistence.*;

@Table(name="college")
public class College {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "collegeid")
    private Integer collegeid;

    @Column(name = "cname")
    private String cname;

    @Column(name = "ctype")
    private String ctype;

    @Column(name = "csort")
    private String csort;

    @Column(name = "cdescription")
    private String cdescription;

    @Column(name = "cheadmaster")
    private String cheadmaster;

    @Column(name = "schoolid")
    private Integer schoolid;

    @Column(name = "del_flag")
    private Integer del_flag;

    @Column(name = "sname")
    private String sname;

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getCname() {
        return cname;
    }


    public String getCtype() {
        return ctype;
    }

    public String getCsort() {
        return csort;
    }

    public String getCdescription() {
        return cdescription;
    }

    public String getCheadmaster() {
        return cheadmaster;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }


    public void setCtype(String ctype) {
        this.ctype = ctype;
    }

    public void setCsort(String csort) {
        this.csort = csort;
    }

    public void setCdescription(String cdescription) {
        this.cdescription = cdescription;
    }

    public void setCheadmaster(String cheadmaster) {
        this.cheadmaster = cheadmaster;
    }

    public Integer getCollegeid() {
        return collegeid;
    }

    public Integer getSchoolid() {
        return schoolid;
    }

    public Integer getDel_flag() {
        return del_flag;
    }

    public void setCollegeid(Integer collegeid) {
        this.collegeid = collegeid;
    }

    public void setSchoolid(Integer schoolid) {
        this.schoolid = schoolid;
    }

    public void setDel_flag(Integer del_flag) {
        this.del_flag = del_flag;
    }
}
