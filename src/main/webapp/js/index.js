jQuery(function () {
    initDataTables();
    initDataCollegeTables();
    initOperationLogs();
});
var USER_ROLE=sessionStorage.getItem('userRole');
function initDataTables() {
    $('#table_id_example').on( 'init.dt', function () {
        //加载完成后的事件
        initRole();
    } ).DataTable({
        "ajax": {  //ajax方式向后台发送请求
            "type": "POST",
            "async":false,
            "url":contextPath+"/School/listAll",
            "dataType" : "json",
            "dataSrc": "result"
        },
        "columns" : [//对接收到的json格式数据进行处理，data为json中对应的key
            {"data":"schoolid"},
            {"data" : "sname"} ,
            {"data" : "stype"},
            {"data": "splace"},
            {"data": "ssort"},
            {"data": "sdescription"},
            {"data": "sheadmaster"},
            // {"data": "lNumber"},
            // {"data": "xlNumber"},
            // {"data": "xxlNumber"},
            // {"data": "xxxlNumber"},
            // {"data": "meno"},
            {"data":null}
        ],
        columnDefs:[{
            targets: 7,
            render: function (data, type, row, meta) {
                return '<a type="button" class="am-btn am-btn-primary am-btn-xs data-change" id="data-change" onclick="initUpdateData('+data.schoolid+')">修 改</a><br>' +
                    '<a type="button" type="button" class="am-btn am-btn-danger am-btn-xs data-delete" id="data-delete" onclick="deleteData('+data.schoolid+')">删 除</a>';
            }
        },
            { "orderable": false, "targets": 7 }
        ],
        language: {
            "sProcessing": "处理中...",
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            }
        },
        destroy: true
    });
}
function initOperationLogs() {
    $('#table_operationLogs').on('init.dt', function () {
        $('#table_operationLogs').find("thead th:last-of-type").remove();
    }).DataTable({
        "ajax": {  //ajax方式向后台发送请求
            "type": "POST",
            "async": false,
            "url": contextPath+"/logs/getAll",
            "dataType": "json",
            "dataSrc": "result"
        },
        "columns": [//对接收到的json格式数据进行处理，data为json中对应的key
            {"data": "id"},
            {"data": "time"},
            {"data": "username"},
            {"data": "details"}
        ],
        "order": [[ 1, "desc" ]],
        language: {
            "sProcessing": "处理中...",
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            }
        },
        "bAutoWidth": true,
        "destroy":true
    });
}
function initRole(){
    switch (USER_ROLE){
        case "1":
            break;
        case "2":
            $('#addClassify').attr("disabled", true);
            $("#addPro").attr("disabled",true);
            $(".data-change").attr("disabled",true);
            $(".data-delete").attr("disabled",true);
            break;
        case "3":
            $('#addClassify').attr("disabled", true);
            $("#addPro").attr("disabled",true);
            $(".data-delete").attr("disabled",true);
    }
    /*$.ajax({
        type:'post',
        async:false,
        url:contextPath+'/Login/getRole',
        success:function(result){
          var data =result.result;
          if(data=="1"){
              $("#addPro").setAttribute("disabled",true);
              $("#data-change").setAttribute("disabled",true);
              $("#data-delete").setAttribute("disabled",true);
          }
          if(data=="2"){
              $("#addPro").setAttribute("disabled",true);
          }
        },
        error:function () {
            alert("出错了！");
        }
    });*/

}
function initUpdateData(id) {
    var html = '<div class="am-g">' +
        //'<div class="am-u-sm-6">' +
        // '<p><input type="text" id="data-schoolOrder" class="am-form-field am-radius" placeholder="学校排名" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><select id="classfiy-select" data-am-selected>' +
        // '</select>' +
        // '<input id="classify-select-value" type="text" value="1" hidden></p>' +
        // '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-schoolName" class="am-form-field am-radius" placeholder="学校名称" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-schoolType" class="am-form-field am-radius" placeholder="学校种类" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-schoolPlace" class="am-form-field am-radius" placeholder="学校地点" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-schoolCountry" class="am-form-field am-radius" placeholder="学校所在地" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-schoolDescription" class="am-form-field am-radius" placeholder="学校描述" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-schoolMaster" class="am-form-field am-radius" placeholder="学校校长" /></p>' +
        '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-l" class="am-form-field am-radius" placeholder="l" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xl" class="am-form-field am-radius" placeholder="xl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxl" class="am-form-field am-radius" placeholder="xxl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxxl" class="am-form-field am-radius" placeholder="xxxl" /></p>' +
        // '</div>' +
        '<div class="am-u-sm-12">' +
        '<button type="button" class="am-btn am-btn-success" style="margin: 0 auto;display: block" onclick="updateData('+id+')">提交</button>' +
        '</div>' +
        '</div>';
    pageUtils.showModal("修改数据", html);
    if(USER_ROLE==3){
        // $("#data-schoolOrder").attr("disabled", true);
        $("#data-schoolName").attr("disabled", true);
        $("#data-schoolType").attr("disabled", true);
        $("#data-schoolPlace").attr("disabled", true);
        $("#data-schoolCountry").attr("disabled", true);
        $("#data-schoolDescription").attr("disabled", true);
        $("#data-schoolMaster").attr("disabled", true);
    }
    $.ajax({
        method: "post",
        url: contextPath+"/School/listDataByID",
        data: {schoolid: id},
        success: function (data) {
            // $("#data-schoolOrder").val(data.result.schoolid);
            $("#data-schoolName").val(data.sname);
            $("#data-schoolType").val(data.stype);
            $("#data-schoolPlace").val(data.splace);
            $("#data-schoolCountry").val(data.ssort);
            $("#data-schoolDescription").val(data.sdescription);
            $("#data-schoolMaster").val(data.sheadmaster);
            // $("#data-l").val(data.result.lNumber);
            // $("#data-xl").val(data.result.xlNumber);
            // $("#data-xxl").val(data.result.xxlNumber);
            // $("#data-xxxl").val(data.result.xxxlNumber);
            // $.ajax({
            //     method:"post",
            //     url:contextPath+"/good/getAll",
            //     success:function (res) {
            //         var html="";
            //         $.each(res.result, function (indexInArray, value) {
            //             html+='<option value="'+value.id+'">'+value.name+'</option>'
            //         });
            //         var $selected = $('#classfiy-select');
            //         $selected.append(html);
            //         $selected.find('option').eq(data.result.goodid-1).attr('selected', true);
            //         if(USER_ROLE==3){
            //             $selected.attr("disabled", true);
            //         }
            //         $selected.selected();
            //         $("#classify-select-value").attr("value",data.result.goodid);
            //         $selected.on('change', function() {
            //             $("#classify-select-value").attr("value",$(this).val());
            //         });
            //     }
            // })
        }
    });

}
function initAddData() {
    var html = '<div class="am-g">' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-schoolid" class="am-form-field am-radius" placeholder="学校排名" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-sname" class="am-form-field am-radius" placeholder="学校名称" /></p>' +
        '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><select id="classfiy-select" data-am-selected>' +
        // '</select>' +
        // '<input id="classify-select-value" type="text" value="1" hidden></p>' +
        // '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-stype" class="am-form-field am-radius" placeholder="学校种类" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-splace" class="am-form-field am-radius" placeholder="学校所在地" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-ssort" class="am-form-field am-radius" placeholder="学校排名" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-sdescription" class="am-form-field am-radius" placeholder="学校描述" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-sheadmaster" class="am-form-field am-radius" placeholder="学校校长" /></p>' +
        '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-s" class="am-form-field am-radius" placeholder="s" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-l" class="am-form-field am-radius" placeholder="l" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xl" class="am-form-field am-radius" placeholder="xl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxl" class="am-form-field am-radius" placeholder="xxl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxxl" class="am-form-field am-radius" placeholder="xxxl" /></p>' +
        // '</div>' +
        '<div class="am-u-sm-12">' +
        '<button type="button" class="am-btn am-btn-success" style="margin: 0 auto;display: block" onclick="addData()">提交</button>' +
        '</div>' +
        '</div>';
    pageUtils.showModal("新增数据", html);
    // $.ajax({
    //     method:"post",
    //     url:contextPath+"/good/getAll",
    //     success:function (data) {
    //         var html="";
    //         $.each(data.result, function (indexInArray, value) {
    //             html+='<option value="'+value.id+'">'+value.name+'</option>'
    //         });
    //         var $selected = $('#classfiy-select');
    //         $selected.append(html);
    //         $selected.selected();
    //         $selected.on('change', function() {
    //             $("#classify-select-value").attr("value",$(this).val());
    //         });
    //     }
    // })
}
function updateData(schoolid) {
    //var schoolOrder = $("#data-schoolOrder").val();
    var schoolName = $("#data-schoolName").val();
    var schoolType = $("#data-schoolType").val();
    var schoolPlace = $("#data-schoolPlace").val();
    var schoolCountry = $("#data-schoolCountry").val();
    var schoolDescription = $("#data-schoolDescription").val();
    var schoolMaster = $("#data-schoolMaster").val();
    // var l = $("#data-l").val();
    // var xl = $("#data-xl").val();
    // var xxl = $("#data-xxl").val();
    // var xxxl = $("#data-xxxl").val();
    $.ajax({
        method:"post",
        url:contextPath+"/School/update",
        data:{schoolid:schoolid,sname:schoolName,stype:schoolType,splace:schoolPlace,ssort:schoolCountry,sdescription:schoolDescription,sheadmaster:schoolMaster},
        success:function (data) {
            alert("修改数据成功！");
            pageUtils.closeModal();
            initDataTables();
            initOperationLogs();
        }
    })
}
function addData() {
    var schoolid=$("#data-schoolid").val();
    var sname = $("#data-sname").val();
    var stype = $("#data-stype").val();
    var splace = $("#data-splace").val();
    var ssort = $("#data-ssort").val();
    var sdescription = $("#data-sdescription").val();
    var sheadmaster = $("#data-sheadmaster").val();
    // var xxxl = $("#data-xxxl").val();
    $.ajax({
        method:"post",
        url:contextPath+"/School/add",
        data:{schoolid:schoolid,sname:sname,stype:stype,splace:splace,ssort:ssort,sdescription:sdescription,sheadmaster:sheadmaster},
        success:function (data) {
            alert("新增数据成功！");
            pageUtils.closeModal();
            initDataTables();
            initOperationLogs();
        },
        error:function (jqXHR, textStatus, errorThrown) {
            alert('发生错误!' + textStatus);
        }
    })
}
function deleteData(schoolid) {
    var $confirm = $('#my-confirm');
    $confirm.find('.am-modal-hd').html("数据删除");
    $confirm.find('.am-modal-bd').html("确认删除么亲？");
    $confirm.modal({
        relatedTarget: this,
        onConfirm: function(options) {
            $.ajax({
                method:"post",
                url:contextPath+"/School/delete",
                data:{schoolid:schoolid},
                success:function (data) {
                    alert("删除数据成功！");
                    pageUtils.closeModal();
                    initDataTables();
                    initOperationLogs();
                }
            })
        },
        // closeOnConfirm: false,
        onCancel: function() {
        }
    });

}
function initClassify() {
    var html = '<div class="am-g">' +
        '<div class="am-u-sm-12">' +
        '<p><input type="text" id="classify-input" class="am-form-field am-radius" placeholder="输入新增分类" /></p>' +
        '</div>' +
        '<div class="am-u-sm-12">' +
        '<button type="button" class="am-btn am-btn-success" style="margin: 0 auto;display: block" onclick="addClassify()">提交</button>' +
        '</div>' +
        '</div>';
    pageUtils.showModal("新增分类", html);
}

