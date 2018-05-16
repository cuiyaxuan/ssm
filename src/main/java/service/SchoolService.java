package service;


import Util.LogsUtil;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import entity.School;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.SchoolMapper;

import java.util.List;
@Service
public class SchoolService {
    @Autowired
    SchoolMapper schoolMapper;

    @Transactional
    public int add(School school){
//        Logs logs = LogsUtil.Logs("添加了商品,商品名称："+data.getTeam());
//        logsMapper.insert(logs);
        return  schoolMapper.insertSchoolData(school.getSchoolid(),school.getSname(),school.getStype(),school.getSplace(),school.getSsort(),school.getSdescription(),school.getSheadmaster());

    }
    @Transactional
    public  int delete (School school){
//        Logs logs = LogsUtil.Logs("删除了商品,商品名称："+data.getTeam());
//        logsMapper.insert(logs);
        return  schoolMapper.delete(school);
    }
    @Transactional
    public  int update (School school){
//        Logs logs = LogsUtil.Logs("更新了商品,商品名称："+data.getTeam());
//        logsMapper.insert(logs);
        return  schoolMapper.updateSchoolData(school.getSname(),school.getStype(),school.getSplace(),school.getSsort(),school.getSdescription(),school.getSheadmaster(),school.getSchoolid());

    }


    @Transactional
    public PageInfo get ( Integer page){
        int pageNo = page;
        int pageSize = 10;
        PageHelper.startPage(pageNo, pageSize);  //startPage是告诉拦截器说我要开始分页了。分页参数是这两个。
        List<School> list = schoolMapper.getAllSchool() ;
        PageInfo pageInfo = new PageInfo(list);
        return  pageInfo;
    }
    @Transactional
    public List<School> getAllSchool () {
        List<School> list = schoolMapper.getAllSchool();
        return list;
    }
    @Transactional
    public School getSchoolDataByID(String id){
        School data = schoolMapper.getSchoolDataByID(id);
        return data;
    }

    public List<School> getAll (){
        List<School> lists = schoolMapper.getAllSchoolid();
        return  lists;

    }
}
