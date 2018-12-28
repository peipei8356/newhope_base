// 全局-返回码
export const RESP_CODE = {
  SUCCESS: '00', // 成功
  ASYNC: '000001', // 异步
  TIMEOUT: '98', // 超时
  ERROR: '99', // 异常
  BASE: '11', // 基础错误，只需抛出toast提示
  USER_ERROR: '15', // 用户信息错误
  TWELVE: '12', // toast弹框
  THIRTEEN: '13', // 组合错误码13
  FOURTEEN: '14' // alert弹框
}

// 会员-返回码
export const MEM_STS = {
  MEM001: 'MEM001', //  会员不存在
  MEM002: 'MEM002', // 会员已存在
  MEM003: 'MEM003', // 会员状态非正常
  MEM004: 'MEM004', // 会员标签已存在
  MEM005: 'MEM005', // 会员标签不存在
  MEM006: 'MEM006', // 存在会员编号
  MEM007: 'MEM007', // 密保正确
  MEM008: 'MEM008', // 密保错误
  MEM009: 'MEM009', // 验证码发送类型为手机
  MEM0010: 'MEM010', // 会员密码错误
  MEM0011: 'MEM011', // 不存在验证码
  MEM0012: 'MEM012', // 验证码逾期
  MEM0013: 'MEM013', // 验证码输入错误
  MEM0014: 'MEM014', // 验证码发送类型为电子邮箱
  MEM0015: 'MEM015', // 注册激活
  MEM0016: 'MEM016', // 动态登录密码
  MEM0017: 'MEM017', // 验证码错误次数过多
  MEM0018: 'MEM018', // 验证码错误,请稍后重试
  MEM0019: 'MEM019', // 请在解冻之后获取验证码
  MEM0020: 'MEM020', // 请在10分钟之后获取验证码
  MEM0021: 'MEM021', // 会员密码已存在
  MEM0022: 'MEM022', // 会员密码不存在
  MEM0023: 'MEM023', // 绑定银行卡不存在
  MEM0024: 'MEM024', // 设备唯一识别号错误
  MEM0025: 'MEM025', // 会员银行卡列表为空
  MEM0026: 'MEM026', // 会员登陆信息不存在
  MEM0027: 'MEM027', // 生成验证码失败
  MEM0028: 'MEM028', // 注册校验失败，请重新校验
  MEM0029: 'MEM029', // 禁止用户当天24点之前再次注册校验
  MEM0030: 'MEM030', // 禁止用户1小时内再次注册校验
  MEM0031: 'MEM031', // 状态为已注销的会员不允许变更
  MEM0032: 'MEM032', // 会员登出失败
  MEM0033: 'MEM033', // 绑卡成功
  MEM0034: 'MEM034', // 已鉴权&结束
  MEM0035: 'MEM035', // 银行卡鉴权失败
  MEM0036: 'MEM036', // 存在持仓不允许解绑
  MEM0037: 'MEM037', // 会员未注册
  MEM0038: 'MEM038', // 会员未认证
  MEM0039: 'MEM039' // 只支持绑定一张银行卡'
}

export let PAGE_SIZE = 10
export let PAGE_NUM = 1

// 问卷编号
export const MEMBER_QUESTION_ID = '10000000001'

// 来源渠道编号
export const REGISTER_SOURCE_ID = '100000000000000000088888888'

// 弹窗类型
export const DIALOG_TYPE = {
  NETWORK: 'dialog-network',
  SUCCESS: 'dialog-success',
  FAIL: 'dialog-fail'
}

// 来源编号
export const SOURCE_ID = {
  WEBSITE: '101', // 域内网站
  APP: '102', // 域内APP
  M: '103', // 域内M端
  BATCH: '104', // 域内后台批量
  SINGLE: '105', // 域内后台单笔
  DISTRIBUTION: '201', // 域外分销
  ALLIANCE: '202' // 域外联合
}

// 会员登陆方法值
export const MEM_LOGIN_TYPE = {
  CHECK_MEM: 'checkMember', // 查询会员是否存在
  CHECK_MEM_IP: 'checkMemberIP', // 查询会员IP是否发生变化
  LOGIN: 'memberLogin' // 会员登录
}

// 是否域内会员
export const IS_REGION_MB = {
  MB_YES: '1', // 是域内会员
  MB_NO: '2' // 不是域内会员
}

// 是否存在域内会员
export const IS_EXIST = {
  EXIST_NO: '1', // 不存在域内会员
  EXIST_YES: '2' // 存在域内会员
}

// 会员状态
export const MEMBER_STATUS = {
  STATUS_INACTIVE: '0', // 未激活
  STATUS_NORMAL: '1', // 正常
  STATUS_FROST: '2' // 已冻结
}

// 会员账号类型（注册方式）
export const MEMBER_TYPE = {
  MEMBER_PHONE: '1', // 手机
  MEMBER_EMAIL: '2' // EMAIL
}

// 应用ID
export const USE_ID = {
  GY_ID: '20' //
}

// 请求终端
export const APP_ID = {
  IOS: '10',
  ANDROID: '11',
  PC: '12',
  M: '13',
  WX: '14'
}

// 短信验证码用途
export const SECURITY_USER = {
  'DYNAMIC_LOGIN': '11', // 动态密码登录
  'REGISTER': '10' // 注册激活
}

// 会员认证状态
export const AUTH_STATUS = {
  NOT_CERTIFICATED: '0', // 未认证
  PERSONAL_AUTH: '1', // 个人身份证认证
  ENTERPRISE_AUTH: '2', // 企业信息认证
  LEGAL_AUTH: '3', // 法人认证
  LIVING_AUTH: '4', // 活体认证
  RE_CERTIFICATION: '5' // 重新认证
}

