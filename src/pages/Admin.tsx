import { PageHeaderWrapper } from '@ant-design/pro-components';
import React from 'react';

const Admin: React.FC = (
  props
) => {
  const {children} =props;

  return (
    <PageHeaderWrapper
      //Old
      // content={intl.formatMessage({
      //   //这个页面只有管理员可以查看
      //   // id: 'pages.admin.subPage.title',
      //   // defaultMessage: 'This page can only be viewed by Admin',
      // })}
    >
      {children}


      {/*Old*/}
      {/*这里就是"更快更强的重型组件"*/}
      {/*<Card>*/}
      {/*  <Alert*/}
      {/*    message={intl.formatMessage({*/}
      {/*      id: 'pages.welcome.alertMessage',*/}
      {/*      defaultMessage: 'Faster and stronger heavy-duty components have been released.',*/}
      {/*    })}*/}
      {/*    type="success"*/}
      {/*    showIcon*/}
      {/*    banner*/}
      {/*    style={{*/}
      {/*      margin: -12,*/}
      {/*      marginBottom: 48,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Typography.Title level={2} style={{ textAlign: 'center' }}>*/}
      {/*    <SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You*/}
      {/*  </Typography.Title>*/}
      {/*</Card>*/}
      {/*<p style={{ textAlign: 'center', marginTop: 24 }}>*/}
      {/*  Want to add more pages? Please refer to{' '}*/}
      {/*  <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">*/}
      {/*    use block*/}
      {/*  </a>*/}
      {/*  。*/}
      {/*</p>*/}

      {/*New*/}



    </PageHeaderWrapper>
  );
};

export default Admin;
