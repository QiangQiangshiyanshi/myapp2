import Footer from '@/components/Footer';
import {register} from '@/services/ant-design-pro/api';
import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormText,} from '@ant-design/pro-components';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import {history} from 'umi';
import styles from './index.less';


const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  //表单提交
  const handleSubmit = async (values: API.RegisterParams) => {
    //校验
    const {userPassword, checkPassword} = values;
    if (userPassword !== checkPassword) {
      const defaultRegisterSuccessMessage = '密码不一致！';
      message.error(defaultRegisterSuccessMessage);
      return;

    }
    try {
      // 注册
      //参数传递
      const id = await register(values);
      if(id){
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);

        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const {query} = history.location;
        // const {redirect} = query as {
        //   redirect: string;
        // };
        //注册成功后，依然可以重定向到登录前的位置
        history.push({
          pathname: '/user/login',
          query,

        });
        return;
      }
      // 如果失败去设置用户错误信息
    } catch (error: any) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/*注冊按鈕*/}
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册'
            }
          }
          }
          logo={<img alt="logo" src="/logo.svg"/>}
          title="宇宙001号星球注册"
          subTitle={'😎😍😍😍欢迎帅气逼人的宇航员注册😍😍😍😎'}
          initialValues={{
            autoLogin: true,
          }}

          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'用户注册'}/>
          </Tabs>

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccont"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="请输入用户名"
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="请输入密码"
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: "string",
                    message: '密码最小8位！',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="请重新输入密码"
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: "string",
                    message: '密码最小8位！',
                  },
                ]}
              />
              <ProFormText
                name="planetCode"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="请输入星球编号"
                // 校验规则 rules
                rules={[
                  {
                    required: true,
                    message: '星球编号是必填项！',
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
          </div>
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};
export default Register;
