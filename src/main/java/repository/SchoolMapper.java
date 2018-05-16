package repository;

import entity.School;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.BaseMapper;

import java.util.List;


@Repository
@Mapper
public interface SchoolMapper extends BaseMapper<School> {
   /* @Select("select  id,team,goodId,color,PLAYER_NAME,No,s_number,m_number,l_number,xl_number,xxl_number,xxxl_number,MENO  from data ")
    List<Data> getAllData();*/
   @Select("select * from school")
    List<School> getAllSchoolid();
   @Select("select sc.* from school as sc LEFT JOIN college co on co.collegeid=sc.collegeid ORDER BY sc.schoolid+0 asc")
   List<School> getAllSchool();
    @Select("select * from school where schoolid =1")
    School getOneSchoolData();

    @Select("select * from school where schoolid = #{schoolid}")
    School getSchoolDataByID(@Param("schoolid") String schoolid);

    @Update("update school set \n" +
            "sname=#{sname},stype=#{stype},splace=#{splace},ssort=#{ssort},sdescription=#{sdescription},sheadmaster=#{sheadmaster} where schoolid=#{schoolid}")
    int updateSchoolData(@Param("sname") String sname, @Param("stype") String stype,@Param("splace") String splace, @Param("ssort") String ssort, @Param("sdescription") String sdescription, @Param("sheadmaster") String sheadmaster, @Param("schoolid") Integer schoolid);
    @Insert("insert into school (schoolid,sname,stype,splace,ssort,sdescription,sheadmaster) values (#{schoolid},#{sname},#{stype},#{splace},#{ssort},#{sdescription},#{sheadmaster})")
    int insertSchoolData(@Param("schoolid") Integer schoolid,@Param("sname") String sname, @Param("stype") String stype, @Param("splace") String splace, @Param("ssort") String ssort, @Param("sdescription") String sdescription, @Param("sheadmaster") String sheadmaster);
}