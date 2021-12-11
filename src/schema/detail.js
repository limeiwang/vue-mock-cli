export default
{
    "title":"银企直连单据详情",
    "initApi": "/api/v1.0/auth/getaccountdetail?insName=$insName",
    "body":[
        {
            "name": "bbAccountDetail",
            "type": "form",
            "mode": "horizontal",
            "controls": [
                {
                    // 隐藏
                    "type": "temporary",
                    "name": "can_cancel"
                },
                {
                    // 隐藏
                    "type": "temporary",
                    "name": "isCancel"
                }

            ],

            "fieldSet": [
                {
                    "title": "收款记录信息",
                    "sheetName": "accountInfo",
                    "controls": [
                        [
                            {
                                "type": "static",
                                "label": "收款编号:",
                                "name": "account_no"
                            },
                            {
                                "type": "static",
                                "label": "网银流水号:",
                                "name": "serial_number"
                            }

                        ],
                        [
                            {
                                "type": "static",
                                "label": "收款账户:",
                                "name": "acctnum"
                            },
                            {
                                "type": "static",
                                "label": "公司主体:",
                                "name": "company_main_body"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "网银到帐日期:",
                                "name": "account_arrival_time"
                            },
                            {
                                "type": "static",
                                "label": "单据金额(元):",
                                "name": "bill_money"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "网银摘要:",
                                "name": "remark"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "付款方账号:",
                                "name": "payer_account"
                            },
                            {
                                "type": "static",
                                "label": "付款方名称:",
                                "name": "payer_name"
                            }
                        ]

                    ]
                },
                {
                    "title": "认款处理信息",
                    "sheetName": "acceptInfo",
                    "controls": [
                        [
                            {
                                "type": "static",
                                "label": "单据类型:",
                                "name": "bill_type_name"
                            },
                            {
                                "type": "static",
                                "label": "单据状态:",
                                "name": "status_name"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "认款产品线:",
                                "name": "product_name"
                            },
                            {
                                "type": "static",
                                "label": "认款类型:",
                                "name": "accept_account_type_name"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "业务凭据类型:",
                                "name": "bussiness_credentials_type_name"
                            },
                            {
                                "type": "static",
                                "label": "业务凭据编号:",
                                "name": "bussiness_credentials_number"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "认款备注:",
                                "name": "accept_account_remark"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "认款人:",
                                "name": "accept_account_ucname"
                            },
                            {
                                "type": "static",
                                "label": "认款时间:",
                                "name": "accept_account_time"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "操作人:",
                                "name": "uc_name"
                            },
                            {
                                "type": "static",
                                "label": "操作时间:",
                                "name": "operation_time"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "核销人:",
                                "name": "confirm_ucname"
                            },
                            {
                                "type": "static",
                                "label": "核销时间:",
                                "name": "confirm_time"
                            }
                        ],
                        [
                            {
                                "type": "static",
                                "label": "创建时间:",
                                "name": "create_time"
                            },
                            {
                                "type": "static",
                                "label": "更新时间:",
                                "name": "modify_time"
                            }
                        ]
                    ]

                },
                {
                    "title": "单据来源",
                    "sheetName": "parentInfo",
                    "controls": [
                        {

                            "type": "table",
                            "name": "parent",
                            "columns": [
                                {
                                    "name": "account_no",
                                    "label": "收款编号",
                                    "type": "tpl",
                                    "tpl": "<%= textLinkFormat(account_no, '/pcrm/group/account/bbaccountdetail?account_no=$rowData.account_no', '_self') %>"

                                },
                                {
                                    "name": "serial_number",
                                    "label": "网银流水号",
                                    "width": "220"
                                },
                                {
                                    "name": "bill_money",
                                    "label": "单据金额(元)"
                                },
                                {
                                    "name": "status_name",
                                    "label": "单据状态"
                                },
                                {
                                    "name": "accept_account_type_name",
                                    "label": "认款类型"
                                },
                                {
                                    "name": "bussiness_credentials_type",
                                    "label": "业务凭据类型"
                                },
                                {
                                    "name": "bussiness_credentials_number",
                                    "label": "业务凭据单号",
                                    "width": "220"
                                }
                            ]
                        }
                    ]
                },
                {
                    "visibleOn": "child && child.length > 0",
                    "title": "单据去向",
                    "sheetName": "childInfo",
                    "controls": [
                        {
                            "type": "table",
                            "name": "child",
                            "columns": [
                                {
                                    "name": "account_no",
                                    "label": "收款编号",
                                    "type": "tpl",
                                    "tpl": "<%= textLinkFormat(account_no, '/pcrm/group/account/bbaccountdetail?account_no=$rowData.account_no', '_self') %>"

                                },
                                {
                                    "name": "serial_number",
                                    "label": "网银流水号",
                                    "width": "220"
                                },
                                {
                                    "name": "bill_money",
                                    "label": "单据金额(元)"
                                },
                                {
                                    "name": "status_name",
                                    "label": "单据状态"
                                },
                                {
                                    "name": "accept_account_type_name",
                                    "label": "认款类型"
                                },
                                {
                                    "name": "bussiness_credentials_type",
                                    "label": "业务凭据类型"
                                },
                                {
                                    "name": "bussiness_credentials_number",
                                    "label": "业务凭据单号",
                                    "width": "220"
                                }
                            ]
                        }
                    ]
                }
            ]

        },

        {
          type: 'form',
          name: 'test',
          controls: [],
          fieldSet: [
            {
              type: 'table',
              title: "测试用",
              name: 'institutionWarnHistory',
              controls: [
                {
                  type: 'table',
                  name: 'institutionWarnHistory',
                  value: [],
                  columns: [{
                      label: '申请单号',
                      name: 'applyId'
                  }, {
                      label: '首次放款时间',
                      name: 'firstLoanDay'
                  }, {
                      label: '机构总放款量',
                      name: 'totalLoanAmount'
                  }, {
                      label: '机构当前贷款余额',
                      name: 'loanBalance'
                  }, {
                      label: '当前M2+逾期率',
                      name: 'm2'
                  }, {
                      label: '当前M2+逾期人数',
                      name: 'm2_num'
                  }, {
                      label: '当前放款人数合计',
                      name: 'totalLoanPersonNum'
                  }, {
                      label: '创建时间',
                      name: 'createTime'
                  }, {
                      label: '更新时间',
                      name: 'updateTime'
                  }]
                },
              ]
            },
          ]
        },


        {
            "visibleOn": "can_cancel",
            "disabledOn": "isCancel",
            "type": "button",
            "actionType": "dialog",
            "label": "撤销认款",
            "dialog": {
                "title": "确认取消认款",
                "body": {
                    "type": "form",
                    "name": "cancel_form",
                    "controls": [
                        {
                            "type": "static",
                            "value": "撤销后原单据不变，产生一条新单据供后续处理，你确认要撤销对单据的认款么？"
                        },
                        {
                            "type": "static",
                            "valueTemplate": "account_no",
                            "label": "收款编号"
                        },
                        {
                            "type": "static",
                            "valueTemplate": "bill_money",
                            "label": "单据金额(元)"
                        },
                        {
                            "type": "static",
                            "valueTemplate": "payer_name",
                            "label": "付款方名称"
                        }

                    ],
                    "actions": [
                        {
                            "type": "button",
                            "actionType": "ajax",
                            "api": {
                                "url":  "/account/api/accountcancel",
                                "data": {
                                    "accountCode": "$account_no"
                                }
                            },
                            "messages":{
                                "success": "撤销成功，请关闭页面，并刷新列表页。"
                            },
                            "level": "primary",
                            "label": "确定"
                        },
                        {
                            "actionType": "cancel",
                            "type": "button",
                            "level": "info",
                            "label": "取消"
                        }
                    ]
                }

            }
        }
    ]
}
