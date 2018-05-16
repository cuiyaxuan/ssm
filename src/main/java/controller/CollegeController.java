package controller;

import Util.AjaxResponse;
import com.github.pagehelper.PageInfo;
import entity.College;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import service.CollegeService;

import java.util.List;

@Controller
@RequestMapping("College")
public class CollegeController {

    @Autowired
    CollegeService collegeService;

    @ResponseBody
    @RequestMapping("/add")
    public AjaxResponse add(College college) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            collegeService.add(college);
            ajaxResponse.setState("200");
            ajaxResponse.setResult("OK");
            ajaxResponse.setMessage("添加学院成功!");
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("添加学院失败!");
        }
        return ajaxResponse;
    }

    @RequestMapping("/delete")
    @ResponseBody
    public AjaxResponse delete(College college) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            collegeService.delete(college);
            ajaxResponse.setState("200");
            ajaxResponse.setResult("OK");
            ajaxResponse.setMessage("删除学院成功!");
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("删除学院失败!");
        }
        return ajaxResponse;
    }
    @ResponseBody
    @RequestMapping("/update")
    public AjaxResponse update(College college) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            collegeService.update(college);
            ajaxResponse.setState("200");
            ajaxResponse.setResult("OK");
            ajaxResponse.setMessage("更新学院成功!");
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("更新学院失败!");
        }
        return ajaxResponse;
    }
    @ResponseBody
    @RequestMapping("/list")
    public AjaxResponse list( Integer page) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            PageInfo<College> pageInfo = collegeService.get(page);
            ajaxResponse.setState("200");
            ajaxResponse.setMessage("更新学院成功!");
            ajaxResponse.setResult(pageInfo);
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("更新学院失败!");
        }
        return ajaxResponse;
    }
    @ResponseBody
    @RequestMapping("/listAll")
    public AjaxResponse listAll() {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            List<College> list = collegeService.getAllCollege();
            ajaxResponse.setState("200");
            ajaxResponse.setMessage("查询学院成功!");
            ajaxResponse.setResult(list);
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("查询学院失败!");
        }
        return ajaxResponse;
    }

    @ResponseBody
    @RequestMapping("/listDataByID")
    public AjaxResponse listDataByID(String schoolid) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            College college = collegeService.getCollegeDataByID(schoolid);
            ajaxResponse.setState("200");
            ajaxResponse.setMessage("查询单个学院成功!");
            ajaxResponse.setResult(college);
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("查询单个学院失败!");
        }
        return ajaxResponse;
    }



}
