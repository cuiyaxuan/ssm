package repository;

import entity.College;
import entity.School;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.BaseMapper;

import java.util.List;


@Repository
@Mapper
public interface CollegeMapper extends BaseMapper<College> {
   /* @Select("select  id,team,goodId,color,PLAYER_NAME,No,s_number,m_number,l_number,xl_number,xxl_number,xxxl_number,MENO  from data ")
    List<Data> getAllData();*/
   @Select("select co.*,sc.sname from college as co LEFT JOIN school sc on sc.schoolid=co.schoolid order by co.collegeid asc")
   List<College> getCollegeAllData();
    @Select("select * from college where collegeid =1")
    College getOneCollegeData();

    @Select("select * from college where collegeid = #{collegeid}")
    College getCollegeDataByID(@Param("collegeid") String collegeid);

    @Update("update college set cname=#{cname},ctype=#{ctype},csort=#{csort},cdescription=#{cdescription},cheadmaster=#{cheadmaster},schoolid=#{schoolid} where collegeid=#{collegeid}")
    int updateCollegeData(@Param("cname") String cname, @Param("ctype") String ctype, @Param("csort") String csort, @Param("cdescription") String cdescription, @Param("cheadmaster") String cheadmaster,@Param("schoolid") Integer schoolid,@Param("collegeid") Integer collegeid);
    @Insert("insert into college (collegeid,cname,ctype,csort,cdescription,cheadmaster,schoolid) values (#{collegeid},#{cname},#{ctype},#{csort},#{cdescription},#{cheadmaster},#{schoolid})")
    int insertCollegeData(@Param("collegeid") Integer collegeid,@Param("cname") String cname, @Param("ctype") String ctype, @Param("csort") String csort, @Param("cdescription") String cdescription, @Param("cheadmaster") String cheadmaster, @Param("schoolid") Integer schoolid);
}