import { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { searchUsers } from "@/services/ant-design-pro/api";
import {Image} from "antd";

const columns: ProColumns<API.CurrentUser>[] = [
  // 每一个列名
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '用户名',
    dataIndex: 'username',
    align: 'center'
  },
  {
    title: '用户账户',
    dataIndex: 'userAccont',
    copyable: true,
    align: 'center'
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
    render: (_, record) => (
      <div>
        <Image src={record.avatarUrl} width={30} />
      </div>
    ),
  },
  {
    title: '性别',
    align: 'center',
    dataIndex: 'gender',
    valueEnum: {
      0: {text: '女', },
      1: {text: '男',  },
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
    align: 'center',

  },
  {
    title: '邮件',
    dataIndex: 'email',
    align: 'center',

  },
  {
    title: '状态',
    dataIndex: 'userStatus',
    align: 'center',
  },
  {
    title: '星球编号',
    align: 'center',
    dataIndex: 'planetCode',
  },
  {
    title: '角色',
    align: 'center',
    dataIndex: 'userRole',
    //select表示可枚举的值——下拉框
    valueType: 'select',
    valueEnum: {
      0: { text: '地球', status: 'Default' },
      1: {
        text: '太空',
        //Success 绿色、Default 为灰色、Error 为红色
        status: 'Success',
      },
    },
  },
  {
    title: '创建时间',
    align: 'center',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
  {
    title: '操作',
    align: 'center',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const userList = await searchUsers();
        return {
          data: userList
        }
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
      }}
      dateFormatter="string"
      headerTitle="宇航员🛰"
    />
  );
};