// 会员类型
export const CUSTOMER_TYPE = {
  PERSONAGE: '1', // 个人会员
  ENTERPRISE: '2' // 企业会员
}

// 银行卡认证状态
export const BANKCARD_AUTH_STATUS = {
  AUTH: '1', // 鉴权
  NO_AUTH: '2' // 未鉴权
}

// 银行卡启用状态
export const BANKCARD_USING_STATUS = {
  ENABLE: '1', // 启用
  DISABLE: '2' // 未启用
}

// 银行账户用途
export const BANK_CARD_USE = {
  COMMON_USE: 10, // 通用
  INVESTMENT: 20, // 投资
  FINANCING: 30 // 融资
}

// 银行卡类型
export const BANK_TYPE = {
  DEBIT: '1', // 借记卡
  CREDIT: '2' // 贷记卡,
}

// 银行限额查询类型
export const BANK_CODE_TYPE = {'MAXIMUM': '1', 'MINIMUM': '2', 'ALL': '3'}

// 银行限额查询类型
export const BONUSQUERY_TYPE = {
  'FULLCOUPONS': '11', // 满减券
  'PASTECOUPONS': '21', //  贴息券
  'INVITE': '22', // 邀请奖励
  'ADDCOUPONS': '23' // 加息券
}

// 订单类型
export const ORDER_TYPE = {
  HOLDING: '23', // 持有
  APPLYING: '', // 申购
  PAYMENTED: '22' // 赎回
}

// 订单状态
export const ORDER_STATUS = {
  CREATE: '1', // 新建
  CHECKED: '2', // 已审核
  CHECKED_FAIL: '3', // 审核失败
  CANCELLATION: '4', // 已作废
  PAID: '5', // 已支付
  PAID_FAIL: '6', // 支付失败
  AFFIRM: '7' // 已确认
}

// 年利率类型
export const APR_TYPE = {
  FIXATION: '1',
  FLOAT: '2'
}

// 栏目编号
export const CHANNEL_ID = {
  INDEX: '1', // 首页
  TREASURE: '2', // 财富
  FINANCE: '3', // 定期
  ACTIVITY: '5' // 平台活动

}

// 模块ID
export const MODULE_TYPE = {
  ADVERTISEMENT: '1', // 首页-顶部广告
  ANNOUNCEMENT: '2', // 首页-公告
  REGISTERACTIVITY: '3', // 注册活动
  NEW_MEM: '4', // 首页-新手专享
  FINANCE: '5', // 首页-精选
  TREASURE: '6', // 首页-私人财富
  PLATACTIVITY: '9' // 发现-平台活动

}

// 回款方式
export const REPAYMENT_TYPE = {
  ONCE_REPAY: '1' // 一次性回款
}

// 优惠券
export const BONUS_TYPE = {
  BONUS11: '11', // 满减券
  BONUS21: '21', // 返利券
  BONUS22: '22', // 奖励券
  BONUS23: '23' // 增益券
}

// 首投特权固定编号
export const PRO_PRIVILEGE_ID = '201710301137421790210320001'

// 基础URL
export const BASE_URL = window.location.origin + '/filegw/download?fileId='
// export const BASE_URL = 'http://10.55.65.69:9999/base-gateway'
// export const BASE_URL = 'http://10.50.22.206:30524/base-gateway'
// export const BASE_URL = 'http://10.50.22.73:9999/base-gateway'

// 风险等级
export const RISK_LEVEL = {
  LEVEL_A1: {
    LEVEL_NO: 'A1',
    LEVEL_CATELOG: '保守型',
    RISK_PRODUCT: '五星'
  },
  LEVEL_A2: {
    LEVEL_NO: 'A2',
    LEVEL_CATELOG: '稳健型',
    RISK_PRODUCT: '四星半'
  },
  LEVEL_A3: {
    LEVEL_NO: 'A3',
    LEVEL_CATELOG: '平衡型',
    RISK_PRODUCT: '四星'
  },
  LEVEL_A4: {
    LEVEL_NO: 'A4',
    LEVEL_CATELOG: '成长型',
    RISK_PRODUCT: '三星半'
  },
  LEVEL_A5: {
    LEVEL_NO: 'A5',
    LEVEL_CATELOG: '进取型',
    RISK_PRODUCT: '三星'
  }
}
export const ID_TYPE = {
  MAINLAND: ['0', '1', '2', '3', '5', '7', '8', '9'],
  OVERSEAS: ['4', '6', 'A']
}
// 风险测试最大次数
export const MAX_RISK_NUM = 3

export const BONUS_STATUS = {
  ISSUED: '1',
  USED: '2',
  EXPIRED: '3',
  LOCKED: '4'
}

// QA
// export const NEW_YEAR = {
//   COUPONS5: '201801312013260200220850009',  // 5%增益增益券
//   COUPONS8: '201801312014429150220850011',  // 8%增益增益券
//   COUPONS10: '201801312015577890220840023', // 10%增益增益券
//   LOTTERY: '201801312034015540220850013'    // 大转盘
// }

// PRD
export const NEW_YEAR = {
  COUPONS5: '201802072159548141600570001',
  COUPONS8: '201802072202505620640570001',
  COUPONS10: '201802072204481750640570003',
  LOTTERY: '201802072249419381600570015'
}

// 会员密码类型
export const MEM_PWD_TYPE = {
  LOGIN: '1', // 登录密码
  TRADING: '2', // 交易密码
  GESTURE: '3' // 手势密码
}

// 设置会员密码  --- 操作类型
export const SET_PWD_TYPE = {
  CREATE: '1', // 创建
  REVISE: '2', // 修改
  RESET: '3' // 重置
}

// 设置短信模板ID
export const SET_TPLT_ID = {
  GY_TPLT: '100003' // 谷雨短信模板ID
}
