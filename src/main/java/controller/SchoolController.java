package controller;

import Util.AjaxResponse;
import com.github.pagehelper.PageInfo;
import entity.School;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import service.SchoolService;

import java.util.List;

@Controller
@RequestMapping("School")
public class SchoolController {
    @Autowired
    SchoolService schoolService;

    @ResponseBody
    @RequestMapping("/add")
    public AjaxResponse add(School school) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            schoolService.add(school);
            ajaxResponse.setState("200");
            ajaxResponse.setResult("OK");
            ajaxResponse.setMessage("添加学校成功!");
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("添加学校失败!");
        }
        return ajaxResponse;
    }

    @RequestMapping("/delete")
    @ResponseBody
    public AjaxResponse delete(School school) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            schoolService.delete(school);
            ajaxResponse.setState("200");
            ajaxResponse.setResult("OK");
            ajaxResponse.setMessage("删除学校成功!");
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("删除学校失败!");
        }
        return ajaxResponse;
    }
    @ResponseBody
    @RequestMapping("/update")
    public AjaxResponse update(School school) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            schoolService.update(school);
            ajaxResponse.setState("200");
            ajaxResponse.setResult("OK");
            ajaxResponse.setMessage("更新学校成功!");
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("更新学校失败!");
        }
        return ajaxResponse;
    }
    @ResponseBody
    @RequestMapping("/list")
    public AjaxResponse list( Integer page) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            PageInfo<School> pageInfo = schoolService.get(page);
            ajaxResponse.setState("200");
            ajaxResponse.setMessage("更新学校成功!");
            ajaxResponse.setResult(pageInfo);
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("更新学校失败!");
        }
        return ajaxResponse;
    }
    @ResponseBody
    @RequestMapping("/listAll")
    public AjaxResponse listAll() {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            List<School> list = schoolService.getAllSchool();
            ajaxResponse.setState("200");
            ajaxResponse.setMessage("查询学校成功!");
            ajaxResponse.setResult(list);
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("查询学校失败!");
        }
        return ajaxResponse;
    }

    @ResponseBody
    @RequestMapping("/listDataByID")
    public AjaxResponse listDataByID(String schoolid) {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            School school = schoolService.getSchoolDataByID(schoolid);
            ajaxResponse.setState("200");
            ajaxResponse.setMessage("查询单个学校成功!");
            ajaxResponse.setResult(school);
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("查询单个学校失败!");
        }
        return ajaxResponse;
    }

    @RequestMapping("/getAll")
    @ResponseBody
    public AjaxResponse getAll() {
        AjaxResponse ajaxResponse =new AjaxResponse();
        try {
            List<School> lists= schoolService.getAll();
            ajaxResponse.setState("200");
            ajaxResponse.setResult(lists);
            ajaxResponse.setMessage("获取商品类别成功!");
        }catch (Exception e){
            ajaxResponse.setState("404");
            ajaxResponse.setResult("error");
            ajaxResponse.setMessage("获取商品类别失败!");
        }
        return ajaxResponse;

    }
}
