export default () => {
  return {
    remark: "",
    name: "mrm-access-pages",
    body: [
      {
        type: "crud",
        name: "checkTaskList",
        api: '/api/v1.0/auth/queryLoginBaseInfo',
        pageField: "page",
        perPageField: "rows",
        defaultParams: {
          rows: "10",
        },
        filter: {
          mode: "horizontal",
          className: "panel-filter",
          labelWidth: 80,
          reset: true,
          size: 'small',
          controls: [
            [
              {
                type: "select",
                name: "productType",
                label: "产品类型",
                options: [],
                clearable: true,
                span: 6
              },
              {
                type: "text",
                name: "dependentChannel",
                label: "属地渠道",
                clearable: true,
                span: 6
              },
              {
                type: "select",
                name: "businessType",
                label: "业务类型",
                options: [],
                clearable: true,
                span: 6
              }
            ],
            // [
            //   {
            //     type: "select",
            //     size: "small",
            //     name: "checkStatus",
            //     label: "排查状态",
            //     options: [],
            //     clearable: true,
            //     multiple: true,
            //     collapseTags: true,
            //     value: [],
            //     span: 6
            //   },
            //   {
            //     type: "select",
            //     size: "small",
            //     name: "checkType",
            //     label: "排查类型",
            //     options: [],
            //     clearable: true,
            //     span: 6
            //   },
            //   {
            //     type: "text",
            //     size: "small",
            //     name: "triggerRule",
            //     label: "触发规则",
            //     clearable: true,
            //     span: 6
            //   }
            // ],
            // [
            //   {
            //     type: "select",
            //     size: "small",
            //     name: "dateType",
            //     label: "日期选择",
            //     value: 'warning_date',
            //     options: [],
            //     clearable: true,
            //     span: 6
            //   },
            //   {
            //     type: "daterange",
            //     size: "small",
            //     name: "dateCondition",
            //     // value: [quarterDate, new Date()],
            //     label: "",
            //     clearable: true,
            //     span: 8
            //   }
            // ],
            // [
            //   {
            //     type: "select",
            //     size: "small",
            //     name: "operationUserType",
            //     label: "操作人",
            //     options: [],
            //     clearable: true,
            //     span: 6,
            //   },
            //   {
            //     type: "text",
            //     size: "small",
            //     name: "operationUser",
            //     label: "",
            //     placeholder: "请输入账号精确查询",
            //     clearable: true,
            //     span: 8
            //   }
            // ]
          ],
          actions: [
            {
              type: "button",
              actionType: "ajax",
              level: "primary",
              label: "查询"
            },
          ]
        },
        bulkActions: [
            {
                type: "button",
                label: "转派件",
                level: "primary",
                actionType: "extend",
                size: "small",
                props: {
                    dialogVisible: true,
                    title: "请选择转派人员",
                    action: "reAssign",
                    type: "checktask",
                    selectedRows: "$selectedRows"
                }
            }
        ],
        columns: [
          {
            label: "序号",
            name: "index",
            width: "60",
            align: "center",
            fixed: "left"
          },
          {
            type: "link",
            label: "机构名称",
            name: "insName",
            align: "center",
            callback: function () { }
          },
          {
            label: "核查状态",
            name: "checkStatus",
            align: "center",
            type: "map",
            map: {}
          },
          {
            label: "排查类型",
            name: "checkType",
            type: "map",
            map: {},
            align: "center"
          },
          {
            label: "属地渠道",
            name: "dependentChannel",
            align: "center"
          },
          {
            type: "link",
            label: "巡店进度",
            name: "patrolProgress",
            align: "center",
            callback: function () { }
          },
          {
            label: "机构类别",
            name: "insType",
            align: "center",
            type: "map",
            map: {},
          },
          {
            label: "排查人",
            name: "checkUser",
            align: "center"
          },
          {
            label: "排查时间",
            name: "checkDate",
            align: "center"
          },
          {
            label: "触发日期",
            name: "warningDate",
            align: "center"
          },
          {
            label: "触发规则/排查内容",
            name: "triggerRule",
            align: "center"
          },
          {
            label: "分派人",
            name: "assignUser",
            align: "center"
          },
          {
            label: "分派时间",
            name: "assignDate",
            align: "center"
          },
          {
            type: "operation",
            label: "操作",
            width: "100",
            align: "center",
            buttonClassName: "center",
            buttons: [
              {
                type: "button",
                level: "text",
                label: "分派",
                actionType: "router",
                callback: function () { }
              },
              {
                type: "button",
                level: "text",
                label: "处理",
                actionType: "router",
                callback: function () { }
              }
            ]
          }
        ]
      }
    ]
  };
};
