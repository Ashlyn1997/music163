import React, { useState } from "react"
import propTypes from 'prop-types'
import { getParseLoginState, getMatchReg } from '../../utils/format-utils'
import { Form, Input, Button, Checkbox, message } from 'antd'
import './index.less'
import { useDispatch } from "react-redux"
import { getLoginProfileInfo } from '../theme-login/store/actionCreator'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
}
const tailLayout = {
    wrapperCol: { span: 30 },
}

function ThemeLoginForm(props) {
    // prop/state
    // 拿到“登录的方式”
    const { loginState } = props
    const [phone, setPhone] = useState(null)
    const [isSendSatte, setIsSendSatte] = useState(false)
    const [second, setSecond] = useState(60)
    // 解析登录状态：phone -> '手机号' email->'邮箱'  register -> 注册
    const parseLoginModeText = getParseLoginState(loginState)
    // 表单正则：根据不同登录方式，匹配不同的正则
    const mathchReg = getMatchReg(loginState)
    const matchPhoneReg = getMatchReg('phone')
    const pwdReg = /[0-9a-zA-Z._-]{6,20}/
    const codeReg = /[0-9a-zA-Z._-]{4,20}/
    // redux hook
    const dispatch = useDispatch()
    // other handle

    // component handle
    const onFinish = ({username, password}) => {
        // 先固定写死：手机号登录
        dispatch(getLoginProfileInfo(username, password, true))
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <>
            <Form
                style={{
                    display: loginState !== 'register' ? 'block' : 'none',
                }}
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label={parseLoginModeText}
                    name="username"
                    rules={[
                        {
                            pattern: mathchReg,
                            message: `请输入正确的${parseLoginModeText}`,
                        },
                        { required: true, message: '请输入你的账户' },
                    ]}
                >
                    <Input autoFocus />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        { pattern: pwdReg, message: '密码最短6位' },
                        { required: true, message: '请输入你的密码!' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <div className="textAlignRight">
                    <Checkbox className="mr80" defaultChecked={true}>
                        自动登录
                    </Checkbox>
                    <span className="forgetPwd">忘记密码?</span>
                </div>
                <Form.Item {...tailLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="middle"
                        block
                        shape="round"
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
            {/* <Form
                style={{
                    display: loginState === 'register' ? 'block' : 'none',
                }}
                {...layout}
                name="basic"
                onFinish={onRegisterFinish}
                onFinishFailed={onRegisterFinishFailed}
            >
                <Form.Item
                    label={parseLoginModeText}
                    name="phone"
                    rules={[
                        {
                            pattern: mathchPhoneReg,
                            message: `请输入正确的手机号`,
                        },
                        { required: true, message: '请输入你的手机号' },
                    ]}
                >
                    <Input
                        autoFocus
                        value={phone}
                        onChange={({ target }) => {
                            setPhone(target.value)
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ pattern: pwdReg, message: '密码最短6位', required: true }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <div
                        className={loginFormStyle.register}
                        onClick={() => handleSendCode()}
                    >
                        {isSendSatte ? second + 's' : '发送验证码'}
                    </div>
                </Form.Item>
                <Form.Item
                    className={loginFormStyle.gap}
                    label="验证码"
                    name="code"
                    rules={[{ pattern: codeReg, message: '验证码最短4位' }, { required: true, message: '请输入你的验证码' }]}
                >
                    <Input disabled={!isSendSatte} />
                </Form.Item>
                <Form.Item
                    className={loginFormStyle.gap}
                    label="昵称"
                    name="nickname"
                    rules={[{ required: true, message: '请输入你的昵称' }]}
                >
                    <Input disabled={!isSendSatte} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="middle"
                        block
                        shape="round"
                    >
                        提交
                    </Button>
                </Form.Item>
            </Form> */}
        </>
    )
}

ThemeLoginForm.propTypes = {
    loginState: propTypes.string,
}
ThemeLoginForm.defaultProps = {
    loginState: 'phone',
}
export default ThemeLoginForm