function addClassify() {
    var $new_classfiy = $("#classify-input").val();
    $.ajax({
        method:"post",
        url:contextPath+"/good/add",
        data:{name:$new_classfiy},
        success:function (data) {
            alert("新增分类成功！");
            pageUtils.closeModal();
            initOperationLogs();
        },
        error:function (jqXHR, textStatus, errorThrown) {
            alert('发生错误!' + textStatus);
        }
    })
}

function initDataCollegeTables() {
    $('#table_id_college').on( 'init.dt', function () {
        //加载完成后的事件
        initRole();
    } ).DataTable({
        "ajax": {  //ajax方式向后台发送请求
            "type": "POST",
            "async":false,
            "url":contextPath+"/College/listAll",
            "dataType" : "json",
            "dataSrc": "result"
        },
        "columns" : [//对接收到的json格式数据进行处理，data为json中对应的key
            {"data":"collegeid"},
            {"data" : "cname"} ,
            {"data" : "ctype"},
            {"data": "csort"},
            {"data": "cdescription"},
            {"data": "cheadmaster"},
            {"data": "sname"},
            {"data":null}
        ],
        columnDefs:[{
            targets: 7,
            render: function (data, type, row, meta) {
                return '<a type="button" class="am-btn am-btn-primary am-btn-xs data-change" id="data-change" onclick="initUpdateCollegeData('+data.collegeid+')">修 改</a><br>' +
                    '<a type="button" type="button" class="am-btn am-btn-danger am-btn-xs data-delete" id="data-delete" onclick="deleteCollegeData('+data.collegeid+')">删 除</a>';
            }
        },
            { "orderable": false, "targets": 7 }
        ],
        language: {
            "sProcessing": "处理中...",
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            }
        },
        destroy: true
    });
}


