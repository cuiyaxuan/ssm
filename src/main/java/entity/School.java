package entity;

import javax.persistence.*;

@Table(name="school")
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schoolid")
    private Integer schoolid;

    @Column(name = "sname")
    private String sname;

    @Column(name = "stype")
    private String stype;

    @Column(name = "splace")
    private String splace;

    @Column(name = "ssort")
    private String ssort;

    @Column(name = "sdescription")
    private String sdescription;

    @Column(name = "sheadmaster")
    private String sheadmaster;

    @Column(name = "collegeid")
    private String collegeid;

    @Column(name = "del_flag")
    private String del_flag;


    public Integer getSchoolid() {
        return schoolid;
    }

    public void setSchoolid(Integer schoolid) {
        this.schoolid = schoolid;
    }

    public String getSname() {
        return sname;
    }

    public String getStype() {
        return stype;
    }

    public String getSplace() {
        return splace;
    }

    public String getSsort() {
        return ssort;
    }

    public String getSdescription() {
        return sdescription;
    }

    public String getSheadmaster() {
        return sheadmaster;
    }

    public String getCollegeid() {
        return collegeid;
    }

    public String getDel_flag() {
        return del_flag;
    }


    public void setSname(String sname) {
        this.sname = sname;
    }

    public void setStype(String stype) {
        this.stype = stype;
    }

    public void setSplace(String splace) {
        this.splace = splace;
    }

    public void setSsort(String ssort) {
        this.ssort = ssort;
    }

    public void setSdescription(String sdescription) {
        this.sdescription = sdescription;
    }

    public void setSheadmaster(String sheadmaster) {
        this.sheadmaster = sheadmaster;
    }

    public void setCollegeid(String collegeid) {
        this.collegeid = collegeid;
    }

    public void setDel_flag(String del_flag) {
        this.del_flag = del_flag;
    }
}
