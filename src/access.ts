/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    //用户权限，从后端返回的数据进行确实是否是管理员
    canAdmin: currentUser && currentUser.userRole === 1,

  };
}