function deleteCollegeData(collegeid) {
    var $confirm = $('#my-confirm');
    $confirm.find('.am-modal-hd').html("数据删除");
    $confirm.find('.am-modal-bd').html("确认删除么亲？");
    $confirm.modal({
        relatedTarget: this,
        onConfirm: function(options) {
            $.ajax({
                method:"post",
                url:contextPath+"/College/delete",
                data:{collegeid:collegeid},
                success:function (data) {
                    alert("删除数据成功！");
                    pageUtils.closeModal();
                    initDataCollegeTables();
                    initOperationLogs();
                }
            })
        },
        // closeOnConfirm: false,
        onCancel: function() {
        }
    });

}

function initUpdateCollegeData(id) {
    var html = '<div class="am-g">' +
        //'<div class="am-u-sm-6">' +
        // '<p><input type="text" id="data-schoolOrder" class="am-form-field am-radius" placeholder="学校排名" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><select id="classfiy-select" data-am-selected>' +
        // '</select>' +
        // '<input id="classify-select-value" type="text" value="1" hidden></p>' +
        // '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-collegeName" class="am-form-field am-radius" placeholder="学院名称" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-collegeType" class="am-form-field am-radius" placeholder="学院种类" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-collegeNum" class="am-form-field am-radius" placeholder="学院人数" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-collegeDescription" class="am-form-field am-radius" placeholder="学院描述" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-collegeMaster" class="am-form-field am-radius" placeholder="学院院长" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><select id="classfiy-etcollege-select" data-am-selected>' +
        '</select>' +
        '<input id="classify-select-etcollege-value" type="text" value="1" hidden></p>' +
        '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-l" class="am-form-field am-radius" placeholder="l" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xl" class="am-form-field am-radius" placeholder="xl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxl" class="am-form-field am-radius" placeholder="xxl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxxl" class="am-form-field am-radius" placeholder="xxxl" /></p>' +
        // '</div>' +
        '<div class="am-u-sm-12">' +
        '<button type="button" class="am-btn am-btn-success" style="margin: 0 auto;display: block" onclick="updateCollegeData('+id+')">提交</button>' +
        '</div>' +
        '</div>';
    pageUtils.showModal("修改数据", html);
    if(USER_ROLE==3){
        // $("#data-schoolOrder").attr("disabled", true);
        $("#data-collegeName").attr("disabled", true);
        $("#data-collegeType").attr("disabled", true);
        $("#data-collegeNum").attr("disabled", true);
        $("#data-collegeDescription").attr("disabled", true);
        $("#data-collegeMaster").attr("disabled", true);
    }
    $.ajax({
        method: "post",
        url: contextPath+"/College/listDataByID",
        data: {collegeid: id},
        success: function (data) {
            // $("#data-schoolOrder").val(data.result.schoolid);
            $("#data-collegeName").val(data.cname);
            $("#data-collegeType").val(data.ctype);
            $("#data-collegeNum").val(data.csort);
            $("#data-collegeDescription").val(data.cdescription);
            $("#data-collegeMaster").val(data.cheadmaster);
            //$("#data-schoolMaster").val(data.sheadmaster);
            // $("#data-l").val(data.result.lNumber);
            // $("#data-xl").val(data.result.xlNumber);
            // $("#data-xxl").val(data.result.xxlNumber);
            // $("#data-xxxl").val(data.result.xxxlNumber);
            //  $.ajax({
            //      method:"post",
            //      url:contextPath+"/School/getAll",
            //      success:function (res) {
            //          var html="";
            //          $.each(res.result, function (indexInArray, value) {
            //              html+='<option value="'+value.schoolid+'">'+value.sname+'</option>'
            //          });
            //          var $selected = $('#classfiy-newcolle-select');
            //          $selected.append(html);
            //          $selected.find('option').eq(data.result.goodid-1).attr('selected', true);
            //          if(USER_ROLE==3){
            //              $selected.attr("disabled", true);
            //          }
            //          $selected.selected();
            //          $("#classify-select-value").attr("value",data.result.goodid);
            //          $selected.on('change', function() {
            //              $("#classify-select-value").attr("value",$(this).val());
            //          });
            //       }
            //  })
            $.ajax({
                method:"post",
                url:contextPath+"/School/getAll",
                success:function (data) {
                    var html="";
                    $.each(data.result, function (indexInArray, value) {
                        html+='<option value="'+value.schoolid
                            +'">'+value.sname+'</option>'
                    });
                    var $selected = $('#classfiy-etcollege-select');
                    $selected.append(html);
                    $selected.selected();
                    $selected.on('change', function() {
                        $("#classify-select-etcollege-value").attr("value",
                            $(this).val());
                    });
                }
            })
        }
    });

}

