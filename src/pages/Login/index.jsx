import './index.scss'
import { rules } from '@/utils/validate'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
const Login = () => {
    // 操作成功
    const onFinish = message => {
        console.log(message, 'success')
    }
    // 操作失败
    const onFinishFailed = message => {
        console.log(message, 'error')
    }
    return (
        <div className="login">
            <div className="login-container">
                <img className="login-logo" src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc680d23ecbc6_logo-example7.svg" alt="" />
                <Form
                    initialValues={{ mobile: '13911111111', code: '246810', isAgree: true }}
                    size="large"
                    validateTrigger={['onChange', 'onBlur']}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item name="mobile" rules={rules.mobile}>
                        <Input prefix={<UserOutlined />} placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item name="code" rules={rules.code}>
                        <Input prefix={<LockOutlined />} placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item rules={rules.checked} name="isAgree" valuePropName="checked">
                        <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
