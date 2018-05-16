package service;
import Util.LogsUtil;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import entity.College;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.CollegeMapper;

import java.util.List;

@Service
public class CollegeService {
    @Autowired
    CollegeMapper collegeMapper;

    @Transactional
    public int add(College college){
//        Logs logs = LogsUtil.Logs("添加了商品,商品名称："+data.getTeam());
//        logsMapper.insert(logs);
        return  collegeMapper.insertCollegeData(college.getCollegeid(),college.getCname(),college.getCtype(),college.getCsort(),college.getCdescription(),college.getCheadmaster(),college.getSchoolid());

    }
    @Transactional
    public  int delete (College college){
//        Logs logs = LogsUtil.Logs("删除了商品,商品名称："+data.getTeam());
//        logsMapper.insert(logs);
        return  collegeMapper.delete(college);
    }
    @Transactional
    public  int update (College college){
//        Logs logs = LogsUtil.Logs("更新了商品,商品名称："+data.getTeam());
//        logsMapper.insert(logs);
        return  collegeMapper.updateCollegeData(college.getCname(),college.getCtype(),college.getCsort(),college.getCdescription(),college.getCheadmaster(),college.getSchoolid(),college.getCollegeid());

    }


    @Transactional
    public PageInfo get ( Integer page){
        int pageNo = page;
        int pageSize = 10;
        PageHelper.startPage(pageNo, pageSize);  //startPage是告诉拦截器说我要开始分页了。分页参数是这两个。
        List<College> list = collegeMapper.getCollegeAllData() ;
        PageInfo pageInfo = new PageInfo(list);
        return  pageInfo;
    }
    @Transactional
    public List<College> getAllCollege () {
        List<College> list = collegeMapper.getCollegeAllData();
        return list;
    }
    @Transactional
    public College getCollegeDataByID(String id){
        College data = collegeMapper.getCollegeDataByID(id);
        return data;
    }

}