function updateCollegeData(collegeid) {
    //var schoolOrder = $("#data-schoolOrder").val();
    var collegeName = $("#data-collegeName").val();
    var collegeType = $("#data-collegeType").val();
    var collegeNum = $("#data-collegeNum").val();
    var collegeDescription = $("#data-collegeDescription").val();
    var collegeMaster = $("#data-collegeMaster").val();
    var schoolid=$("#classify-select-etcollege-value").val();
    //var schoolMaster = $("#data-schoolMaster").val();
    // var l = $("#data-l").val();
    // var xl = $("#data-xl").val();
    // var xxl = $("#data-xxl").val();
    // var xxxl = $("#data-xxxl").val();
    $.ajax({
        method:"post",
        url:contextPath+"/College/update",
        data:{collegeid:collegeid,cname:collegeName,ctype:collegeType,csort:collegeNum,cdescription:collegeDescription,cheadmaster:collegeMaster,schoolid:schoolid},
        success:function (data) {
            alert("修改数据成功！");
            pageUtils.closeModal();
            initDataCollegeTables();
            initOperationLogs();
        }
    })
}

function initAddCollegeData() {
    var html = '<div class="am-g">' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-collegeid" class="am-form-field am-radius" placeholder="学院排名" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-cname" class="am-form-field am-radius" placeholder="学院名称" /></p>' +
        '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><select id="classfiy-select" data-am-selected>' +
        // '</select>' +
        // '<input id="classify-select-value" type="text" value="1" hidden></p>' +
        // '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-ctype" class="am-form-field am-radius" placeholder="学院种类" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-cnum" class="am-form-field am-radius" placeholder="学院人数" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-cdescription" class="am-form-field am-radius" placeholder="学院描述" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><input type="text" id="data-cheadmaster" class="am-form-field am-radius" placeholder="学校校长" /></p>' +
        '</div>' +
        '<div class="am-u-sm-6">' +
        '<p><select id="classfiy-college-select" data-am-selected>' +
        '</select>' +
        '<input id="classify-select-college-value" type="text" value="1" hidden></p>' +
        '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-s" class="am-form-field am-radius" placeholder="s" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-l" class="am-form-field am-radius" placeholder="l" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xl" class="am-form-field am-radius" placeholder="xl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxl" class="am-form-field am-radius" placeholder="xxl" /></p>' +
        // '</div>' +
        // '<div class="am-u-sm-6">' +
        // '<p><input type="number" id="data-xxxl" class="am-form-field am-radius" placeholder="xxxl" /></p>' +
        // '</div>' +
        '<div class="am-u-sm-12">' +
        '<button type="button" class="am-btn am-btn-success" style="margin: 0 auto;display: block" onclick="addCollegeData()">提交</button>' +
        '</div>' +
        '</div>';
    pageUtils.showModal("新增数据", html);
     $.ajax({
         method:"post",
         url:contextPath+"/School/getAll",
         success:function (data) {
             var html="";
             $.each(data.result, function (indexInArray, value) {
                 html+='<option value="'+value.schoolid+'">'+value.sname+'</option>'
             });
             var $selected = $('#classfiy-college-select');
             $selected.append(html);
             $selected.selected();
             $selected.on('change', function() {
                 $("#classify-select-college-value").attr("value",$(this).val());
             });
         }
     })
}

function addCollegeData() {
    var collegeid=$("#data-collegeid").val();
    var cname = $("#data-cname").val();
    var ctype = $("#data-ctype").val();
    var cnum = $("#data-cnum").val();
    var cdescription = $("#data-cdescription").val();
    var cheadmaster = $("#data-cheadmaster").val();
    var schoolid=$("#classify-select-college-value").val();
    $.ajax({
        method:"post",
        url:contextPath+"/College/add",
        data:{collegeid:collegeid,cname:cname,ctype:ctype,csort:cnum,cdescription:cdescription,cheadmaster:cheadmaster,schoolid:schoolid},
        success:function (data) {
            alert("新增数据成功！");
            pageUtils.closeModal();
            initDataCollegeTables();
            initOperationLogs();
        },
        error:function (jqXHR, textStatus, errorThrown) {
            alert('发生错误!' + textStatus);
        }
    })
}


function returnLogin() {
    window.location.href = "http://localhost:8080/";
}