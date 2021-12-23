<template>
<div>
    <Card>
        <div slot="title">
            <div class="edit-head">
                <a @click="close" class="back-title">
                    <Icon type="ios-arrow-back" />返回
                </a>
                <div class="head-name">添加</div>
                <span></span>
                <a @click="close" class="window-close">
                    <Icon type="ios-close" size="31" class="ivu-icon-ios-close" />
                </a>
            </div>
        </div>
        <Form ref="form" :model="form" :label-width="100" :rules="formValidate" label-position="left">
            <FormItem label="医生姓名" prop="doctorName">
                <Input v-model="form.doctorName" clearable style="width:570px" />
            </FormItem>
            <FormItem label="医生年龄" prop="age">
                <Input v-model="form.age" clearable style="width:570px" />
            </FormItem>
            <FormItem label="学历学位" prop="education">
                <dict dict="education" v-model="form.education" transfer clearable style="width: 570px" placeholder="学历学位" />
            </FormItem>
            <FormItem label="开始工作时间" prop="workDate">
                <DatePicker type="date" v-model="form.workDate" clearable style="width:570px"></DatePicker>
            </FormItem>
            <FormItem label="毕业学校" prop="university">
                <Input v-model="form.university" clearable style="width:570px" />
            </FormItem>
            <FormItem label="职称" prop="postLevel">
                <dict dict="postLevel" v-model="form.postLevel" transfer clearable style="width: 570px" placeholder="职称" />
            </FormItem>
            <FormItem label="专业" prop="major">
                <Input v-model="form.major" clearable style="width:570px" />
            </FormItem>
            <FormItem label="所属科室" prop="subjectName">
                <Select v-model="form.subjectName" clearable style="width:570px">
                    <Option value="0">请自行编辑下拉菜单</Option>
                </Select>
            </FormItem>
            <FormItem label="医生介绍" prop="about">
                <Input v-model="form.about" clearable style="width:570px" />
            </FormItem>
            <Form-item class="br">
                <Button @click="handleSubmit" :loading="submitLoading" type="primary">提交并保存</Button>
                <Button @click="handleReset">重置</Button>
                <Button type="dashed" @click="close">关闭</Button>
            </Form-item>
        </Form>
    </Card>
</div>
</template>

<script>
import {
    addDoctor
} from "./api.js";
import dict from "@/views/my-components/zwz/dict";
export default {
    name: "add",
    components: {
      dict
    },
    data() {
        return {
            submitLoading: false, // 表单提交状态
            form: { // 添加或编辑表单对象初始化数据
                doctorName: "",
                age: "",
                education: "",
                workDate: "",
                university: "",
                postLevel: "",
                major: "",
                subjectName: "",
                about: "",
            },
            // 表单验证规则
            formValidate: {}
        };
    },
    methods: {
        init() {},
        handleReset() {
            this.$refs.form.resetFields();
        },
        handleSubmit() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    addDoctor(this.form).then(res => {
                        this.submitLoading = false;
                        if (res.success) {
                            this.$Message.success("操作成功");
                            this.submited();
                        }
                    });
                }
            });
        },
        close() {
            this.$emit("close", true);
        },
        submited() {
            this.$emit("submited", true);
        }
    },
    mounted() {
        this.init();
    }
};
</script>

<style lang="less">
// 建议引入通用样式 具体路径自行修改 可删除下面样式代码
// @import "../../../styles/single-common.less";
.edit-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .back-title {
        color: #515a6e;
        display: flex;
        align-items: center;
    }

    .head-name {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        color: #17233d;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .window-close {
        z-index: 1;
        font-size: 12px;
        position: absolute;
        right: 0px;
        top: -5px;
        overflow: hidden;
        cursor: pointer;

        .ivu-icon-ios-close {
            color: #999;
            transition: color .2s ease;
        }
    }

    .window-close .ivu-icon-ios-close:hover {
        color: #444;
    }
}
</style>
